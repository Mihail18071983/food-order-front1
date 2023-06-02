import styled from '@emotion/styled';
import { Field } from 'formik';


export const OrderList = styled.ul`
    width: 100%;
    background: #fff;
    margin-left: 30px;
    border: 1px solid black;
    border-radius: 10px;
    height: 70vh;
    overflow-y: scroll;
    padding: 10px;
`;
export const OrderListItem = styled.li`
    padding: 10px 0 20px 10px;
    display: flex;
    border: 1px solid black;
    border-radius: 10px;
    margin-bottom: 10px;
    justify-content: space-between;
    align-items: flex-end;
    background-color: white;
`;


export const DescritionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
export const ItemOrderTittle = styled.span`

`;
export const ItemOrderCount = styled.span`
    margin-top: 10px;
`;
export const ItemOrderPrice = styled.span`
    margin-top: 10px;
`;

export const ValueInputWrapper = styled.div`
    margin-top: 100px;
    margin-right: 20px;
    position: relative;
`;
export const ValueInput = styled(Field)`
    width: 100px;
    height: 25px;
    border: none;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    border: 1px solid black;
`;

export const ValueInputButtonSet = styled.div`
    //border: 1px solid black;
    width: 90px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    position: absolute;
    top: 5px;
    left: 8px;
`;
export const ValueInputButton = styled.button`
    width: 28px;
    height: 18px;
    border: none;
    border-radius: 5px;
    background: ${props => props.appointment === "decrement" ? "rgb(227, 6, 19)" : "green"};
`;
export const RemoveItemBtn = styled.button`
    border: none;
    font-weight: bolder;
    background: none;
    color: rgb(227, 6, 19);
    position: absolute;
    top: -200px;
    right: -10px;
    transition: color 500ms ease;
    &:hover {
        color: rgb(168, 5, 14);
    }
`;