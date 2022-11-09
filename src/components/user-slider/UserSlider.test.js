// expect length of user array
// expect toHaveStyle

import { render, screen } from "@testing-library/react";
import UserSlider from "./UserSlider";

import { rest } from "msw";
import { server } from "../../mocks/server";

const mockColor = "#c39dd7";
describe("UserSlider component", () => {
  test("Initial condition", () => {
    render(<UserSlider />);

    // Previous button
    const prevButton = screen.getByText("arrow-prev-24.svg");
    expect(prevButton).not.toBeVisible();

    // Next button
    const nextButton = screen.getByText("arrow-next-24.svg");
    expect(nextButton).toBeVisible();
  });

  test("Handles error", async () => {
    server.resetHandlers(
      rest.get("random.me", (req, res, ctx) => res(ctx.status(500))),
      rest.get("random.me", (req, res, ctx) => res(ctx.status(500)))
    );

    // await scrrenn.findAll.... (promise)
  });
});
