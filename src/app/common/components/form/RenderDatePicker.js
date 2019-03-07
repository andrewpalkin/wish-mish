import React from "react";
import {DateInput} from "semantic-ui-calendar-react";

const renderDatePicker = field => (
    <DateInput
        clearable={!!field.input.value}
        iconPosition="left"
        dateFormat="MMM DD, YYYY"
        value={field.input.value || "Please select date"}
        onChange={(e, {value}) => field.input.onChange(value)}

    />
);

export default renderDatePicker;
