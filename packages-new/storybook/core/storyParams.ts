export const omitStoryParams = (params:any, omitParams:any[] = []):Object => {
  return Object.entries(params).reduce(
    (prev, [key, value]) => (
      {...prev, ...(!omitParams.includes(key) && { [key]: value }) }
    ), {}
  );
};
