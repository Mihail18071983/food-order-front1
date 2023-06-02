import {  useContext, useEffect } from 'react';

import { OrderContext, ShopContext } from '../../utils/context';

import {
  ShopButton,
  ResetButton,
  ShopListItem,
  ShopList,
} from './ShopsCollection.styled';

export const ShopsCollection = ({ storesData, setCurrentShop }) => {
  // const [selectedShop, setSelectedShop] = useState(() => {
  //   const shop = localStorage.getItem('selectedShop');
  //   return shop ? JSON.parse(shop) : null;
  // });

  const { selectedShop, setSelectedShop } = useContext(ShopContext);
  const { setOrder } = useContext(OrderContext);

  useEffect(() => {
    localStorage.setItem('selectedShop', JSON.stringify(selectedShop));
  }, [selectedShop]);

  // const [ setOrder] = useContext(OrderContext);

  function onSelectedShop(event) {
    const selectedShop = event.target.dataset.currentshop;
    setCurrentShop(selectedShop);
    setSelectedShop(selectedShop);
    setOrder([]);
  }

  function resetSelectedShop() {
    setSelectedShop(null);
    setOrder([]);
  }

  return (
    <ShopList>
      {storesData !== null &&
        storesData.map(item => {
          const isDisabled =
            selectedShop !== null && selectedShop !== item.shop;
          return (
            <ShopListItem key={item.shop}>
              <ShopButton
                type="button"
                data-currentshop={item.shop}
                onClick={onSelectedShop}
                disabled={isDisabled}
              >
                {item.shop}
              </ShopButton>
            </ShopListItem>
          );
        })}
      <ResetButton onClick={resetSelectedShop} disabled={!selectedShop}>
        RESET STORE
      </ResetButton>
    </ShopList>
  );
};
