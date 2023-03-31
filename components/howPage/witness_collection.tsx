import React, { useState } from "react";


/* TODO: Rewrite all of this shit */
interface WitnessProps {
    witness: WitnessData;
    onDelete: (id: number) => void;
    onUpdate: (updatedWitness: WitnessData) => void;
}

interface WitnessData {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
}

function Witness(props: WitnessProps) {
    const { witness, onDelete, onUpdate } = props;
    const [witnessFocus, setWitnessFocus] = useState<boolean>(false);

    function handleWitnessFocus() {
        setWitnessFocus(true);
    }

    function handleWitnessBlur() {
        setWitnessFocus(false);
    }

    function handleChange(field: keyof WitnessData, value: string) {
        onUpdate({ ...witness, [field]: value });
    }

    return (
        <div onFocus={handleWitnessFocus} onBlur={handleWitnessBlur} className="flex flex-col">
            <input
                type="text"
                placeholder="Name"
                defaultValue={witness.name}
                className="mb-2"
                onChange={(e) => handleChange("name", e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                defaultValue={witness.email}
                className="mb-2"
                onChange={(e) => handleChange("email", e.target.value)}
            />
            <input
                type="tel"
                placeholder="Phone Number"
                defaultValue={witness.phoneNumber}
                className="mb-2"
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
            />
            {witnessFocus && (
                <button
                    className="bg-red-700 text-white h-10 w-20"
                    onClick={() => onDelete(witness.id)}
                >
                    Delete
                </button>
            )}
        </div>
    );
}

export default function WitnessList() {
    const [witnesses, setWitnesses] = useState<WitnessData[]>([]);

    function addWitness() {
        const newWitness: WitnessData = {
            id: Date.now(),
            name: "",
            email: "",
            phoneNumber: "",
        };
        setWitnesses([...witnesses, newWitness]);
    }

    function deleteWitness(id: number) {
        setWitnesses(witnesses.filter((witness) => witness.id !== id));
    }

    function updateWitness(updatedWitness: WitnessData) {
        setWitnesses(
            witnesses.map((witness) =>
                witness.id === updatedWitness.id ? updatedWitness : witness
            )
        );
    }

    return (
        <div className="w-[100vw] h-[20vh]">
            {witnesses.map((witness) => (
                <Witness
                    key={witness.id}
                    witness={witness}
                    onDelete={deleteWitness}
                    onUpdate={updateWitness}
                />
            ))}
            <button
                className="bg-blue-500 text-white h-10 w-20 mt-4"
                onClick={addWitness}
            >
                Add Witness
            </button>
        </div>
    );
}
