import React from "react";
import Slider from "../sliderComponents/Slider";

export default function Home() {
  return (
    <div>
      <Slider title={"New this year"} />
      <Slider
        title={"Plan a trip with help from local Hosts around the world"}
      />
      <Slider title={"React Test app"} />
    </div>
  );
}
