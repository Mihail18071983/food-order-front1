import {
  ConfirmedOrderWrapper,
  ConfirmedTittle,
  ConfirmedTextWrapper,
  RelocationButton,
} from "./ConfirmedOrder.styled";
import { useNavigate } from "react-router-dom";

export const ConfirmedOrder = () => {
  const navigate = useNavigate();

  return (
    <ConfirmedOrderWrapper>
      <ConfirmedTittle>Your order is accepted</ConfirmedTittle>
      <ConfirmedTextWrapper>
       Thanks for choosing our restaurant. <br/>Your order will be delivered in short way
      </ConfirmedTextWrapper>
      <RelocationButton
        onClick={() => {
          navigate("/");
        }}
      >
        Go to home page
      </RelocationButton>
    </ConfirmedOrderWrapper>
  );
};
