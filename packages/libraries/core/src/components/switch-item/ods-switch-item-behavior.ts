export interface OdsSwitchItemBehavior {
    /**
     * reference to the host element.
     */
    el: HTMLElement;
    /**
     * set the focus on the switch item
     */
    setFocus: () => void;
}