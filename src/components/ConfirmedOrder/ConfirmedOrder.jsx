import { ConfirmedOrderWrapper, ConfirmedTittle, ConfirmedTextWrapper, RelocationButton } from "./ConfirmedOrder.styled"
import { useNavigate } from "react-router-dom"

export const ConfirmedOrder = () => {
const navigate = useNavigate();





    return (
        <ConfirmedOrderWrapper>
            <ConfirmedTittle>Your order is accepted</ConfirmedTittle>
            <ConfirmedTextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias qui vel provident quisquam voluptas ex similique quia animi, aliquam ab a atque consectetur est ratione? Veniam, error nobis. Quae, laboriosam.
            </ConfirmedTextWrapper>
            <RelocationButton onClick={() => {
                navigate("/")
            }}>Go to home page</RelocationButton>
        </ConfirmedOrderWrapper>
    )
}