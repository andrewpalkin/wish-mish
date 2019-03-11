const normalizeTextInput = (value, previousValue) => {
    if (!value) {
        return value;
    }
    return value.match(/^(?![ ,.])(?!.*[.]{2})(?!.*[ ]{2})(?!.*[,]{2})[a-zA-Z0-9 ,.]+$/g)
        ? value
        : previousValue;
};

export default normalizeTextInput;