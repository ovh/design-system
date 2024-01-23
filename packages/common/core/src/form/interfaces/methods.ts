import type { OdsCommonFieldValidityState } from "./attributes";

interface OdsCommonFieldMethod {
    /**
     * empty the value
     */
    clear(): Promise<void>;

    formResetCallback(): void;

    /**
     * active the focus on the input in order to let the user write something
     */
    setFocus(elementToFocus: HTMLElement): Promise<void>;

    /**
     * restore the value to the initial state
     */
    reset(): Promise<void>;

    /**
     * set a custom tab index for easier navigation
     * @param value - chosen index
     */
    setTabindex(value: number): Promise<void>;

    getValidity<T extends { validity: ValidityState }>(element: T): Promise<OdsCommonFieldValidityState | undefined>;
} 

export {
    OdsCommonFieldMethod,
}