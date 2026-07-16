import { LOCALES } from '../../ods';

const OdsLocaleList = () => {
  return (
    <ul>
      {
        LOCALES.map((locale) => (
          <li key={ locale }>
            { locale }
          </li>
        ))
      }
    </ul>
  );
};

export {
  OdsLocaleList,
};
