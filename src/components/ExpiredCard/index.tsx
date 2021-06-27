import React, { FunctionComponent } from "react";
import CSS from "csstype";

export interface ExpiredCardProperties {
  expiredmessage: string;
}

export const ExpiredCard: FunctionComponent<ExpiredCardProperties> = (props) => {

  const cardStyle: CSS.Properties = {
    padding: "15px 0px",
  };

  const expiredMessage = props.expiredmessage;

  return (
    <div style={cardStyle}>
      <h3>{expiredMessage}</h3>
    </div>
  );
};