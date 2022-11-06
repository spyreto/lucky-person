import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("Renders heading", () => {
    render(<App />);
    // Main heading
    const heading = screen.getByRole("heading", { name: "My Clerks" });
    expect(heading).toBeInTheDocument();
  });
});
