import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
    padding: 10px 30px;
    background-color: #000;
    
`;
export const NavigationList = styled.ul`
    display: flex;
    width: 180px;
    justify-content: space-between;
    align-items: center;
`;
export const NavigationItem = styled.li`
    font-weight: 600;
`;
export const NavigationDelimeter = styled.div`
    height: 20px;
    width: 1px;
    background-color: white;
    border: none;
    position: absolute;
    top: 0;
    left: 55px;
`;