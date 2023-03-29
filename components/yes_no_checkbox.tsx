import React, { useEffect, useState } from "react";

interface YesNoProps {
    id:string;
    labelText:string;
    onChange: (isChecked: boolean) => void;
}

export default function YesNo(props: YesNoProps) {
    const { id, labelText, onChange} = props;

    /* 0 is when the checkbox is first initialized and therefor is not filled, 1 is Yes, 2 is No */
    const [checked, setChecked] = useState< 0 | 1 | 2 >(0);

    useEffect(() => {
        if (checked === 1) {
            onChange(true);
        } 
        else if (checked === 2) {
            onChange(false);
        }

    }, [checked, onChange]);

    return (
        <div>
            <label htmlFor={id}>{labelText}</label>

            {/* Yes */}
            <div id={id}>
                <label htmlFor={"Yes"+id}>Yes</label>
                <input
                id={"Yes"+id}
                type = "checkbox"
                checked = {checked === 1}
                onChange = {() => setChecked(1)}
                />

                {/* No  */}
                <label htmlFor={"No"+id}>No</label>
                <input
                id={"No"+id}
                type = "checkbox"
                checked = {checked === 2}
                onChange = {() => setChecked(2)}
                />
            </div>
        </div>
    )
};