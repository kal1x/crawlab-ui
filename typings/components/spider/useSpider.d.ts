import { Store } from 'vuex';
declare const useSpider: (store: Store<RootStoreState>) => {
    id: import("@vue/reactivity").ComputedRef<string | string[]>;
    modeOptions: SelectOption[];
    fetchDataCollection: (query: string) => Promise<any[] | undefined>;
    fetchDataCollectionSuggestions: (query: string, cb: Function) => void;
    getNewForm: DefaultFormFunc<any>;
    getNewFormList: () => any[];
    form: import("@vue/reactivity").ComputedRef<BaseModel>;
    formRef: import("@vue/reactivity").Ref<any>;
    isSelectiveForm: import("@vue/reactivity").ComputedRef<boolean>;
    selectedFormFields: import("@vue/reactivity").ComputedRef<string[]>;
    formList: import("@vue/reactivity").ComputedRef<BaseModel[]>;
    validateForm: () => Promise<any>;
    resetForm: () => void;
    isFormItemDisabled: (prop: string) => boolean;
    activeDialogKey: import("@vue/reactivity").ComputedRef<DialogKey | undefined>;
    createEditDialogVisible: import("@vue/reactivity").ComputedRef<boolean>;
    allListSelectOptions: import("@vue/reactivity").ComputedRef<SelectOption[]>;
    allListSelectOptionsWithEmpty: import("@vue/reactivity").ComputedRef<SelectOption[]>;
    allDict: import("@vue/reactivity").ComputedRef<Map<string, BaseModel>>;
    confirmDisabled: import("@vue/reactivity").ComputedRef<boolean>;
    confirmLoading: import("@vue/reactivity").ComputedRef<boolean>;
    setConfirmLoading: (value: boolean) => void;
    actionFunctions: CreateEditDialogActionFunctions;
    onAdd: (index: number) => void;
    onClone: (index: number) => void;
    onDelete: (index: number) => void;
    onFieldChange: (rowIndex: number, prop: string, value: any) => void;
    onFieldRegister: (rowIndex: number, prop: string, formRef: import("@vue/reactivity").Ref) => void;
};
export default useSpider;
