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

  return <div><CountdownView
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
  /><br/><br/><div data-widget-conf-grid-type="100" data-widget-type="Section" data-widget-src="internal://staffbase.content.widgets.Section"><div>
  <div data-widget-conf-type="warning" data-widget-on-card="true" data-widget-type="Infobox" data-widget-src="internal://staffbase.content.widgets.Infobox"><p>PROTOTYPES AND FOR DEMO PURPOSES ONLY!</p><p>NOT FOR PRODUCTION USE!</p><p>NOT AVAILABLE TO CUSTOMERS!</p></div>
  </div></div></div>
};
