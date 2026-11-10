import { readFileSync } from 'node:fs';
import stylelint from 'stylelint';
import { ignoredByOdsMigrate, olderOdsOf } from './resolve.mjs';
import { applyStylePlan, controlOf, isGeneratedOptOut, planStyleNode } from './tokens.mjs';

const mapping = JSON.parse(readFileSync(new URL('../mappings/tokens-v19-to-v20.json', import.meta.url), 'utf8'));

/* The options of the configurator, as the codemod reads them (`{ look, pending }`). */
const isOptions = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);
const configOf = (options) => (isOptions(options) ? { look: options.look ?? {}, pending: options.pending ?? [] } : undefined);
const validOptions = (result, ruleName, enabled, options) => stylelint.utils.validateOptions(
  result,
  ruleName,
  { actual: enabled, possible: [true] },
  { actual: options, optional: true, possible: { look: [isOptions], pending: [(value) => typeof value === 'string'] } },
);

const removedName = 'ods/no-removed-token';
const removedMessages = stylelint.utils.ruleMessages(removedName, {
  removed: (detail) => `${detail} (ODS v20 removed this token)`,
  unresolved: (detail) => detail,
});

/**
 * Flags the design tokens removed in ODS v20 and fixes them with --fix, from the same mapping and
 * the same reading of the property as the codemod. Run after the codemod: it catches what was
 * missed and stops the old tokens from coming back. Options: `[true, { look, pending }]`, the
 * choices of the configurator.
 */
const noRemovedTokenRule = (enabled, options) => (root, result) => {
  if (!validOptions(result, removedName, enabled, options)) {
    return;
  }
  // The opt-out CSS that the CLI generates holds the v19 look on purpose; a package pinned to ODS 17 or 18
  // and a file a .odsmigrateignore leaves out are left alone, as the codemod does.
  const file = root.source?.input?.file;
  if (isGeneratedOptOut(root.source?.input?.css ?? '') || olderOdsOf(file) || ignoredByOdsMigrate(file)) {
    return;
  }
  const config = configOf(options);
  root.walk((node) => {
    const plan = planStyleNode(node, mapping, { config });
    if (!plan) {
      return;
    }
    if (plan.changes.length) {
      stylelint.utils.report({
        fix: () => applyStylePlan(node, plan),
        message: removedMessages.removed(plan.changes.join(', ')),
        node,
        result,
        ruleName: removedName,
      });
    }
    for (const todo of plan.todos) {
      stylelint.utils.report({ message: removedMessages.unresolved(todo), node, result, ruleName: removedName });
    }
  });
};

noRemovedTokenRule.ruleName = removedName;
noRemovedTokenRule.messages = removedMessages;
noRemovedTokenRule.meta = { fixable: true };

const controlName = 'ods/no-control-width';
const controlMessages = stylelint.utils.ruleMessages(controlName, {
  width: (message) => message,
});

/**
 * Flags a width set on the control part of a form field (`[data-ods="select-control"]`): in v20
 * the field width lives on its root, so the control only fills it. Not fixable: the
 * root is another element, which the stylesheet may not select yet.
 */
const noControlWidthRule = (enabled) => (root, result) => {
  if (!stylelint.utils.validateOptions(result, controlName, { actual: enabled, possible: [true] }) || olderOdsOf(root.source?.input?.file) || ignoredByOdsMigrate(root.source?.input?.file)) {
    return;
  }
  root.walkDecls((decl) => {
    const control = controlOf(decl);
    if (control) {
      stylelint.utils.report({ message: controlMessages.width(control.message), node: decl, result, ruleName: controlName, word: decl.prop });
    }
  });
};

noControlWidthRule.ruleName = controlName;
noControlWidthRule.messages = controlMessages;
noControlWidthRule.meta = { fixable: false };

const noRemovedToken = stylelint.createPlugin(removedName, noRemovedTokenRule);
const noControlWidth = stylelint.createPlugin(controlName, noControlWidthRule);

export { noControlWidth, noRemovedToken };
export default [noRemovedToken, noControlWidth];
