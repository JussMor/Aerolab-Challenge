import React from "react";
import { FlexGrid } from "./HomeStyle";
import Button from "../../components/common/Buttons/ctaButton/Button";
import ViewButton from "../../components/common/Buttons/ctaLandingButton/ViewButton";

export default function Home() {
  return (
    <>
      <FlexGrid>
        <FlexGrid>
          <Button value={"50.00"} icons={true} />
          <Button title={"Processing..."} classes={"processing"} />
          <Button value={"00.00"} icons={true} disabled={"disabled"} />
        </FlexGrid>
        <FlexGrid>
          <ViewButton />
        </FlexGrid>
      </FlexGrid>
    </>
  );
}
