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

import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

/**
 * schema used for generation of the configuration dialog
 * see https://react-jsonschema-form.readthedocs.io/en/latest/ for documentation
 */
export const configurationSchema: JSONSchema7 = {
  properties: {
    title: {
      type: "string",
      title: "Title",
      description: "Choose the title of the countdown."
    },
    titlecolor: {
      type: "string",
      title: "Title Color",
      description: "Choose the color for title of the countdown. Default: #333333",
      default: "#333333"
    },
    countdowndate: {
      type: "string",
      title: "Countdown Date + Time",
      format: "date-time"
    },
    boxescolorbg: {
      type: "string",
      title: "Background Color",
      description: "Choose the color for the background of the countdown boxes. Default: #FBC91E",
      default: "#FBC91E"
    },
    boxescolorborder: {
      type: "string",
      title: "Border Color",
      description: "Choose the color for the border of the countdown boxes. Default: #FBC91E",
      default: "#FBC91E"
    },
    boxescolortext: {
      type: "string",
      title: "Text Color",
      description: "Choose the color for the text in the countdown boxes. Default: #FFFFFF",
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
    "ui:autocomplete": "countdown-title"
  },
  titlecolor: {
    "ui:widget": "color"
  },
  boxescolorbg: {
    "ui:widget": "color"
  },
  boxescolorborder: {
    "ui:widget": "color"
  },
  boxescolortext: {
    "ui:widget": "color"
  },
};
