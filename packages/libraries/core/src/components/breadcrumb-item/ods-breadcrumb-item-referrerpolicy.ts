export enum OdsBreadcrumbItemReferrerpolicy {
  'no-referrer' = 'no-referrer',
  'no-referrer-when-downgrade' = 'no-referrer-when-downgrade',
  origin = 'origin',
  'origin-when-cross-origin' = 'origin-when-cross-origin',
  'same-origin' = 'same-origin',
  'strict-origin-when-cross-origin' = 'strict-origin-when-cross-origin',
  'unsafe-url' = 'unsafe-url',
}

export type OdsBreadcrumbItemReferrerpolicyUnion = `${OdsBreadcrumbItemReferrerpolicy}`;

export const OdsBreadcrumbItemReferrerpolicyList = Object.keys(OdsBreadcrumbItemReferrerpolicy).map(
  key => OdsBreadcrumbItemReferrerpolicy[key as OdsBreadcrumbItemReferrerpolicyUnion],
);
