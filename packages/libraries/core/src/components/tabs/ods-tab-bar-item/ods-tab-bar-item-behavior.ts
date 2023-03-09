export interface OdsTabBarItemBehavior {
    /**
     * reference to the host element.
     */
    // el: HTMLElement
    panelNameIndex: string;
    /**
     * before render component function
     * should be called before component render
     * it have to check the validity of attributes.
     * @see OdsTabBarBehaviorController.validateAttributes
     */
    beforeRender(): void;

    tabitemizedComponent: (HTMLElement & OdsTabBarItemizable) | null;
  }
  
export interface OdsTabBarItemizable {
  checked: boolean;
}
  