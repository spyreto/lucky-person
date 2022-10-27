// Import icons
import { ReactComponent as MailIcon } from "../../assets/mail-20.svg";
import { ReactComponent as PhoneIcon } from "../../assets/call-20.svg";
import { ReactComponent as LocationIcon } from "../../assets/location-20.svg";

// Import styles
import {
  Container,
  Header,
  Name,
  InfoContainer,
  InfoItem,
} from "./UserCard.styles";

const UserCard = ({ data, color }) => {
  const { imageUrl, name, email, phone, location } = data;
  const { street, city, state, country } = location;
  return (
    <Container color={color}>
      <Header>
        <img src={imageUrl}></img>
        <h3>
          {name.first} {name.last}
        </h3>
      </Header>
      <InfoContainer>
        <InfoItem>
          <MailIcon />
          <span>{email}</span>
        </InfoItem>
        <InfoItem>
          <PhoneIcon />
          <span>{phone}</span>
        </InfoItem>
        <InfoItem>
          <LocationIcon />
          <span>
            {street.name} {street.number}, {city}, {state}, {country}
          </span>
        </InfoItem>
      </InfoContainer>
    </Container>
  );
};

export default UserCard;
