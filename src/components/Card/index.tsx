import React, { FunctionComponent } from "react";
import CSS from "csstype";

export interface CardProperties {
  boxescolorbg: string;
  boxescolorborder: string;
  boxescolortext: string;
}

export const Card: FunctionComponent<CardProperties> = (props) => {
  const cardStyle: CSS.Properties = {
    display: "block",
    textAlign: "center",
    borderRadius: "5px",
    border: "2px solid",
    borderColor: props.boxescolorborder,
    background: props.boxescolorbg,
    color: props.boxescolortext,
  };

  return <div style={cardStyle}>{props.children}</div>;
};
