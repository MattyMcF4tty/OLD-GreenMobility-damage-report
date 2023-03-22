import React from "react";
import { driverInfo } from "../components/driverCheckbox";

function confirmationPage () {
    return (
        <div>
            <div id="driverInformation">
                <p>{driverInfo.firstName}</p>
            </div>
        </div>
    )
};

export default confirmationPage;