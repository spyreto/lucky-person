//React Portal for displaing a modal

// React
import { Fragment } from "react";
import ReactDOM from "react-dom";

// Import styles
import { Backdrop, Container, Header, Content } from "./Modal.styles";

const Modal = (props) => {
  return (
    <Fragment data-testid="modal">
      {ReactDOM.createPortal(
        //Creates background blur effect
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Container>
          <Header>
            <h2>{props.title}</h2>
          </Header>
          <Content>{props.message}</Content>
        </Container>,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default Modal;
