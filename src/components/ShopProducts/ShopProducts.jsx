import {
  SplashScreen,
  ShopProductsWrapper,
  ProductsLisWrapper,
  ProductsList,
  ProductsItem,
  OrderButton,
  Description,
  TextWrapper,
  MealPrice,
} from './ShopProducts.styled';
import { ImageWrapper } from 'components/GlobalStyles';
import { ShopContext } from 'utils/context';
import { useContext } from 'react';

const baseUrl = process.env.REACT_APP_API_URL;

export const ShopProducts = ({ productionData, orderCreator }) => {
  const { selectedShop } = useContext(ShopContext);
  return (
    <ShopProductsWrapper
      image={productionData !== null && productionData.wallpaper}
    >
      {productionData === null && (
        <SplashScreen>
          <h1>
            Select a store <br />
            and view <br />
            the list of its products
          </h1>
        </SplashScreen>
      )}
      {productionData !== null && (
        <ProductsLisWrapper>
          {selectedShop && (
            <ProductsList>
              {productionData.products.map(({ name, price, image, id }) => {
                return (
                  <ProductsItem key={id}>
                    <ImageWrapper>
                      <img
                        className="meal-image"
                        src={`${baseUrl}/${image}`}
                        alt="fast-food"
                        height="100%"
                      />
                    </ImageWrapper>

                    <Description>
                      <TextWrapper>
                        <p className="meal-title">{name}</p>
                        <MealPrice className="meal-price">{price}$</MealPrice>
                      </TextWrapper>
                      <OrderButton
                        onClick={() => {
                          orderCreator({
                            id,
                            shop: productionData.shop,
                            name,
                            price,
                            imageUrl: image,
                          });
                        }}
                      >
                        Add to card
                      </OrderButton>
                    </Description>
                  </ProductsItem>
                );
              })}
            </ProductsList>
          )}
        </ProductsLisWrapper>
      )}
    </ShopProductsWrapper>
  );
};
