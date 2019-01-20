import React from "react";

export const required = value => (value ? undefined : "Required");
export const number = value =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;
export const email = value =>
  value && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(value)
    ? "You have entered an invalid email address!"
    : undefined;
export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;
export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? "Invalid phone number, must be 10 digits"
    : undefined;
