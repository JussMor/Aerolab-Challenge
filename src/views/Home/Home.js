import React from "react";
import { FlexGrid } from "./HomeStyle";
import Button from "../../components/common/Buttons/ctaButton/Button";
import ViewButton from "../../components/common/Buttons/ctaLandingButton/ViewButton";
import SortButton from "../../components/common/Buttons/sortButton/SortButton";
import NumButton from "../../components/common/Buttons/numButton/NumButton";
import AeroButton from "../../components/common/Buttons/aeroPlayButton/AeroButton";

export default function Home() {
  return (
    <>
      <FlexGrid>
        <FlexGrid>
          <Button
            value={"50.00"}
            icons={true}
            mainColorIcon={"white"}
            secondColorIcon={"url(#linear_color_main)"}
          />
          <Button title={"Processing..."} classes={"processing"} />
          <Button
            value={"00.00"}
            icons={true}
            disabled={"disabled"}
            mainColorIcon={"#8FA3BF"}
            secondColorIcon={"white"}
          />
        </FlexGrid>
        <FlexGrid>
          <ViewButton/>
          <SortButton value={true} />
          <SortButton/>
          <NumButton/>
          <NumButton value={true} />
        </FlexGrid>
        <FlexGrid>
          <AeroButton open={true}/>
          <AeroButton open={false} value={"1000"}/>
        </FlexGrid>
      </FlexGrid>
    </>
  );
}
