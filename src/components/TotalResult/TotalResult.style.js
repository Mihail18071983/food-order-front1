import styled from '@emotion/styled';

export const TotalResultWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
`;
export const ConfirmOrderButton = styled.button`
    margin-left: 30px;
    width: 150px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background: #374259;
    transition: background 500ms ease;
    transition: color 500ms ease;
    &:hover {
        background: #545B77;
        color: white;
    }
`;