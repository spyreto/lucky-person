import { rest } from "msw";
import { usersData } from "./userData";

const deepElementCopy = (i) => {
  return {
    picture: {
      large: i.picture.large,
    },
    name: {
      first: i.name.first,
      last: i.name.last,
    },
    email: i.email,
    phone: i.phone,
    location: {
      street: {
        name: i.location.name,
        number: i.street.number,
      },
      city: i.location.city,
      state: i.location.state,
      country: i.location.country,
    },
  };
};

// Mimics randomuser.me
export const handlers = [
  rest.get("https://randomuser.me/api", (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    const results = req.url.searchParams.get("results");
    const sliceStart = (page - 1) * 12;
    const sliceEnd = sliceStart + results;
    const data = usersData.slice(sliceStart, sliceEnd);
    return res(ctx.json({ results: JSON.parse(JSON.stringify(data)) }));
  }),
];
