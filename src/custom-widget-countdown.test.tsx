import React from "react"
import {screen, render} from "@testing-library/react"

import {CustomWidgetCountdown} from "./custom-widget-countdown";

describe("CustomWidgetCountdown", () => {
    it("should render the component", () => {
        render(<CustomWidgetCountdown contentLanguage="en_US" message="World"/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
