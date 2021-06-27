import React, { FunctionComponent } from "react";
import CSS from "csstype";

export interface TitleProperties {
  title: string;
  titlecolor: string;
}

export const Title: FunctionComponent<TitleProperties> = (props) => {
  
  const titleStyle: CSS.Properties = {
    color: props.titlecolor,
    display: "block",
    textAlign: "center",
    margin: "5px 0px",
  };

  return <h2 style={titleStyle}>{props.title}</h2>;
};
