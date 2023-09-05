/**
 * generate an iframe with the url
 * @param url
 */
export function iframe(url: string): string {
  return `<iframe src="${url}" style="border:none; width:100%; height:100%; box-sizing:border-box; min-height: 85vh;"></iframe>`;
}
