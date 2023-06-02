import styled from '@emotion/styled';
import { Form, Field } from "formik";

export const StyledForm = styled(Form)`
    display: block;
    width: 100%;
`;

export const UserDataWrapper = styled.div`
    width: 80%;
    height:100%;
    display: flex;
    flex-direction: column;
    gap:20px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 30px 60px 20px 20px;
    justify-content: space-around;
    background-color: #fff;
`
export const StyledInput = styled(Field)`
    width: 100%;
    height: 20px;
    margin-top: 10px;
    border-radius: 5px;
`;