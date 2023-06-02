import { ShopsCollection, ShopProducts } from 'components';
import { useState, useEffect } from 'react';

export default function ShopsPage({ storesData, orderCreator }) {
  const [currentShop, setCurrentShop] = useState('');
  const [productionData, setProductionData] = useState(null);

  useEffect(() => {
    function currentShopProductsCreator(shopTitle) {
      const data = storesData.find(item => item.shop === shopTitle);
      setProductionData(data);
    }

    if (currentShop !== '') {
      currentShopProductsCreator(currentShop);
    }
  }, [currentShop, storesData]);

  return (
    <div style={{display:'flex', paddingLeft:'15px', paddingRight:"15px"}}>
      <ShopsCollection
        storesData={storesData}
        setCurrentShop={setCurrentShop}
      />
      <ShopProducts
        productionData={productionData}
        orderCreator={orderCreator}
      />
    </div>
  );
}
