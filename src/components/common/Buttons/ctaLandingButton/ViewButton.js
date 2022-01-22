import React from "react";
import { ViewButtonMain, Iconify } from "./ViewButtonStyle";
import { ArrowDownIcon } from "../../../../resources/IndexResources";

export default function ViewButton() {
  return (
    <>
      <ViewButtonMain>
        VIEW PRODUTS
        <Iconify>
          <ArrowDownIcon />
        </Iconify>
      </ViewButtonMain>
    </>
  );
}
