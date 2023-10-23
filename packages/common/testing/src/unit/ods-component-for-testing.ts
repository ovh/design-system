import type {GenericLogger} from './generic-logger';

/**
 * define a class representing a class component.
 * It is used to override typing and make test easier.
 * example of use: make here the private property as public in order to test it
 */
export class OdsComponentForTesting {
  // make a logger property as public (it will be mocked)
  logger?: GenericLogger;
}
