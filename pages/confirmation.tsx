import React, {useEffect, useState} from "react";
import { driverInformation } from "../components/driver_info_form";

function confirmationPage () {
    const [driverInfo, setDriverInfo] = useState<driverInformation | null>(null);

    useEffect(() => {
      const driverInfoString = localStorage.getItem('LocalDriverInformation');
      if (driverInfoString) {
        setDriverInfo(JSON.parse(driverInfoString));
      }
    }, []);


    return (
        <div>
            <div id="driverInformation">
                <p>{driverInfo ? driverInfo.firstName : "First name"}</p>
                <p>{driverInfo ? driverInfo.lastName : "First name"}</p>
            </div>
        </div>
    )
};

export default confirmationPage;