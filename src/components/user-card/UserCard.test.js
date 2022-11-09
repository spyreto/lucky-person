// expect length of user array
// expect toHaveStyle

import { render, screen } from "../../test-utils/testing-library-utils";
import UserCard from "./UserCard";

const mockUserdData = {
  name: {
    title: "Miss",
    first: "Laura",
    last: "Woods",
  },
  location: {
    street: {
      number: 2479,
      name: "Henry Street",
    },
    city: "Blessington",
    state: "Wexford",
    country: "Ireland",
    postcode: 78276,
    coordinates: {
      latitude: "2.0565",
      longitude: "95.2422",
    },
    timezone: {
      offset: "+1:00",
      description: "Brussels, Copenhagen, Madrid, Paris",
    },
  },
  email: "laura.woods@example.com",
  phone: "031-623-5189",
  picture: {
    large: "https://randomuser.me/api/portraits/women/88.jpg",
    medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/88.jpg",
  },
};

describe("UserCard component", () => {
  test("Active card", () => {
    render(
      <UserCard
        cardType="active"
        isHidden={false}
        slideType=""
        data={mockUserdData}
      />
    );

    //User image
    const userImage = screen.getByAltText("Laura Woods");
    expect(userImage).toBeVisible();

    // User name
    const userName = screen.getByRole("heading", { name: "Laura Woods" });
    expect(userName).toBeVisible();

    // expect(userName).toBeInTheDocument();

    // Mail part
    const mailIcon = screen.getByText("mail-20.svg");
    const userMail = screen.getByText("laura.woods@example.com");
    expect(mailIcon).toBeVisible();
    expect(userMail).toBeVisible();

    // Location part
    const locationIcon = screen.getByText("location-20.svg");
    const userLocation = screen.getByText(
      `Henry Street 2479, Blessington, Wexford, Ireland`
    );
    expect(locationIcon).toBeVisible();
    expect(userLocation).toBeVisible();
  });

  // Previous card initial when the active card is the first one
  test("Previous user card initial condition", () => {
    render(
      <UserCard
        cardType="previous"
        isHidden={true}
        slideType=""
        data={mockUserdData}
      />
    );

    //User image
    const userImage = screen.getByAltText("Laura Woods");
    expect(userImage).not.toBeVisible();
    expect(userImage).toBeInTheDocument();

    // User fullname
    const userName = screen.getByRole("heading", { hidden: true });
    expect(userName).toBeInTheDocument();
    expect(userName).not.toBeVisible();

    // Mail part
    const mailIcon = screen.getByText("mail-20.svg");
    const userMail = screen.getByText("laura.woods@example.com");
    expect(mailIcon).not.toBeVisible();
    expect(mailIcon).toBeInTheDocument();
    expect(userMail).not.toBeVisible();
    expect(userMail).toBeInTheDocument();

    // Location part
    const locationIcon = screen.getByText("location-20.svg");
    const userLocation = screen.getByText(
      `Henry Street 2479, Blessington, Wexford, Ireland`
    );
    expect(locationIcon).not.toBeVisible();
    expect(locationIcon).toBeInTheDocument();
    expect(userLocation).not.toBeVisible();
    expect(userLocation).toBeInTheDocument();
  });
});
