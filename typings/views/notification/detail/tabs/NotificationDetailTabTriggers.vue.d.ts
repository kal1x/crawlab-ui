declare const _default: import("vue").DefineComponent<{}, {
    t: (path: string, number?: any, args?: Record<string, any>) => string;
    form: import("vue").ComputedRef<BaseModel>;
    triggersList: import("vue").ComputedRef<any[]>;
    navItems: import("vue").ComputedRef<NavItem<BaseModel>[]>;
    activeId: import("vue").ComputedRef<string>;
    navSidebar: import("vue").Ref<{
        scroll: (id: string) => void;
    } | null>;
    navActions: import("vue").Ref<{
        getHeight: () => string;
    } | null>;
    showActionsToggleTooltip: import("vue").Ref<boolean>;
    tabs: import("vue").ComputedRef<{
        title: string;
        disabled: boolean;
        id: string;
        subtitle?: string;
        data?: any;
        icon?: string[] | string;
        tooltip?: string;
        emphasis?: boolean;
        style?: any;
        badge?: string | number;
        badgeType?: BasicType;
        label?: string;
        value?: any;
        children?: NavItem<any>[] | undefined;
    }[]>;
    activeTabName: import("vue").ComputedRef<string>;
    sidebarCollapsed: import("vue").ComputedRef<boolean>;
    actionsCollapsed: import("vue").ComputedRef<boolean>;
    contentContainerStyle: import("vue").ComputedRef<{
        height: string;
    }>;
    getForm: () => ReturnType<() => Promise<any>> extends Promise<any> ? Promise<ReturnType<() => Promise<any>>> : ReturnType<() => Promise<any>>;
    onNavSidebarSelect: (item: NavItem) => Promise<void>;
    onNavSidebarToggle: (value: boolean) => void;
    onActionsToggle: () => void;
    onNavTabsSelect: (tabName: string) => Promise<void>;
    onNavTabsToggle: () => void;
    onBack: () => Promise<void>;
    onSave: () => Promise<void>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
export default _default;
