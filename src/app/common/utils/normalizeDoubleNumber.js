const normalizeDoubleNumber = (value, previousValue) => {
    if (!value) {
        return value;
    }
    return value.match(/^(?!(0))\d{1,4}\.(\d{1,2})?$/g) ||
    value.match(/^(?!(0))^\d{1,4}\.?$/g)
        ? value
        : previousValue;
};

export default normalizeDoubleNumber;