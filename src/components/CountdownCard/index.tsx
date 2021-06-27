import React, { FunctionComponent } from "react";

import { CountdownBox } from "../CountdownBox";

/**
 * React Component
 */
export interface CountdownCardProperties {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownCard: FunctionComponent<CountdownCardProperties> = (props) => {

  return (
    <div>
      <CountdownBox value={props.days} text="Days" />
      <CountdownBox value={props.hours} text="Hours" />
      <CountdownBox value={props.minutes} text="Minutes" />
      <CountdownBox value={props.seconds} text="Seconds" />
    </div>
  );
};
