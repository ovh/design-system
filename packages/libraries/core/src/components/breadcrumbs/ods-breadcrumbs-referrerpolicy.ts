export enum OdsBreadcrumbsReferrerpolicy {
  'no-referrer' = 'no-referrer',
  'no-referrer-when-downgrade' = 'no-referrer-when-downgrade',
  origin = 'origin',
  'origin-when-cross-origin' = 'origin-when-cross-origin',
  'same-origin' = 'same-origin',
  'strict-origin-when-cross-origin' = 'strict-origin-when-cross-origin',
  'unsafe-url' = 'unsafe-url',
}

export type OdsBreadcrumbsReferrerpolicyUnion = `${OdsBreadcrumbsReferrerpolicy}`;

export const OdsBreadcrumbsReferrerpolicyList = Object.keys(OdsBreadcrumbsReferrerpolicy).map(key => OdsBreadcrumbsReferrerpolicy[key as OdsBreadcrumbsReferrerpolicyUnion]);
