import React from "react";
import { FlexGrid } from "./HomeStyle";
import Button from "../../components/common/Buttons/ctaButton/Button";
import ViewButton from "../../components/common/Buttons/ctaLandingButton/ViewButton";
import SortButton from "../../components/common/Buttons/sortButton/SortButton";
import NumButton from "../../components/common/Buttons/numButton/NumButton";
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
          <SortButton  value={true}/>
          <SortButton />
          <NumButton/>
          <NumButton value={true}/>
        </FlexGrid>
      </FlexGrid>
    </>
  );
}
