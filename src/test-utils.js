// test-utils.js
import React from "react";
import { render } from "react-testing-library";

const AllTheProviders = ({ children }) => {
  return <div className="m-providers-here">{children}</div>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "react-testing-library";

// override render method
export { customRender as render };
