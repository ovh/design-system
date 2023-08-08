export enum OlesIpsumGeneration {
  paragraphs = 'paragraphs',
  sentences = 'sentences',
  words = 'words',
}

export type OlesIpsumGenerationUnion = `${OlesIpsumGeneration}`;

export const OlesIpsumGenerationList = Object.keys(OlesIpsumGeneration)
  .map((key) => OlesIpsumGeneration[ key as OlesIpsumGenerationUnion ]);
