export const updateObjectInArray = (items, itemId, propName, newObjProp) => {
	return items.map(u => {
		if (u[propName] === itemId) {
			return {...u, ...newObjProp}
		}
			return u;
		});
}
