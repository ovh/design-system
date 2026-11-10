import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { attributeText, memberRule, resolveMapping } from '../src/shared.mjs';

const mapping = JSON.parse(readFileSync(new URL('../mappings/v19-to-v20.json', import.meta.url), 'utf8'));
const api = (name) => new Set(JSON.parse(readFileSync(new URL(`./fixtures/wp1/${name}.json`, import.meta.url), 'utf8')).names);
// Public export names of @ovhcloud/ods-react at v19.7.3 and on master (origin/master, 2741442ea).
const v19 = api('api-v19');
const v20 = api('api-v20');

// The keys the engine reads, per level. Anything else is a typo or an undocumented key.
const KEYS = {
  component: ['childless', 'conflicts', 'example', 'exports', 'extends', 'pending', 'props', 'propsType', 'replacedBy', 'whenAbsent'],
  example: ['before', 'imports'],
  export: ['callOptions', 'hint', 'inline', 'listNote', 'memberKeys', 'members', 'note', 'pending', 'removed', 'renameTo'],
  member: ['hint', 'to'],
  prop: ['always', 'coerce', 'constant', 'defaultWas', 'dropDefault', 'hint', 'moveTo', 'note', 'pending', 'remove', 'renameTo', 'stacking', 'todoUnless', 'v19Look', 'values'],
  top: ['components', 'exports', 'from', 'package', 'statics', 'to'],
  v19Look: ['choice', 'values'],
  whenAbsent: ['add', 'choice', 'hint', 'unless'],
};
// The choices of kind `codemod` of configurator/choices.json.
const CODEMOD_CHOICES = ['badge-accent-filled', 'button-default-emphasis', 'card-default-status', 'divider-neutral-grey', 'message-default-emphasis', 'spinner-neutral-grey'];

// Read in the component sources: the default of each prop in v19.7.3 and on the v20 stack, and the props each version declares.
const V19_DEFAULTS = { Badge: { color: 'information' }, Button: { color: 'primary', variant: 'default' }, Card: { color: 'primary' }, Message: { color: 'information', variant: 'default' }, Table: { variant: 'default' } };
const V20_DEFAULTS = { Badge: { emphasis: 'medium', status: 'information' }, Button: { emphasis: 'medium', status: 'brand' }, Card: { status: 'neutral' }, Message: { emphasis: 'medium', status: 'information' }, Table: { striped: false }, Tag: { status: 'information' } };
const V20_ONLY_PROPS = { Accordion: ['emphasis'], Badge: ['emphasis', 'status'], Button: ['emphasis', 'status'], Card: ['status'], Message: ['emphasis', 'status'], Table: ['striped'], Tag: ['status'] };
// Every public component whose props extend ButtonProp, in v19.7.3 and in v20. ModalCloseTrigger is not exported by
// the package index (it is a Modal part), it is kept for kits that re-export it.
const BUTTON_WRAPPERS = ['CartAction', 'EditableCancelTrigger', 'EditableEditTrigger', 'EditableSubmitTrigger', 'ModalCloseTrigger', 'PromptInputFileUploadButton', 'PromptInputSendButton', 'QueryFilterClear'];
const NOT_EXPORTED = ['ModalCloseTrigger'];

const unknownKeys = (object, allowed) => Object.keys(object ?? {}).filter((key) => !allowed.includes(key));
const attrValues = (added) => Object.entries(added ?? {}).map(([name, value]) => attributeText(name, value));

describe('component mapping: shape', () => {
  it('only uses the keys of the contract', () => {
    assert.deepEqual(unknownKeys(mapping, KEYS.top), []);
    for (const [name, component] of Object.entries(mapping.components)) {
      assert.deepEqual(unknownKeys(component, KEYS.component), [], name);
      assert.deepEqual(unknownKeys(component.example, KEYS.example), [], `${name}.example`);
      assert.deepEqual(unknownKeys(component.whenAbsent, KEYS.whenAbsent), [], `${name}.whenAbsent`);
      for (const [prop, rule] of Object.entries(component.props ?? {})) {
        assert.deepEqual(unknownKeys(rule, KEYS.prop), [], `${name}.${prop}`);
        assert.deepEqual(unknownKeys(rule.v19Look, KEYS.v19Look), [], `${name}.${prop}.v19Look`);
      }
    }
    for (const [name, rule] of Object.entries(mapping.exports)) {
      assert.deepEqual(unknownKeys(rule, KEYS.export), [], name);
      for (const [member, value] of Object.entries(rule.members ?? {})) {
        if (value !== null && typeof value === 'object') {
          assert.deepEqual(unknownKeys(value, KEYS.member), [], `${name}.${member}`);
        }
      }
    }
  });

  it('resolves: the Button wrappers take color and variant, without the defaults of Button', () => {
    const resolved = resolveMapping(mapping);
    for (const name of BUTTON_WRAPPERS) {
      const { props } = resolved.components[name];
      assert.deepEqual(Object.keys(props).sort(), ['color', 'variant'], name);
      assert.equal(props.color.renameTo, 'status');
      assert.equal(props.variant.renameTo, 'emphasis');
      for (const rule of Object.values(props)) {
        assert.equal(rule.dropDefault, undefined, name);
        assert.equal(rule.defaultWas, undefined, name);
        assert.equal(rule.v19Look, undefined, name);
      }
      assert.equal(resolved.components[name].whenAbsent, undefined, name);
    }
    // Nothing of the component API is pending: Switch is removed by default.
    assert.equal(resolved.exports.Switch.removed, true);
  });

  it('writes every attribute value it adds with attributeText', () => {
    const texts = [];
    for (const component of Object.values(mapping.components)) {
      texts.push(...attrValues(component.whenAbsent?.add));
      for (const rule of Object.values(component.props ?? {})) {
        for (const added of Object.values(rule.remove ? rule.values ?? {} : {})) {
          texts.push(...attrValues(added));
        }
        for (const added of Object.values(rule.v19Look?.values ?? {})) {
          texts.push(...attrValues(added));
        }
      }
    }
    assert.ok(texts.includes('striped'));
    assert.ok(texts.includes('style={{ backgroundColor: \'var(--ods-semantic-color-interaction-neutral-hover)\' }}'));
    assert.ok(texts.includes('style={{ fill: \'var(--ods-semantic-color-surface-neutral)\' }}'));
  });
});

describe('component mapping: consistency', () => {
  it('maps the constant of a prop the same way as the prop', () => {
    for (const [name, component] of Object.entries(mapping.components)) {
      for (const [prop, rule] of Object.entries(component.props ?? {})) {
        // A todoUnless constant (INPUT_TYPE) only names the values to look for: v20 keeps it as it is.
        if (!rule.constant || rule.todoUnless) {
          continue;
        }
        const constant = mapping.exports[rule.constant];
        assert.ok(constant, `${name}.${prop}: ${rule.constant} is not in exports`);
        for (const [value, to] of Object.entries(rule.values ?? {})) {
          const member = memberRule(constant, value);
          if (rule.remove) {
            assert.ok(constant.removed, `${rule.constant} must be removed with ${name}.${prop}`);
            assert.equal(member?.to ?? null, null, `${rule.constant}.${value}`);
          } else {
            assert.equal(member === undefined ? value : member.to, to, `${rule.constant}.${value}`);
          }
        }
      }
    }
  });

  it('drops only a value that is the v20 default, and keeps the v19 default for the v19 look', () => {
    let count = 0;
    for (const [name, component] of Object.entries(mapping.components)) {
      for (const [prop, rule] of Object.entries(component.props ?? {})) {
        if (rule.dropDefault !== undefined) {
          count += 1;
          assert.equal(rule.dropDefault, V20_DEFAULTS[name]?.[rule.renameTo], `${name}.${prop}.dropDefault`);
          // A v19 value that maps to the default (outline → medium), or that already is it (Card neutral, Badge information).
          assert.ok(Object.values(rule.values).includes(rule.dropDefault) || !Object.hasOwn(rule.values, rule.dropDefault), `${name}.${prop}: no value maps to ${rule.dropDefault}`);
        }
        if (rule.defaultWas !== undefined) {
          assert.equal(rule.defaultWas, V19_DEFAULTS[name]?.[prop], `${name}.${prop}.defaultWas`);
          assert.ok(rule.values[rule.defaultWas], `${name}.${prop}: ${rule.defaultWas} has no v20 value`);
        }
      }
    }
    // The v20 defaults: Button status brand, Button emphasis medium, Message emphasis medium; and the status
    // defaults of the stack: Card neutral, Badge, Message and Tag information.
    assert.equal(count, 7);
    assert.equal(mapping.components.Card.props.color.dropDefault, 'neutral');
  });

  it('keeps the v19 look only through a codemod choice of the configurator', () => {
    for (const [name, component] of Object.entries(mapping.components)) {
      const { whenAbsent } = component;
      if (whenAbsent) {
        assert.ok(CODEMOD_CHOICES.includes(whenAbsent.choice), `${name}: ${whenAbsent.choice}`);
        // Each prop of `unless` is the v19 prop or its v20 name, and what is added is a v20 prop.
        for (const attribute of whenAbsent.unless) {
          assert.ok(component.props[attribute] || V20_ONLY_PROPS[name]?.includes(attribute), `${name}.whenAbsent.unless: ${attribute}`);
        }
        for (const attribute of Object.keys(whenAbsent.add)) {
          assert.ok(whenAbsent.unless.includes(attribute) && V20_ONLY_PROPS[name].includes(attribute), `${name}.whenAbsent.add: ${attribute}`);
        }
      }
      for (const rule of Object.values(component.props ?? {})) {
        if (rule.v19Look) {
          assert.ok(CODEMOD_CHOICES.includes(rule.v19Look.choice), `${name}: ${rule.v19Look.choice}`);
          for (const value of Object.keys(rule.v19Look.values)) {
            assert.ok(Object.hasOwn(rule.values, value), `${name}: v19Look of an unmapped value ${value}`);
          }
        }
      }
    }
    // Divider and Spinner neutral are removed (Aluminium), the v19 grey only through the config.
    assert.deepEqual(mapping.components.Divider.props.color.values.neutral, {});
    assert.deepEqual(mapping.components.Spinner.props.color.values.neutral, {});
  });

  it('only declares as conflicts the props that v20 adds', () => {
    for (const [name, component] of Object.entries(mapping.components)) {
      for (const prop of component.conflicts ?? []) {
        assert.ok(V20_ONLY_PROPS[name]?.includes(prop), `${name}.conflicts: ${prop}`);
      }
      if (component.propsType) {
        assert.ok(v19.has(component.propsType) && v20.has(component.propsType), `${name}.propsType: ${component.propsType}`);
      }
    }
  });
});

describe('component mapping: against the v19 and v20 APIs', () => {
  it('covers every export that v20 removes', () => {
    const missing = [...v19].filter((name) => !v20.has(name) && !mapping.exports[name]);
    assert.deepEqual(missing, []);
  });

  it('renames to an export of v20, and removes only what v20 no longer exports', () => {
    for (const [name, rule] of Object.entries(mapping.exports)) {
      assert.ok(v19.has(name), `${name} is not a v19 export`);
      if (rule.renameTo) {
        assert.ok(v20.has(rule.renameTo), `${name} → ${rule.renameTo} is not a v20 export`);
      }
      if (rule.removed && !rule.pending) {
        assert.ok(!v20.has(name), `${name} is still a v20 export`);
      }
      // Nothing ships pending: an entry whose change is on master applies by default.
      assert.equal(rule.pending, undefined, `${name} is pending`);
    }
  });

  it('maps each compound static to a component of the mapping, as the v19 declarations name it', () => {
    for (const [root, members] of Object.entries(mapping.statics)) {
      assert.ok(v19.has(root), `${root} is not a v19 export`);
      for (const [member, flat] of Object.entries(members)) {
        assert.ok(mapping.components[flat], `${root}.${member} → ${flat} is not a component of the mapping`);
        assert.ok(flat.startsWith(root), `${root}.${member} → ${flat}`);
      }
    }
  });

  it('ships no pending entry: every change of the component API is on master', () => {
    const found = [];
    const walk = (value, path) => {
      if (value && typeof value === 'object') {
        if (Object.hasOwn(value, 'pending')) found.push(path);
        Object.entries(value).forEach(([key, item]) => walk(item, `${path}.${key}`));
      }
    };
    walk(mapping, 'mapping');
    assert.deepEqual(found, []);
  });

  it('lists components that v19 exports, and every Button wrapper', () => {
    for (const [name, component] of Object.entries(mapping.components)) {
      assert.ok(v19.has(name) || NOT_EXPORTED.includes(name), name);
      assert.ok(!component.extends || BUTTON_WRAPPERS.includes(name), name);
    }
    assert.deepEqual(Object.keys(mapping.components).filter((name) => mapping.components[name].extends).sort(), BUTTON_WRAPPERS);
  });

  it('maps the members of Button, Message and Table variant to v20 values', () => {
    assert.deepEqual(mapping.exports.BUTTON_VARIANT.members, { default: 'high', ghost: 'low', outline: 'medium' });
    assert.deepEqual(mapping.exports.ButtonVariant.members, mapping.exports.BUTTON_VARIANT.members);
    assert.deepEqual(mapping.exports.MESSAGE_VARIANT.members, { default: 'high', light: 'medium' });
    assert.deepEqual(mapping.exports.MessageVariant.members, mapping.exports.MESSAGE_VARIANT.members);
    assert.deepEqual(Object.keys(mapping.exports.TABLE_VARIANT.members).sort(), ['default', 'striped']);
    assert.deepEqual(mapping.components.Table.props.variant.values, { default: {}, striped: { striped: true } });
  });
});
