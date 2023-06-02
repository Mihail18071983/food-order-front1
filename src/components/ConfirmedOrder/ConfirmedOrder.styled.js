import styled from '@emotion/styled';
import confirmImg from "../../img/acess-icon.png"


export const ConfirmedOrderWrapper = styled.div`
    width: 100%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('${confirmImg}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

`;
export const ConfirmedTittle = styled.h2`
    margin-bottom: 50px;
`;
export const ConfirmedTextWrapper = styled.div`
    display: flex;
    width: 500px;
    margin-bottom: 40px;
`;
export const RelocationButton = styled.button`
    border: none;
    background: none;
    font-weight: bolder;
`;