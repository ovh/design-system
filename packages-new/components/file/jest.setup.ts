// @ts-ignore
class File extends Uint8Array {
    name: string
    acceptedTypes: string;
    type: string;

    constructor(a: any, name: string, options :{ type: string }) {
      super(a);
      this.name = name
      this.acceptedTypes = '';
      this.type = options.type;
    }
  }
  
  globalThis.File = File
  