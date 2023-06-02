import styled from '@emotion/styled';
import mainImg from '../../img/main-background.jpg';

const baseUrl = process.env.REACT_APP_API_URL


export const ShopProductsWrapper = styled.div`
    width: 100%;
    height: 80vh;
    background-image: url('${baseUrl}/${props => props.image}');
    border-radius: 10px;

`;
export const SplashScreen = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(rgba(0, 16, 56, 0.45), rgba(0, 16, 56, 0.45)), url('${mainImg}');
    overflow: hidden;
    border-radius: 10px;
`;

export const ProductsLisWrapper = styled.div`
box-sizing: border-box;
height: 100%;
overflow-y: scroll;
padding: 10px;
`;
export const ProductsList = styled.ul`
    padding-left: 35px;
    padding-right: 35px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
`;

export const ProductsItem = styled.li`
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 20px;
`;

export const Description = styled.div`
    padding: 0 10px 10px 10px;
   display: flex;
   justify-content: space-between;
   background-color: rgba(255, 255, 255, 0.8);
`;
export const TextWrapper = styled.div`
   display: flex;
   margin-top: 10px;
`;
export const OrderButton = styled.button`
    width: 100px;
    height: 35px;
    background: rgb(227, 6, 19);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 5px;
    border: none;
    margin-top: 30px;
`;
export const MealPrice = styled.span`
    margin-left: 10px;
    font-weight: 700;
`;