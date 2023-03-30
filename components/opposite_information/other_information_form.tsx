import { kMaxLength } from "buffer";
import React, { useState, useRef, useEffect } from "react";
import Text from "../textarea";

class oppositeOtherInformation {}

function Other() {
  return (
    <div>
      <label htmlFor="descripeOther">Descripe other</label>
      <Text />
      <label htmlFor="InformationOther">Information on other</label>
      <Text />
    </div>
  );
}

export default Other;
