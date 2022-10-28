// Import icons
import { ReactComponent as MailIcon } from "../../assets/mail-20.svg";
import { ReactComponent as PhoneIcon } from "../../assets/call-20.svg";
import { ReactComponent as LocationIcon } from "../../assets/location-20.svg";

import { properFontColor } from "../../utils/utils";

// Import styles
import { Container, Header, InfoContainer, InfoItem } from "./UserCard.styles";

const UserCard = ({ data, color }) => {
  const { picture, name, email, phone, location } = data;
  const { street, city, state, country } = location;

  const cardFontColor = properFontColor(color);
  const fullName = `${name.first} ${name.last}`;
  return (
    <Container color={color} fontColor={cardFontColor}>
      <Header>
        <img src={picture.large} loading="lazy" alt={fullName}></img>
        <h3>{fullName}</h3>
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
