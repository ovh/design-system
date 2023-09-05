interface OdsTabBarItemAttribute {
    /**
     * is this tab item is selected or not
     */
    active: boolean;
    /**
     * is in contrasted mode or not
     */
    contrasted: boolean;
    /**
     * The tab is disabled or not
     */
    disabled: boolean;
    /**
     * The panel of the corresponding Tab
     */
    panel: string;
}

export {
    OdsTabBarItemAttribute,
};
