# NodeJS

If you have error like this:
```bash
../../../node_modules/@jest/types/build/Config.d.ts:300:38 - error TS2694: Namespace 'NodeJS' has no exported member 'Global'.
300     extraGlobals: Array<keyof NodeJS.Global>;
```
It is a well known issue with jest in combination with a node types version >= 16:
[https://github.com/facebook/jest/issues/11640#issuecomment-874184215](https://github.com/facebook/jest/issues/11640#issuecomment-874184215)
