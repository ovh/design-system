enum ODS_LINK_REFERRER_POLICY {
  noReferrer = 'no-referrer',
  noReferrerWhenDowngrade = 'no-referrer-when-downgrade',
  origin = 'origin',
  originWhenCrossOrigin = 'origin-when-cross-origin',
  sameOrigin = 'same-origin',
  strictOriginWhenCrossOrigin = 'strict-origin-when-cross-origin',
  unsafeUrl = 'unsafe-url',
}

const ODS_LINK_REFERRER_POLICIES = Object.freeze(Object.values(ODS_LINK_REFERRER_POLICY));

export {
  ODS_LINK_REFERRER_POLICIES,
  ODS_LINK_REFERRER_POLICY,
};
