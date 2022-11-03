// React
import { useMemo } from "react";

// Import icons
import { ReactComponent as MailIcon } from "../../assets/mail-20.svg";
import { ReactComponent as PhoneIcon } from "../../assets/call-20.svg";
import { ReactComponent as LocationIcon } from "../../assets/location-20.svg";

// Utlis
// Returns the appropriate contrast color based on given bg color
import { properFontColor, colorShade, colorTint } from "../../utils/utils";

// Import styles
import {
  PreviousCard,
  ActiveCard,
  NextCard,
  Name,
  InfoContainer,
  InfoItem,
} from "./UserCard.styles";

export const CARD_TYPE_CLASSES = {
  previous: "previous",
  active: "active",
  next: "next",
};

const getCard = (cardType = CARD_TYPE_CLASSES.active) =>
  ({
    [CARD_TYPE_CLASSES.previous]: PreviousCard,
    [CARD_TYPE_CLASSES.active]: ActiveCard,
    [CARD_TYPE_CLASSES.next]: NextCard,
  }[cardType]);

const UserCard = ({ cardType, isHidden, slideType, color, data }) => {
  const Card = getCard(cardType);

  const { picture, name, email, phone, location } = data;
  const { street, city, state, country } = location;
  const fullName = `${name.first} ${name.last}`;

  // Returns a memoized font color value based on selected color
  const fontColor = useMemo(() => properFontColor(color), [color]);

  // Returns a memoized font color value based on selected color
  const tint = useMemo(() => colorTint(color), [color]);
  const shade = useMemo(() => colorShade(color), [color]);

  return (
    <Card
      isHidden={isHidden}
      className={slideType}
      color={color}
      fontColor={fontColor}
      tint={tint}
      shade={shade}
    >
      <Name>
        <img src={picture.large} loading="lazy" alt={fullName}></img>
        <h3>{fullName}</h3>
      </Name>
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
