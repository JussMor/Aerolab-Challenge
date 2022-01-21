import React from "react";
import { NumButtonMain, TextButton } from "./NumButtonStyle";

export default function NumButton(props) {

    const { value, text } = props;
  return (
    <>
      {value ? (
        <NumButtonMain>
          <TextButton>{text ? props.text : "0000"}</TextButton>
        </NumButtonMain>
      ) : (
        <NumButtonMain className={`no_selected`}>
          <TextButton className={`no_selected`}>
            {text ? props.text : "0000"}
          </TextButton>
        </NumButtonMain>
      )}
    </>
  );
}

NumButton.defaultProps = {
  value: false,
};
