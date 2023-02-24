export var OdsThemeSize;
(function (OdsThemeSize) {
  OdsThemeSize["_100"] = "100";
  OdsThemeSize["_200"] = "200";
  OdsThemeSize["_300"] = "300";
  OdsThemeSize["_400"] = "400";
  OdsThemeSize["_500"] = "500";
  OdsThemeSize["_600"] = "600";
  OdsThemeSize["_700"] = "700";
  OdsThemeSize["_800"] = "800";
  OdsThemeSize["_900"] = "900";
})(OdsThemeSize || (OdsThemeSize = {}));
export const OdsThemeSizeList = Object.keys(OdsThemeSize)
  .map((key) => OdsThemeSize[key]);
/*

enum MyProps {
  prop1 = 'prop1',
  prop2 = 'prop2'
}

export type MyPropsUnion = `${MyProps}`;

interface MyProps3 {
  prop1: string,
  prop2: string
}

const myProps2 =  {
  prop1:'prop1',
  prop2: 'prop2'
}


type dd = keyof MyProps3;

const dzqf:dd = MyProps.prop2;

interface MyProps2 {
  prop1: string;
}

interface MyComp extends Record<MyPropsUnion, any> {

}



type ThreeStringProps = Record<MyPropsUnion, string>
const zqf:ThreeStringProps = {
  prop1: "j",
  prop2: "j"
}
*/
