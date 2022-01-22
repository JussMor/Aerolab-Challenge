import React from "react";
import {
  AeroButtonMain,
  Wrapper,
  TextButton,
  Iconify,
} from "./AeroButtonStyle";
import { AerolabIcon, CaretIcon } from "../../../../resources/IndexResources";

export default function AeroButton(props) {
  const { open } = props;
  return (
    <>
      {open ? (
        <AeroButtonMain>
          <Wrapper>
            <Iconify>
              <AerolabIcon
                aeroIconColorMain={"url(#linear_color_main)"}
                aeroIconColorSecondary={"white"}
              />
            </Iconify>
            <TextButton>{props.value}</TextButton>
            <Iconify rotate={90}>
              <CaretIcon />
            </Iconify>
          </Wrapper>
        </AeroButtonMain>
      ) : (
        <AeroButtonMain>
          <Wrapper>
            <Iconify>
              <AerolabIcon
                aeroIconColorMain={"url(#linear_color_main)"}
                aeroIconColorSecondary={"white"}
              />
            </Iconify>
            <TextButton>{props.value}</TextButton>
            <Iconify rotate={-90}>
              <CaretIcon />
            </Iconify>
          </Wrapper>
        </AeroButtonMain>
      )}
    </>
  );
}

AeroButton.defaultProps = {
    open: false,
    value: "0000"
}