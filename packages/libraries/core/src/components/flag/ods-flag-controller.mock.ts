// import { OdsComponentController } from '../ods-component-controller';
// import { OdsFlag } from './ods-flag';
// import { OdsFlagController, tyty } from './ods-flag-controller';
// import { OdsLogger } from '../../logger/ods-logger';
// import { OdsLoadContent } from '../../content/ods-load-content';
// import { OdsSvgValidator } from '../../content/ods-svg-validator';
// import { OdsFlagMock } from './ods-flag.mock';
//
// export class OdsFlagControllerMock extends OdsComponentController<OdsFlag> implements tyty {
//   static svgContent = '';
//
//   static changeResponse(svgContent: string) {
//     this.svgContent = svgContent;
//   }
//
//   load(_isVisible:boolean, _isBrowser:boolean): Promise<string | void> {
//     return new Promise(resolve => resolve(OdsFlagControllerMock.svgContent));
//   }
// }
//
// export const OdsFlagControllerMocked2: jest.MockedClass<typeof OdsFlagController> = {
//
//   component: new OdsFlagMock(),
//   logger:  new OdsLogger('OdsFlagController mocked'),
//   svgLoadContent: new OdsLoadContent([
//     (content) => OdsSvgValidator.validateContent(content)
//   ]),
//   load: jest.fn().mockImplementation(() => new Promise(resolve => resolve(''))),
//   onInit: jest.fn(),
//   onDestroy: jest.fn(),
//   validateISO: jest.fn(),
//   getUrl: jest.fn(),
//   getUrlForIso: jest.fn()
// }

export function mockOdsFlagController() {


}
