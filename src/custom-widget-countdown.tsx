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
  showtitle: boolean;
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

export const CustomWidgetCountdown = ({ title, showtitle, titlecolor, boxescolorbg, boxescolorborder, boxescolortext, countdowndate }: CustomWidgetCountdownProps): ReactElement => {

  const titleStyle: CSS.Properties = {
    color: titlecolor
  };

  const containerStyle: CSS.Properties = {
    display: "block",
    textAlign: "center"
  };

  const boxStyle: CSS.Properties = {
    fontSize: "30px",
    margin: "0px 5px 0px 0px",
    marginRight: "5px",
    display: "inline-block",
    borderRadius: "5px",
    border: "2px solid",
    borderColor: boxescolorborder,
    background: boxescolorbg,
    color: boxescolortext,
    width: "22.5%",
    padding: "10px 0"
  };

  const smalltextStyle: CSS.Properties = {
    paddingTop: "5px",
    fontSize: "14px",
    display: "inline-block"
  };

  const isTitleShown = typeof showtitle == "string" ? showtitle === "true" : !!showtitle;

  const [ actualdate, setactualdate ] = React.useState(Date.now());
  const { days, hours, minutes, seconds } = calculatedifference(actualdate,countdowndate)
  React.useEffect(()=>{ setInterval(()=>{setactualdate(Date.now())},1000) },[])

  return <div style={containerStyle}>
    {isTitleShown ? <h2 style={titleStyle}>{title}</h2> : '' }
    <div style={boxStyle}><div>{days}</div><span style={smalltextStyle}>Days</span></div>
    <div style={boxStyle}><div>{hours}</div><span style={smalltextStyle}>Hours</span></div>
    <div style={boxStyle}><div>{minutes}</div><span style={smalltextStyle}>Minutes</span></div>
    <div style={boxStyle}><div>{seconds}</div><span style={smalltextStyle}>Seconds</span></div>
  </div>;
};
