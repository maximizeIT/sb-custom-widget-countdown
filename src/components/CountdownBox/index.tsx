import React, { FunctionComponent } from "react";
import CSS from "csstype";

export interface CountdownBoxProperties {
  value: number,
  text: string,
}

export const CountdownBox: FunctionComponent<CountdownBoxProperties> = (props) => {

  const boxStyle: CSS.Properties = {
    fontSize: "30px",
    margin: "0px 5px 0px 0px",
    marginRight: "5px",
    display: "inline-block",
    width: "22.5%",
    padding: "10px 0"
  };

  const smalltextStyle: CSS.Properties = {
    paddingTop: "5px",
    fontSize: "14px",
    display: "inline-block"
  };

  return (
    <div style={boxStyle}>
      <div>{props.value}</div>
      <span style={smalltextStyle}>{props.text}</span>
    </div>
  );
};
