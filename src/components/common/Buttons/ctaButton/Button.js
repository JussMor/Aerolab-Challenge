import React from "react";
import { ButtonMain, Iconify } from "./ButtonStyled";
import { AerolabIcon } from "../../../../resources/IndexResources";

export default function Button(props) {
  const { title, value, classes, disabled, mainColorIcon, secondColorIcon } =
    props;
  const icons = props.icons || null;

  return (
    <>
      <ButtonMain className={`${classes}`} disabled={disabled}>
        {title}
        {icons && (
          <Iconify>
            <AerolabIcon
              aeroIconColorMain={`${mainColorIcon}`}
              aeroIconColorSecondary={`${secondColorIcon}`}
            />
          </Iconify>
        )}
        {value}
      </ButtonMain>
    </>
  );
}

Button.defaultProps = {
  title: "Redeem for",
  value: "",
  mainColorIcon: "url(#linear_color_main)",
  secondColorIcon: "white",
};
