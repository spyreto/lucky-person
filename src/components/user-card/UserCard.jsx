// React
import { useMemo, useContext } from "react";
// Import context
import { ColorContext } from "../../context/color-context";
// Import icons
import { ReactComponent as MailIcon } from "../../assets/mail-20.svg";
import { ReactComponent as PhoneIcon } from "../../assets/call-20.svg";
import { ReactComponent as LocationIcon } from "../../assets/location-20.svg";
// Utlis
// Returns the appropriate contrast color based on given bg color
import { properFontColor, colorShade, colorTint } from "../../utils/utils";
// Import default color value (if local storage is empty)
import { defaultCardColor } from "../../utils/styleVariables";
// Import styles
import {
  PreviousCard,
  ActiveCard,
  NextCard,
  Header,
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

const UserCard = ({ cardType, isHidden, slideType, data }) => {
  const { selectedColor } = useContext(ColorContext);
  const Card = getCard(cardType);

  const { picture, name, email, phone, location } = data;
  const { street, city, state, country } = location;
  const fullName = `${name.first} ${name.last}`;

  // If the local storage value of color is empty
  // returns the defined default color
  const cardColor = selectedColor ? selectedColor : defaultCardColor;

  // Returns a memoized font color value based on selected color
  const fontColor = useMemo(() => properFontColor(cardColor), [cardColor]);

  // Returns a memoized font color value based on selected color
  const tint = useMemo(() => colorTint(cardColor), [cardColor]);
  const shade = useMemo(() => colorShade(cardColor), [cardColor]);

  return (
    <Card
      isHidden={isHidden}
      className={slideType}
      color={cardColor}
      fontColor={fontColor}
      tint={tint}
      shade={shade}
      data-testid={cardType}
    >
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
