// fireEvent.click(element)
// userEvent() npm i @testing-library/user-event

import { render, screen } from "@testing-library/react";
// import { fireEvent as domFireEvent } from "@testing-library/dom";
// import userEvent from "@testing-library/user-event";
import SelectColorBox from "./SelectColorBox";

describe("SelectColorBox component", () => {
  let mockColor;
  const mockOnChangeHandler = jest.fn(mockColor);

  test("Initial conditions", () => {
    mockColor = undefined;
    // Arrange
    render(
      <SelectColorBox color={mockColor} onChangeHandler={mockOnChangeHandler} />
    );

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

  test("The user has selected a color", () => {
    // Unfortunately we can't use fireEvent  in an input of type: color
    // not even the fireEvent from  the @testing-library/dom library;
    mockColor = "#c39dd7";
    // Arrange
    render(
      <SelectColorBox color={mockColor} onChangeHandler={mockOnChangeHandler} />
    );

    // Assert
    const colorInput = screen.getByLabelText(/card background color:/i);
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
