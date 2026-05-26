type NavigatorWithUA = Navigator & { userAgentData?: { platform: string } };

function cssSupports(property: string, value: string): boolean {
  try {
    return CSS.supports(property, value);
  } catch {
    return false;
  }
}

function getPlatform(): string {
  try {
    return (navigator as NavigatorWithUA).userAgentData?.platform ?? navigator.userAgent ?? '';
  } catch {
    return '';
  }
}

const platform = getPlatform();
const isMac = /mac/i.test(platform);
const isWindows = /win/i.test(platform);

export { cssSupports, isMac, isWindows };
