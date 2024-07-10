declare const _default: import("vue").DefineComponent<{}, {
    filter: import("vue").ComputedRef<FilterConditionData[]>;
    displayAllFields: import("vue").ComputedRef<boolean>;
    allSpiderDict: import("vue").ComputedRef<Map<string, BaseModel>>;
    id: import("vue").ComputedRef<string | string[]>;
    modeOptions: SelectOption[];
    modeOptionsDict: import("vue").ComputedRef<Map<string, SelectOption>>;
    priorityOptions: SelectOption[];
    getPriorityLabel: (priority: number) => string;
    getNewForm: DefaultFormFunc<any>;
    getNewFormList: () => any[];
    form: import("vue").ComputedRef<BaseModel>;
    formRef: import("vue").Ref<any>;
    isSelectiveForm: import("vue").ComputedRef<boolean>;
    selectedFormFields: import("vue").ComputedRef<string[]>;
    formList: import("vue").ComputedRef<BaseModel[]>;
    validateForm: () => Promise<any>;
    resetForm: () => void;
    isFormItemDisabled: (prop: string) => boolean;
    activeDialogKey: import("vue").ComputedRef<DialogKey | undefined>;
    createEditDialogVisible: import("vue").ComputedRef<boolean>;
    allListSelectOptions: import("vue").ComputedRef<SelectOption[]>;
    allListSelectOptionsWithEmpty: import("vue").ComputedRef<SelectOption[]>;
    allDict: import("vue").ComputedRef<Map<string, BaseModel>>;
    confirmDisabled: import("vue").ComputedRef<boolean>;
    confirmLoading: import("vue").ComputedRef<boolean>;
    setConfirmLoading: (value: boolean) => void;
    actionFunctions: CreateEditDialogActionFunctions;
    onAdd: (index: number) => void;
    onClone: (index: number) => void;
    onDelete: (index: number) => void;
    onFieldChange: (rowIndex: number, prop: string, value: any) => void;
    onFieldRegister: (rowIndex: number, prop: string, formRef: import("vue").Ref) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
export default _default;
