import {omitStoryParams} from './storyParams';

export const omitArgTypes = (params:any, omitParams:any[] = []):Object => omitStoryParams(params, omitParams);
