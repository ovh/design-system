/* The text summary of a coverage run. */

function table(rows) {
  const widths = rows[0].map((_, i) => Math.max(...rows.map((r) => String(r[i]).length)));
  return rows.map((r) => r.map((c, i) => String(c).padEnd(widths[i])).join('  ')).join('\n');
}

const ORDER = ['tool-wrong', 'decision', 'unrelated-change', 'style-only', 'differ'];
const r0 = (cls) => (cls === 'differ' ? '' : `, ${cls}`);

function pct(n) {
  return n === null ? '–' : `${n}%`;
}

/*
 * The headline numbers, each with what it counts:
 *   sites      breaking API usages and removed names in code, in packages on ODS 19 (snapshots apart)
 *   auto       fixed by ods-migrate; marked: left with a TODO(ods-v20) marker; missed: left silently
 *   premature  files (hunks) ods-migrate changed in packages that are not on ODS 19
 *   regressions  v20 errors of the migrated code the unmigrated code had against neither major
 *   truth      compared items: agree, and each DIFFER by class
 */
export function headline(result) {
  const s = result.summary;
  const premature = result.scope?.premature;
  const out = [
    `summary: ${s.sites} sites, ${s.auto} auto, ${s.marked} marked, ${s.missed} missed; auto ${pct(s.autoPct)}, assisted ${pct(s.assistedPct)}`,
    `  premature rewrites: ${premature ? `${premature.files} file(s), ${premature.hunks} hunk(s) in packages not on ODS 19` : '–'}; regressions: ${s.regressions} (${s.regressionsUnderMarker} under a marker)`,
  ];
  const tr = result.truth;
  if (tr?.byClass) {
    out.push(`  truth: ${tr.agree} agree, ${tr.differ} differ = tool-wrong ${tr.byClass['tool-wrong']}, decision ${tr.byClass.decision}, unrelated-change ${tr.byClass['unrelated-change']}, style-only ${tr.byClass['style-only']}`);
  }
  return out;
}

export function printSummary(result, { sites = false } = {}) {
  const s = result.summary;
  const lines = [];
  lines.push(`corpus ${result.corpus}  (v19 ${result.refs.v19.ref} ${result.refs.v19.sha.slice(0, 9)} → v20 ${result.refs.v20.ref} ${result.refs.v20.sha.slice(0, 9)})`);
  lines.push(`type-checked ${result.files.typeChecked} files${result.files.snippets ? ` and ${result.files.snippets} snippets` : ''}, scanned ${result.files.scanned} for tokens; removed names: ${result.removedNames.css} custom properties, ${result.removedNames.scss} SCSS variables, ${result.removedNames.mixin} mixins/functions${result.removedNames.module !== undefined ? `, ${result.removedNames.module} CSS-module classes` : ''}${result.removedNames.font !== undefined ? `, ${result.removedNames.font} font families, ${result.removedNames.export} exports, ${result.removedNames.prop} component props` : ''}`);
  lines.push(`tsc errors: v19 ${result.noise.v19Errors}, v20 ${result.noise.v20Errors}; v20 only ${result.noise.v20OnlyErrors ?? '–'}, of which ${result.noise.v20OdsErrors} on ODS code${result.noise.v20OnlyNotOds !== undefined ? ` (${result.noise.v20OnlyNotOds} not attributed to ODS)` : ''}; ods-migrate exit ${result.migrate.exit}`);
  if (result.project) {
    const p = result.project;
    lines.push(`project: ${p.packages} package.json (${Object.entries(p.byStatus).map(([k, v]) => `${k} ${v}`).join(', ') || 'none'}), ${p.tsconfigsRead} tsconfigs read (${p.withPaths} with paths/baseUrl${p.unresolvedExtends.length ? `; extends not found: ${p.unresolvedExtends.join(', ')}` : ''}); ${p.ods.files} files bind ODS, ${p.ods.throughCorpusModules} through ${p.ods.corpusModuleSpecifiers} corpus module specifier(s)`);
  }
  if (result.scope) {
    const sc = result.scope;
    lines.push(`scope: ${sc.excludedSites} site(s) out of scope (${Object.entries(sc.excludedByStatus).map(([k, v]) => `${k} ${v}`).join(', ') || '–'}); premature rewrites (packages not on ODS 19): ${sc.premature.files} file(s), ${sc.premature.hunks} hunk(s), ${sc.premature.sites} site(s) touched`);
  }
  lines.push('');
  lines.push(...headline(result));
  lines.push('');
  const header = ['', 'sites', 'auto', 'marked', 'missed', 'auto%', 'assisted%'];
  const rows = [header];
  for (const [kind, k] of Object.entries(s.byKind)) {
    const p = (n) => (k.sites ? `${Math.round((1000 * n) / k.sites) / 10}%` : '–');
    rows.push([kind, k.sites, k.auto, k.marked, k.missed, p(k.auto), p(k.auto + k.marked)]);
  }
  rows.push(['total', s.sites, s.auto, s.marked, s.missed, pct(s.autoPct), pct(s.assistedPct)]);
  lines.push(table(rows));
  if (s.withoutDocs && (s.byKind.doc || s.byKind.snippet)) {
    const w = s.withoutDocs;
    lines.push(`without Markdown code (doc) and snippets: ${w.sites} sites, ${w.auto} auto, ${w.marked} marked, ${w.missed} missed, auto ${pct(w.autoPct)}, assisted ${pct(w.assistedPct)}`);
  }
  if (result.snapshots?.sites.length) {
    const n = result.snapshots.summary;
    lines.push(`snapshots (.snap, not in the totals): ${n.sites} sites, ${n.auto} auto, ${n.marked} marked, ${n.missed} missed`);
  }
  if (result.mentions?.total) {
    lines.push(`mentions (comments, JSX/HTML text, prose strings, Markdown prose, changelogs; not sites): ${result.mentions.total} (${Object.entries(result.mentions.byContext).map(([k, v]) => `${k} ${v}`).join(', ')})`);
  }
  lines.push('');
  lines.push(`regressions (new v20 errors in the migrated code): ${s.regressions}, of which ${s.regressionsUnderMarker} under a TODO(ods-v20) marker`);
  const tr = result.truth;
  if (tr && tr.byClass) {
    const kinds = Object.entries(tr.byKind).map(([k, v]) => `${k} ${v.agree + v.differ}`).join(', ');
    lines.push(`truth: ${tr.agree + tr.differ} items compared (${kinds}): ${tr.agree} agree, ${tr.differ} differ`);
    lines.push(`  differ: tool-wrong ${tr.byClass['tool-wrong']} (${tr.toolWrongMarked} under a TODO(ods-v20) marker), decision ${tr.byClass.decision}${Object.keys(tr.byLook).length ? ` (${Object.entries(tr.byLook).map(([k, v]) => `${k} ${v}`).join(', ')})` : ''}, unrelated-change ${tr.byClass['unrelated-change']}, style-only ${tr.byClass['style-only']}`);
    lines.push(`  not compared: ${tr.excludedBy.uncovered} items in lines the truth does not cover, ${tr.excludedBy.staleTruth} where the truth left code v20 breaks, ${tr.ignored} changes that do not touch ODS; ${tr.unmatched.length} truth files with no corpus file`);
    lines.push(`  sites: ${tr.sitesAgree} agree, ${tr.sitesDiffer} differ (${Object.entries(tr.sitesDifferByClass).map(([k, v]) => `${k} ${v}`).join(', ') || 'none'}), ${tr.sitesExcluded} excluded, ${tr.sitesWithoutTruth} in files without a truth`);
    lines.push(`  former line comparison (reference): ${tr.legacy.agree} regions agree, ${tr.legacy.differ} differ`);
    if (tr.lookIdsMissing?.length) lines.push(`  ! look ids unknown to the tool's configurator: ${tr.lookIdsMissing.join(', ')}`);
  } else if (tr) lines.push(`truth: ${tr.agree} regions agree, ${tr.differ} differ (sites: ${tr.sitesAgree} agree, ${tr.sitesDiffer} differ)`);
  const missed = [...result.sites, ...(result.snapshots?.sites ?? [])].filter((x) => sites || x.outcome !== 'auto');
  if (missed.length) {
    lines.push('');
    lines.push(sites ? 'sites:' : 'sites not fixed:');
    for (const x of missed) lines.push(`  ${x.outcome.toUpperCase().padEnd(6)} ${x.file}:${x.line}  ${x.kind} ${x.rule}${x.message ? `  ${x.message.slice(0, 140)}` : ''}${x.truth ? `  [truth: ${x.truth}]` : ''}`);
  }
  if (result.regressions.length) {
    lines.push('');
    lines.push('regressions:');
    for (const r of result.regressions) lines.push(`  ${r.file}:${r.line}  ${r.code}${r.underMarker ? ' (under a marker)' : ''}  ${r.message.slice(0, 160)}`);
  }
  const differ = (result.truth?.items ?? result.truth?.regions ?? []).filter((r) => r.verdict === 'differ');
  for (const cls of [...new Set(differ.map((r) => r.class ?? 'differ'))].sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b))) {
    const list = differ.filter((r) => (r.class ?? 'differ') === cls);
    lines.push('');
    lines.push(`differ from the truth${r0(cls)}: ${list.length}`);
    for (const r of list) {
      lines.push(`  ${r.file}:${r.lines[0]}-${r.lines[1]}${r.kind ? `  ${r.kind} ${r.key}` : ''}${r.marked ? '  (under a marker)' : ''}${r.look ? `  [${r.look}]` : ''}${r.reason ? `  ${r.reason}` : ''}`);
      for (const [name, text] of [['original', r.original], ['ods-migrate', r.migrated], ['truth', r.truth]]) {
        lines.push(`    ${name.padEnd(11)} ${text ? text.split('\n').join('\n                ') : '(nothing)'}`);
      }
    }
  }
  const visual = result.visual.filter((v) => v.styleLinesChanged);
  lines.push('');
  lines.push(`not detectable (rendering, not counted): ${visual.length} of ${result.visual.length} rendered ODS components have v20 style changes`);
  const shown = [...visual].sort((a, b) => b.styleLinesChanged - a.styleLinesChanged).slice(0, sites ? visual.length : 12);
  for (const v of shown) lines.push(`  ${v.component.padEnd(22)} ${String(v.usages).padStart(4)} element(s)  ${v.styleLinesChanged} style lines changed${v.stillExists ? '' : ' (folder removed in v20)'}`);
  if (shown.length < visual.length) lines.push(`  … ${visual.length - shown.length} more (--sites or the JSON report)`);
  return lines.join('\n');
}
