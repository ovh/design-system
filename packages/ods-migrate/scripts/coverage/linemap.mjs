/*
 * Line alignment between two versions of a file, from a line diff. A line kept as is maps to its
 * new line; a line inside a hunk that replaces as many lines as it removes (an edit in place) maps
 * to the line at the same offset; a line inside any other hunk maps to the whole hunk on the other
 * side (possibly empty).
 */
import { diffArrays } from 'diff';

export function splitLines(text) {
  return text.split(/\r?\n/);
}

/* → { hunks: [{ a0, a1, b0, b1 }], oldTo: Int32Array (-1 = in a hunk), newTo, hunkOfOld, hunkOfNew } (0-based). */
export function alignLines(oldLines, newLines) {
  const hunks = [];
  const oldTo = new Int32Array(oldLines.length).fill(-1);
  const newTo = new Int32Array(newLines.length).fill(-1);
  const hunkOfOld = new Int32Array(oldLines.length).fill(-1);
  const hunkOfNew = new Int32Array(newLines.length).fill(-1);
  let i = 0;
  let j = 0;
  let open = null;
  const close = () => {
    if (!open) return;
    open.a1 = i;
    open.b1 = j;
    open.inPlace = open.a1 - open.a0 === open.b1 - open.b0;
    for (let k = open.a0; k < open.a1; k += 1) hunkOfOld[k] = hunks.length;
    for (let k = open.b0; k < open.b1; k += 1) hunkOfNew[k] = hunks.length;
    hunks.push(open);
    open = null;
  };
  for (const part of diffArrays(oldLines, newLines)) {
    const count = part.value.length;
    if (!part.added && !part.removed) {
      close();
      for (let k = 0; k < count; k += 1) {
        oldTo[i + k] = j + k;
        newTo[j + k] = i + k;
      }
      i += count;
      j += count;
      continue;
    }
    if (!open) open = { a0: i, b0: j };
    if (part.removed) i += count;
    else j += count;
  }
  close();
  return { hunks, oldTo, newTo, hunkOfOld, hunkOfNew };
}

/* The 0-based half-open range of new lines that old line `i` became. */
export function oldToNewRange(align, i) {
  if (align.oldTo[i] >= 0) return [align.oldTo[i], align.oldTo[i] + 1];
  const h = align.hunks[align.hunkOfOld[i]];
  if (!h) return [i, i];
  return h.inPlace ? [h.b0 + i - h.a0, h.b0 + i - h.a0 + 1] : [h.b0, h.b1];
}

/* The 0-based half-open range of old lines that new line `j` comes from (empty for an insertion). */
export function newToOldRange(align, j) {
  if (align.newTo[j] >= 0) return [align.newTo[j], align.newTo[j] + 1];
  const h = align.hunks[align.hunkOfNew[j]];
  if (!h) return [j, j];
  return h.inPlace ? [h.a0 + j - h.b0, h.a0 + j - h.b0 + 1] : [h.a0, h.a1];
}

/* The offset where each line starts (0-based lines). */
export function lineStarts(text) {
  const starts = [0];
  for (let i = 0; i < text.length; i += 1) if (text.charCodeAt(i) === 10) starts.push(i + 1);
  return starts;
}

/* The 0-based line of `offset`. */
export function lineOf(starts, offset) {
  let lo = 0;
  let hi = starts.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (starts[mid] <= offset) lo = mid;
    else hi = mid - 1;
  }
  return lo;
}

/* → { line, column } (1-based) of `offset`. */
export function positionOf(starts, offset) {
  const line = lineOf(starts, offset);
  return { line: line + 1, column: offset - starts[line] + 1 };
}
