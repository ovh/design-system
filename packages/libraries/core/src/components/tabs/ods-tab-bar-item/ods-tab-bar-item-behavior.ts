export interface OdsTabBarItemBehavior {
    /**
     * reference to the panel name index
     */
    panelNameIndex: string;
    /**
     * before render component function
     * should be called before component render
     * it have to check the validity of attributes.
     * @see OdsTabBarBehaviorController.validateAttributes
     */
    beforeRender(): void;
}
