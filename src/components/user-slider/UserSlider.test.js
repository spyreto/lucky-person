// expect length of user array
// expect toHaveStyle

// Overide testing-library/react
import {
  render,
  screen,
  within,
  prettyDOM,
} from "../../test-utils/testing-library-utils";

import App from "../../App";

import { rest } from "msw";
import { server } from "../../mocks/server";

import UserSlider from "./UserSlider";

describe("UserSlider component", () => {
  test("Initial condition", async () => {
    render(<UserSlider />);

    // Previous button
    const prevButton = screen.getByText("arrow-prev-24.svg");
    expect(prevButton).not.toBeVisible();

    // Next button
    const nextButton = screen.getByText("arrow-next-24.svg");
    expect(nextButton).toBeVisible();

    // Loading spinner
    const loading = screen.getByTestId("spinner");
    expect(loading).toBeVisible();

    // Check if the initial 3 cards are loaded (default media query mobile)
    const prevCard = await screen.findByTestId("previous");
    expect(prevCard).toBeInTheDocument();

    const activeCard = await screen.findByTestId("active");
    expect(activeCard).toBeVisible();

    const nextCard = await screen.findByTestId("next");
    expect(nextCard).toBeInTheDocument();

    // Expect that Loading spinner has disappeared
    const notLoading = screen.queryByTestId("spinner");
    expect(notLoading).not.toBeInTheDocument();
  });

  test("Handles error", async () => {
    server.resetHandlers(
      rest.get("https://randomuser.me/api", (req, res, ctx) =>
        res(ctx.status(500))
      )
    );
    render(<UserSlider />);

    //  console.log(prettyDOM());
  });
});
