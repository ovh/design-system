
export function OdsCreateAttributes<T>(attributes: Partial<T>, defaultAttributes: T): T {
    return {
      ...defaultAttributes,
      ...attributes
    };
  }