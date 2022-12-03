import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { colorShade, colorTint } from "./utils/utils";

import App from "./App";

describe("App component", () => {
  test("Renders heading", () => {
    render(<App />);
    // Main heading
    const heading = screen.getByRole("heading", { name: "Lucky Person" });
    expect(heading).toBeInTheDocument();
  });
});

describe("Testing app functionality", () => {
  test("Card and color change functionality", async () => {
    // Arrange
    // const { container } = render(<App />);
    // logRoles(container);
    render(<App />);

    // Next button
    const nextButton = screen.getByText("arrow-next-24.svg");
    expect(nextButton).toBeVisible();

    // Loading spinner
    const loading = screen.getByTestId("spinner");
    expect(loading).toBeInTheDocument();

    // Check if the active cards is loaded
    const activeCard = await screen.findByTestId("active");
    expect(activeCard).toBeVisible();
    // Default card color #ffffff
    expect(activeCard).toHaveStyle(`
    background: linear-gradient(
      135deg,
      ${colorTint("#ffffff")} 10%,
      ${"#ffffff"} 30% 60%,
      ${colorShade("#ffffff")} 90%
    )
  `);

    // Act
    // Click on next button
    userEvent.click(nextButton);
    // Assert
    const nextPreviousCard = await screen.findByTestId("previous");
    expect(nextPreviousCard).toContainHTML("<h3>Laura Woods</h3>");

    const nextActiveCard = await screen.findByTestId("active");
    expect(nextActiveCard).toContainHTML("<h3>Marten Faber</h3>");

    const nextNextCard = await screen.findByTestId("next");
    expect(nextNextCard).toContainHTML("<h3>Kirstin Abraham</h3>");

    // Act
    // Change color to #c39dd7
    const colorInput = screen.getByLabelText(/card background color:/i);
    fireEvent.input(colorInput, { target: { value: "#c39dd7 " } });

    // Assert
    expect(nextActiveCard).toHaveStyle(`
    background: linear-gradient(
      135deg,
      ${colorTint("#c39dd7")} 10%,
      #c39dd7 30% 60%,
      ${colorShade("#c39dd7")} 90%
    )
  `);
  });
});
