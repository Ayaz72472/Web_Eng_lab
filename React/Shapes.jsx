import React from "react";
import Shape from "./Shape";
import { ShapeTypes } from "./constants";

export default function Shapes() {
  return (
    <div>
      Shapes
      <div id="container">
        <Shape color="purple" type={ShapeTypes.circle} />
        <Shape />
        <Shape color="green" height={100} width={500} type={ShapeTypes.rect} />
        <Shape />
      </div>
    </div>
  );
}
