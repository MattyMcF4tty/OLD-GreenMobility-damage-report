import { kMaxLength } from "buffer";
import React from "react";

const InputField = ({id, type, labelText, required, value, onChange, maxLength }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={id}>{labelText}</label>
            <input
            className="bg-MainGreen-100"
            id={id}
            type={type}
            required={required}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            />
        </div>
    );
}

export default InputField;
