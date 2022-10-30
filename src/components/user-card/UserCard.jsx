// Import icons
import { ReactComponent as MailIcon } from "../../assets/mail-20.svg";
import { ReactComponent as PhoneIcon } from "../../assets/call-20.svg";
import { ReactComponent as LocationIcon } from "../../assets/location-20.svg";

// Utlis
// Returns the appropriate contrast color based on given bg color
import { properFontColor } from "../../utils/utils";

// Import styles
import {
  PreviousCard,
  CurrentCard,
  NextCard,
  Header,
  InfoContainer,
  InfoItem,
} from "./UserCard.styles";

export const CARD_TYPE_CLASSES = {
  previous: "previous",
  current: "current",
  next: "next",
};

const getCard = (cardType = CARD_TYPE_CLASSES.current) =>
  ({
    [CARD_TYPE_CLASSES.previous]: PreviousCard,
    [CARD_TYPE_CLASSES.current]: CurrentCard,
    [CARD_TYPE_CLASSES.next]: NextCard,
  }[cardType]);

const UserCard = ({ data, color, cardType, isHidden }) => {
  const Card = getCard(cardType);

  const { picture, name, email, phone, location } = data;
  const { street, city, state, country } = location;
  const fullName = `${name.first} ${name.last}`;

  const cardFontColor = properFontColor(color);

  return (
    <Card color={color} fontColor={cardFontColor} isHidden={isHidden}>
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
    </Card>
  );
};

export default UserCard;
