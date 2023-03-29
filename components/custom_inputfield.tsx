import React, { useEffect, useState } from "react";

interface InputfieldProps {
    id:string;
    labelText:string;
    required:boolean;
    type: "number" | "text";
    onChange: (isValue:string) => void;
};

export default function Inputfield(props: InputfieldProps) {
    const { id, labelText, required, type, onChange } = props;
    const [isValue, setIsValue] = useState<string>();

    useEffect(() => {
        onChange(isValue);
    }, [isValue]);

    return (
        <div className="flex flex-col">
            <label htmlFor={id}>{labelText}</label>
            <input 
            id={id}
            type={type} 
            required={required}
            value={isValue}
            onChange={(event) => setIsValue(event.target.value)}
            />
        </div>
    );
};