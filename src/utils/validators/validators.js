export const required = value => {
	return value ? undefined : 'Поля обязательно для заполнения'
};


export const maxLength = max => value => {
 return  value && value.length > max ? `Должно быть не более ${max} символов` : undefined
};
