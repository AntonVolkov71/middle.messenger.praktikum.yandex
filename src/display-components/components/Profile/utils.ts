import Component from '@services/Component';

export interface FieldsFormData {
	[key: string]: Component;
}

export const changeDisabledFormFields = (fieldsFormData: FieldsFormData, disabled: boolean) => {
	Object.values(fieldsFormData)
		.forEach((item) => {
			if (item instanceof Component) {
				item.setProps({
					disabled,
				});
			}
		});
};
