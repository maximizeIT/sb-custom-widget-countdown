import React, { ReactElement } from "react";
import { BlockAttributes } from "widget-sdk";
import { CountdownView } from "./views/countdownView";

/**
 * React Component
 */
export interface CustomWidgetCountdownProps extends BlockAttributes {
  title: string;
  showtitle: boolean;
  titlecolor: string;
  countdowndate: string;
  expiredmessage: string;
  boxescolorbg: string;
  boxescolortext: string;
  boxescolorborder: string;
}

export const CustomWidgetCountdown = ({ title, showtitle, titlecolor, boxescolorbg, boxescolorborder, boxescolortext, countdowndate, expiredmessage, contentLanguage }: CustomWidgetCountdownProps): ReactElement => {

  return <CountdownView
    {...{
      title,
      showtitle,
      titlecolor,
      boxescolorbg,
      boxescolorborder,
      boxescolortext,
      countdowndate,
      expiredmessage,
      contentLanguage,
    }}
  />
};
