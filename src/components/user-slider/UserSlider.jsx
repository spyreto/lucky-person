import UserCard from "../user-card/UserCard";

import { Container } from "./UserSlider.styles";

const userData = {
  imageUrl: "https://randomuser.me/api/portraits/men/75.jpg",
  name: {
    first: "Jennie",
    last: "Nichols",
  },
  location: {
    street: {
      number: 8929,
      name: "Valwood Pkwy",
    },
    city: "Billings",
    state: "Michigan",
    country: "United States",
    postcode: "63104",
  },
  email: "jennie.nichols@example.com",
  phone: "(272) 790-0888",
};

const UserSlider = ({ color }) => {
  return (
    <Container>
      <UserCard data={userData} color={color} />
    </Container>
  );
};

export default UserSlider;
