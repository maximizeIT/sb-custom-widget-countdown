import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

/**
 * schema used for generation of the configuration dialog
 * see https://react-jsonschema-form.readthedocs.io/en/latest/ for documentation
 */
export const configurationSchema: JSONSchema7 = {
  description: "DEMO / SHOWCASE: This custom widget was developed for demonstration purposes only. This is not covered by Staffbase Support.",
  required: [
    "title",
    "countdowndate",
    "expiredmessage"
  ],
  properties: {  
    title: {
      type: "string",
      title: "Title"
    },
    showtitle: {
      type: "boolean",
      title: "Show Title"
    },
    titlecolor: {
      type: "string",
      title: "Title Color",
      default: "#333333"
    },
    countdowndate: {
      type: "string",
      title: "Countdown Date + Time",
      format: "date-time"
    },
    expiredmessage: {
      type: "string",
      title: "Expired Message",
      default: "Countdown is done."
    },
    boxescolorbg: {
      type: "string",
      title: "Background Color",
      default: "#FBC91E"
    },
    boxescolorborder: {
      type: "string",
      title: "Border Color",
      default: "#FBC91E"
    },
    boxescolortext: {
      type: "string",
      title: "Text Color",
      default: "#FFFFFF"
    },
  },
};

/**
 * schema to add more customization to the form's look and feel
 * @see https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/uiSchema/
 */
export const uiSchema: UiSchema = {
  title: {
    "ui:autofocus": true,
    "ui:emptyValue": "",
    "ui:autocomplete": "off",
    "ui:help": "Choose a title for the countdown."
  },
  showtitle: {
    "ui:help": "Do you want to display the title?"
  },
  titlecolor: {
    "ui:widget": "color",
    "ui:help": "Choose a color for the title of the countdown. Default: #333333"
  },
  countdowndate: {
    "ui:help": "Choose a date and time for the countdown."
  },
  expiredmessage: {
    "ui:help": "Enter an expired message for the countdown."
  },
  boxescolorbg: {
    "ui:widget": "color",
    "ui:help": "Choose a color for the background of the countdown boxes. Default: #FBC91E"
  },
  boxescolorborder: {
    "ui:widget": "color",
    "ui:help": "Choose a color for the border of the countdown boxes. Default: #FBC91E"
  },
  boxescolortext: {
    "ui:widget": "color",
    "ui:help": "Choose a color for the text in the countdown boxes. Default: #FFFFFF"
  },
};
