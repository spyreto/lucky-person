import { render } from "@testing-library/react";
import { ColorProvider } from "../context/color-context";

// Custom render with wrapper
// ui is a standard way refer to whatever JSX trying to render
const renderWithContext = (ui, options) =>
  render(ui, { wrapper: ColorProvider, ...options });

// Re-export everything eg screen
export * from "@testing-library/react";

// Override render method
export { renderWithContext as render };
