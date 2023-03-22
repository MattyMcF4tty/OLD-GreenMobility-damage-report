import React from "react";
import { driverInfo } from "../components/driverCheckbox";

const confirmationPage = () => (
    <div>
        <div id="driverInformation">
            <p>{driverInfo.firstName}</p>
        </div>
    </div>

);

export default confirmationPage;