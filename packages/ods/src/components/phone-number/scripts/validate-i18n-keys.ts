type ValidationError = {
  emptyValues: string[],
  extraCodes: string[],
  fileName: string,
  missingCodes: string[],
}

type FileRow = {
  isoCode: string,
  name: string,
}

const EXPECTED_ISO_CODES = [
  'ad','ae','af','ag','ai','al','am','ao','aq','ar','as','at','au','aw','ax',
  'az','ba','bb','bd','be','bf','bg','bh','bi','bj','bl','bm','bn','bo','br',
  'bs','bt','bw','by','bz','ca','cc','cd','cf','cg','ch','ci','ck','cl','cm',
  'cn','co','cr','cu','cv','cw','cx','cy','cz','de','dj','dk','dm','do','dz',
  'ec','ee','eg','eh','er','es','et','fi','fj','fk','fm','fo','fr','ga','gb',
  'gd','ge','gg','gh','gi','gl','gm','gn','gq','gr','gs','gt','gu','gw','gy',
  'hk','hn','hr','ht','hu','id','ie','il','im','in','iq','ir','is','it','je',
  'jm','jo','jp','ke','kg','kh','ki','km','kn','kp','kr','kw','ky','kz','la',
  'lb','lc','li','lk','lr','ls','lt','lu','lv','ly','ma','mc','md','me','mf',
  'mg','mh','mk','ml','mm','mn','mo','mp','mq','mr','ms','mt','mu','mv','mw',
  'mx','my','mz','na','nc','ne','nf','ng','ni','nl','no','np','nr','nu','nz',
  'om','pa','pe','pf','pg','ph','pk','pl','pn','pr','ps','pt','pw','py','qa',
  'ro','rs','ru','rw','sa','sb','sc','sd','se','sg','sh','si','sk','sl','sm',
  'sn','so','sr','ss','st','sv','sy','sz','tc','td','tf','tg','th','tj','tk',
  'tl','tm','tn','to','tr','tt','tv','tw','tz','ua','ug','us','uy','uz','va',
  'vc','ve','vg','vi','vn','vu','wf','ws','ye','yt','za','zm','zw',
];
const LOCALES = ['de', 'en', 'es', 'fr', 'it', 'nl', 'pl', 'pt'];

(async function main() {
  const errors: ValidationError[] = [];

  try {
    await Promise.all(LOCALES.map(async (locale) => {
      const fileName = `countries-${locale}.ts`;
      const fileRows: FileRow[] = (await import(`../src/i18n/${fileName}`)).default;
      const fileIsoCodes = fileRows.map((row) => row.isoCode);

      const emptyValues = fileRows.filter((row) => {
        return !row.name;
      }).map((row) => row.isoCode);

      const extraCodes = fileIsoCodes.filter((isoCode) => {
        return EXPECTED_ISO_CODES.indexOf(isoCode) < 0;
      });

      const missingCodes = EXPECTED_ISO_CODES.filter((isoCode) => {
        return fileIsoCodes.indexOf(isoCode) < 0;
      });

      if (emptyValues.length || extraCodes.length || missingCodes.length) {
        errors.push({ emptyValues, extraCodes, fileName, missingCodes });
      }
    }));
  } catch (error) {
    console.error('Something went wrong during the i18n keys validation', error);
  }

  if (errors.length) {
    console.log('Following errors have been found during i18n keys validation:')

    errors.forEach((error) => {
      console.log(`--- File ${error.fileName} ---`);

      (error.emptyValues || []).forEach((emptyValue) => {
        console.log(`Empty isoCode value to fill: ${emptyValue}`);
      });

      (error.extraCodes || []).forEach((extraCode) => {
        console.log(`Extra isoCode to remove: ${extraCode}`);
      });

      (error.missingCodes || []).forEach((missingCode) => {
        console.log(`Missing isoCode to add: ${missingCode}`);
      });
    });

    process.exitCode = 1;
  }
})();
