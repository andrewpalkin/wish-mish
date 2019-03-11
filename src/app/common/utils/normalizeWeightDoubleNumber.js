const normalizeWeightDoubleNumber = (value, previousValue) => {
    if (!value) {
        return value;
    }
    return value.match(/^(?!(0))\d{1,2}\.(\d{1,3})?$/g) ||
    value.match(/^(?!(0))^\d{1,2}\.?$/g) ||
    value.match(/^0\.(\d{1,3})?$/g) || value.match(/^0$/g)
        ? value
        : previousValue;
};

export default normalizeWeightDoubleNumber;