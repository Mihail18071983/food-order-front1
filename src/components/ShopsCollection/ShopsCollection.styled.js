import styled from '@emotion/styled';

export const ShopList = styled.ul`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
  margin-right: 30px;
`;
export const ShopListItem = styled.li`
  margin-bottom: 30px;
`;

export const ShopButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 7px;
  background: white;
  border: none;
  &:hover {
    background: #c8c4c5;
  }
  &:active {
    background: #a9a5a6;
  }
  &:disabled {
    background: #e0e0e0;
    color: #a9a5a6;
    cursor: not-allowed;
  }
`;

export const ResetButton = styled.button`
  position: absolute;
  bottom: 50px;
  width: 200px;
  height: 50px;
  border-radius: 7px;
  background: white;
  border: none;
  &:hover {
    background: #c8c4c5;
  }
  &:disabled {
    background: #e0e0e0;
    color: #a9a5a6;
    cursor: not-allowed;
  }
`;
