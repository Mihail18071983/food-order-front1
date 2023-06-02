import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding: 30px 0;
  background-color: #dadedb;
  max-width: 1400px;
`;
export const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  display: flex;
  position: relative;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
 &.active {
    color: red;
    font-weight: bold;
  }
`;

export const ImageWrapper = styled.div`
  width: 330px;
  height: 220px;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;
