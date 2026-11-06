import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  attributeText,
  followsMarker,
  inlineMarker,
  isUntyped,
  isV19Look,
  jsxChildMarker,
  memberRule,
  resolveMapping,
  resolveTokenMapping,
  stripScriptMarkers,
  stripStyleMarkers,
  styleMarker,
} from '../src/shared.mjs';

/* Frozen with CONTRACT.md, like src/shared.mjs: no work package edits this file. */

const mapping = {
  components: {
    Button: {
      props: {
        color: { dropDefault: 'brand', renameTo: 'status', values: { primary: 'brand' } },
        variant: { defaultWas: 'default', dropDefault: 'medium', renameTo: 'emphasis', values: { default: 'high' } },
      },
      whenAbsent: { add: { emphasis: 'high' }, choice: 'button-default-emphasis', unless: ['variant', 'emphasis'] },
    },
    ModalCloseTrigger: { extends: 'Button' },
    Switch: { pending: 'ODS-2336', props: {} },
  },
  exports: {
    DIVIDER_COLOR: { hint: 'export hint', members: { neutral: null, primary: { hint: 'primary is the default' } }, removed: true },
    Switch: { pending: 'ODS-2336', removed: true },
  },
};

describe('shared', () => {
  it('resolves extends without what describes the base component', () => {
    const { components } = resolveMapping(mapping);
    assert.deepEqual(components.ModalCloseTrigger.props.color, { renameTo: 'status', values: { primary: 'brand' } });
    assert.deepEqual(components.ModalCloseTrigger.props.variant, { renameTo: 'emphasis', values: { default: 'high' } });
    assert.equal(components.ModalCloseTrigger.whenAbsent, undefined);
    assert.equal(components.Button.props.color.dropDefault, 'brand');
  });

  it('drops pending entries unless the config enables them', () => {
    assert.equal(resolveMapping(mapping).components.Switch, undefined);
    assert.equal(resolveMapping(mapping).exports.Switch, undefined);
    assert.ok(resolveMapping(mapping, { pending: ['ODS-2336'] }).exports.Switch);
    assert.equal(resolveTokenMapping({ tokens: { '--a': { pending: 'X', to: '--b' }, '--c': { to: '--d' } } }).tokens['--a'], undefined);
  });

  it('memoizes and accepts a resolved mapping', () => {
    const resolved = resolveMapping(mapping);
    assert.equal(resolveMapping(resolved), resolved);
    assert.equal(resolveMapping(mapping, {}), resolved);
  });

  it('reads members in every form', () => {
    const rule = mapping.exports.DIVIDER_COLOR;
    assert.deepEqual(memberRule(rule, 'neutral'), { hint: 'export hint', to: null });
    assert.deepEqual(memberRule(rule, 'primary'), { hint: 'primary is the default', to: null });
    assert.deepEqual(memberRule({ members: { primary: 'accent' } }, 'primary'), { hint: undefined, to: 'accent' });
    assert.equal(memberRule(rule, 'other'), undefined);
  });

  it('reads the look of a choice, Aluminium by default', () => {
    assert.equal(isV19Look(undefined, 'button-default-emphasis'), false);
    assert.equal(isV19Look({ look: { 'button-default-emphasis': 'aluminium' } }, 'button-default-emphasis'), false);
    assert.equal(isV19Look({ look: { 'button-default-emphasis': 'v19' } }, 'button-default-emphasis'), true);
  });

  it('tells untyped files', () => {
    assert.equal(isUntyped('', 'a.jsx'), true);
    assert.equal(isUntyped('', 'a.tsx'), false);
    assert.equal(isUntyped('/* header */\n// @ts-nocheck\nconst a = 1;', 'a.ts'), true);
    assert.equal(isUntyped('const a = 1;\n// @ts-nocheck\n', 'a.ts'), false);
  });

  it('writes attributes', () => {
    assert.equal(attributeText('striped', true), 'striped');
    assert.equal(attributeText('role', 'alertdialog'), 'role="alertdialog"');
    assert.equal(attributeText('striped', false), 'striped={ false }');
    assert.equal(attributeText('style', { expr: '{ color: \'red\' }' }), 'style={{ color: \'red\' }}');
    assert.equal(attributeText('value', { expr: 'String(x)' }), 'value={ String(x) }');
  });

  it('writes, detects and strips markers', () => {
    const inline = `<Badge ${inlineMarker(['a */ b', 'c\nd'])}color={ x } />`;
    assert.equal(inline, '<Badge /* TODO(ods-v20): a *\\/ b / c d */ color={ x } />');
    assert.equal(followsMarker(inline, inline.indexOf('color')), true);
    assert.equal(stripScriptMarkers(inline), '<Badge color={ x } />');

    const source = '<>\n  <Switch />\n</>;\n';
    const index = source.indexOf('<Switch');
    const jsx = source.slice(0, index) + jsxChildMarker('Switch is removed', source, index) + source.slice(index);
    assert.equal(jsx, '<>\n  {/* TODO(ods-v20): Switch is removed */}\n  <Switch />\n</>;\n');
    assert.equal(followsMarker(jsx, jsx.indexOf('<Switch')), true);
    assert.equal(stripScriptMarkers(jsx), source);

    assert.equal(styleMarker('x'), 'TODO(ods-v20): x');
    assert.equal(stripStyleMarkers('a {\n  /* TODO(ods-v20): x */\n  color: red;\n}\n'), 'a {\n  color: red;\n}\n');
  });
});

describe('stripScriptMarkers: a marker ends at its own comment end', () => {
  it('does not run from an attribute marker to a later JSX comment', () => {
    const marked = '<D\n  variant={/* TODO(ods-v20): use `striped={ true }` */ T.striped}\n/>\n{/* PAGINATION */}\n{n && <B />}\n';
    assert.equal(stripScriptMarkers(marked), '<D\n  variant={T.striped}\n/>\n{/* PAGINATION */}\n{n && <B />}\n');
  });
});
