/*!
 * Copyright 2020, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ReactElement } from "react";
import CSS from "csstype";
import { BlockAttributes } from "widget-sdk";

/**
 * React Component
 */
export interface CustomWidgetCountdownProps extends BlockAttributes {
  title: string;
  titlecolor: string;
  countdowndate: string;
  boxescolorbg: string;
  boxescolortext: string;
  boxescolorborder: string;
}

const calculatedifference=(start: number, enddate: string)=>{
  const end = new Date(enddate).getTime();
  
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  
  const distance = end - start;
  const days= Math.floor(distance / (day));
  const hours = Math.floor((distance % (day)) / (hour));
  const minutes = Math.floor((distance % (hour)) / (minute));
  const seconds = Math.floor((distance % (minute)) / second);
  
  return {days, hours, minutes, seconds}
}

export const CustomWidgetCountdown = ({ title, titlecolor, boxescolorbg, boxescolorborder, boxescolortext, countdowndate }: CustomWidgetCountdownProps): ReactElement => {

  const titleStyle: CSS.Properties = {
    color: titlecolor,
  };

  const containerStyle: CSS.Properties = {
    margin: "20px 0 25px 0",
    fontSize: "30px",
    display: "block",
    textAlign: "center"
  };

  const divContentStyle: CSS.Properties = {
    margin: "20px 0",
    marginRight: "5px",
    display: "inline-block",
    borderRadius: "5px",
    border: "2px solid",
    borderColor: boxescolorborder,
    background: boxescolorbg,
    color: boxescolortext,
    width: "22.5%",
    padding: "15px 0"
  };

  const smalltextStyle: CSS.Properties = {
    paddingTop: "5px",
    fontSize: "16px",
    display: "inline-block"
  };

  const [ actualdate, setactualdate ] = React.useState(Date.now());
  const { days, hours, minutes, seconds } = calculatedifference(actualdate,countdowndate)
  React.useEffect(()=>{ setInterval(()=>{setactualdate(Date.now())},1000) },[])

  return <div style={containerStyle}>
    <h2 style={titleStyle}>{title}</h2>
    <div style={divContentStyle}><div>{days}</div><span style={smalltextStyle}>Days</span></div>
    <div style={divContentStyle}><div>{hours}</div><span style={smalltextStyle}>Hours</span></div>
    <div style={divContentStyle}><div>{minutes}</div><span style={smalltextStyle}>Mins</span></div>
    <div style={divContentStyle}><div>{seconds}</div><span style={smalltextStyle}>Secs</span></div>
  </div>;
};
