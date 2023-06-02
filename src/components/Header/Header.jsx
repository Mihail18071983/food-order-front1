import {
  HeaderStyled,
  NavigationList,
  NavigationItem,
  NavigationDelimeter,
} from './Header.styled';
import { StyledLink, Container } from 'components';
export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <Container>
          <nav>
            <NavigationList>
              <NavigationItem>
                <StyledLink to="/">Shop</StyledLink>
              </NavigationItem>

              <NavigationItem>
                <StyledLink to="order">Shopping Cart</StyledLink>
              </NavigationItem>
            </NavigationList>

            <NavigationDelimeter />
          </nav>
        </Container>
      </HeaderStyled>
    </>
  );
};
