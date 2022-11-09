import {
  render,
  screen,
  fireEvent,
} from "../../test-utils/testing-library-utils";

import SelectColorBox from "./SelectColorBox";

describe("SelectColorBox component", () => {
  test("Initial conditions", () => {
    // Arrange
    render(<SelectColorBox />);

    // Assert
    //  Renders "Card background color:" as a text
    const LabelElement = screen.getByText("Card background color:");
    expect(LabelElement).toBeInTheDocument();

    // Input (type: color) initial condition
    const colorInput = screen.getByLabelText("Card background color:");
    expect(colorInput).not.toBeVisible();
    // defaultCardColor
    expect(colorInput.value).toBe("#ffffff");

    // Drop svg icon initial condition
    const dropIcon = screen.getByText("drop-24.svg");
    expect(dropIcon).toBeVisible();
    // defaultCardColor
    expect(dropIcon).toHaveAttribute("fill", "#ffffff");

    // Drop svg icon initial condition
    const colorPickerIcon = screen.getByText("colorize-24.svg");
    expect(colorPickerIcon).toBeVisible();

    // Value on color input initial condition
    const colorTextValue = screen.getByText(/select color/i);
    expect(colorTextValue).toBeVisible();
  });

  test("The user has picked a color", () => {
    // Arrange
    render(<SelectColorBox />);

    // Act
    const colorInput = screen.getByLabelText(/card background color:/i);
    fireEvent.input(colorInput, { target: { value: "#c39dd7" } });

    // Assert
    expect(colorInput.value).toBe("#c39dd7");

    const colorTextValue = screen.getByText("#c39dd7");
    expect(colorTextValue).toBeVisible();

    // Displaying the rest elements of the color box
    const dropIcon = screen.getByText("drop-24.svg");
    expect(dropIcon).toBeVisible();
    expect(dropIcon).toHaveAttribute("fill", "#c39dd7");

    const colorPickerIcon = screen.getByText("colorize-24.svg");
    expect(colorPickerIcon).toBeVisible();

    const LabelElement = screen.getByText("Card background color:");
    expect(LabelElement).toBeInTheDocument();
  });
});
