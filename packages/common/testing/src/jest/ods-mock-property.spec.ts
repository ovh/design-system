import {odsMockProperty, odsUnmockProperty} from './ods-mock-property';

describe('spec:ods-mock-property', () => {
  class MyClassA {
    private myProp: string;
    private myProp2 = 'A';

    constructor(myProp: string) {
      this.myProp = myProp;
    }

    getProp() {
      return this.myProp;
    }

    getProp2() {
      return this.myProp2;
    }

    setProp(myProp: string) {
      this.myProp = myProp;
    }
  }

  /**
   * representation of class A for testing.
   * the goal is to represent some prop as public for instance
   */
  interface MyClassAForTesting {
    myProp: string;
    myProp2:string;
  }

  class MyClassB {
    private myProp = new MyClassA('one');

    getSubClass() {
      return this.myProp;
    }

    triggerCallOnSubCLass() {
      this.myProp.getProp();
    }
  }

  /**
   * representation of class B for testing.
   * the goal is to represent some prop as public for instance
   */
  interface MyClassBForTesting {
    myProp: MyClassA;
  }

  afterEach(() => {
    odsUnmockProperty(MyClassA.prototype as unknown as MyClassAForTesting, 'myProp');
    odsUnmockProperty(MyClassA.prototype as unknown as MyClassAForTesting, 'myProp2');
    odsUnmockProperty(MyClassB.prototype as unknown as MyClassBForTesting, 'myProp');
  });

  describe('property', () => {
    it('should override with undefined if not mocked with value', () => {
      odsMockProperty(MyClassA.prototype as unknown as MyClassAForTesting, 'myProp2');
      const instance = new MyClassA('one');
      expect(instance.getProp2()).toEqual(undefined);
    });

    it('should override with value', () => {
      odsMockProperty(MyClassA.prototype as unknown as MyClassAForTesting, 'myProp', 'BB');
      const instance = new MyClassA('one');
      expect(instance.getProp()).toEqual('BB');
    });
  });


  describe('method of a property instance', () => {
    it('should override with custom subClass', () => {
      // not already mocked
      const instance1 = new MyClassB();
      expect(instance1.getSubClass().getProp()).toEqual('one');

      // replace by a mocked subClass
      const mySubClassMocked = new MyClassA('two');
      const spyMyMockedSubClassMethod = jest.spyOn(mySubClassMocked, 'getProp');
      odsMockProperty(MyClassB.prototype as unknown as MyClassBForTesting, 'myProp', mySubClassMocked);
      const instance = new MyClassB();
      expect(instance.getSubClass()).toEqual(mySubClassMocked);
      expect(instance.getSubClass().getProp()).toEqual('two');
      instance.triggerCallOnSubCLass();
      expect(spyMyMockedSubClassMethod).toHaveBeenCalled();
    });
  });
});
