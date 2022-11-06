// expect length of user array
// expect toHaveStyle

import { render, screen } from "@testing-library/react";
import UserSlider from "./UserSlider";

const mockColor = "#c39dd7";
describe("UserSlider component", () => {
  test("Initial condition", () => {
    render(<UserSlider color={mockColor} />);

    // Previous button
    const prevButton = screen.getByText("arrow-prev-24.svg");
    expect(prevButton).not.toBeVisible();

    // Next button
    const nextButton = screen.getByText("arrow-next-24.svg");
    expect(nextButton).toBeVisible();
  });
});
