import React from "react";
import { ButtonMain } from "./ButtonStyled";

export default function Button(props) {
  const { title, value, classes, disabled } = props;
  const icons = props.icons || null;

  return (
    <>
      <ButtonMain className={`${classes}`} disabled={disabled}>
        {title}
        {icons && <i>&nbsp;{"i"}&nbsp;</i>}
        {value}
      </ButtonMain>
    </>
  );
}

Button.defaultProps = {
  title: "Redeem for",
  value: ""
};

