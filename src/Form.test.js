import React from "react";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import { render } from "react-testing-library";

import Form from "./Form";

describe("<Form/> tests", () => {
  it("should render successfully", () => {
    const { getByPlaceholderText } = render(<Form />);
    const email = getByPlaceholderText(/enter your email/i);
    expect(email).toBeDefined();
  });
});
