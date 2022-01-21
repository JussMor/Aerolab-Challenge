import React from "react";
import { ButtonMain } from "./ButtonStyled";
import { AerolabIcon } from "../../../../resources/IndexResources";

export default function Button(props) {
  const { title, value, classes, disabled } = props;
  const icons = props.icons || null;

  return (
    <>
      <ButtonMain className={`${classes}`} disabled={disabled}>
        {title}
        {icons && <AerolabIcon/>}
        {value}
      </ButtonMain>
    </>
  );
}

Button.defaultProps = {
  title: "Redeem for",
  value: ""
};

