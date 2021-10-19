export const onChange = (stateKey, newValue, context) => {
	return context.setState({ [stateKey]: newValue });
};
