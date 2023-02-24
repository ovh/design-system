export enum OdsThemeSize {
  _100 = '100',
  _200 = '200',
  _300 = '300',
  _400 = '400',
  _500 = '500',
  _600 = '600',
  _700 = '700',
  _800 = '800',
  _900 = '900'
}

export type OdsThemeSizeUnion = `${OdsThemeSize}`;

export const OdsThemeSizeList = Object.keys(OdsThemeSize)
  .map((key) => OdsThemeSize[ key as keyof typeof OdsThemeSize ]);

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
