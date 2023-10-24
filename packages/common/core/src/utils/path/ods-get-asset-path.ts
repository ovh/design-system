import { Ods } from '../../configure/ods';

/**
 * modify the given path with the parameter of `ods`.
 * if a config was set for the asset path into `ods`, it applies it.
 * in case of custom path given, it overrides the `ods` one with yours
 * @param path - path to contextualize
 * @param customPath - override with an optional path context
 */
export function odsGetAssetPath(path: string, customPath = ''): string {
  const instance = Ods.instance();
  if (!customPath) {
    customPath = instance.getConfig().asset.path;
  }
  return `${customPath}${path}`;
}
