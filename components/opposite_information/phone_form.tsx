import { kMaxLength } from "buffer";
import React, { useState, useRef, useEffect, useImperativeHandle } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import metadata from "libphonenumber-js/metadata.min.json";

function PhoneNumber() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");

  const [maxLength, setMaxLength] = useState(null);

  const [country, setCountry] = useState("");

  useEffect(() => {
    if (country) {
      const countryMetadata = metadata.countries[country];
      const maxLength = countryMetadata
        ? countryMetadata[1] + countryMetadata[2].length
        : null;
      setMaxLength(maxLength);
    } else {
      setMaxLength(null);
    }
  }, [country]);

  const handlePhoneNumberChange = (value) => {
    if (!value) {
      setPhoneNumber(value);
      return;
    }

    if (maxLength && value.replace(/\D+/g, "").length <= maxLength) {
      setPhoneNumber(value);
    } else if (!maxLength) {
      setPhoneNumber(value);
    }
  };

  return (
    /* TODO: gøre så man ikke kan skrive længere end hvad ens nr er */
    <div>
      <PhoneInput
        limitMaxLength
        placeholder="Indtast tlf. nr."
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        onCountryChange={setCountry}
        country={country}
      />
      <p>Dit nr. {formatPhoneNumberIntl(phoneNumber)}</p>
    </div>
  );
}

export default PhoneNumber;
