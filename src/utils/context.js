import { createContext, useState } from 'react';

const OrderContext = createContext([]);
const ShopContext = createContext();
const AddressContext = createContext(null);

function ShopContextProvider({ children }) {
  const [selectedShop, setSelectedShop] = useState(() => {
    const shop = localStorage.getItem('selectedShop');
    return shop ? JSON.parse(shop) : null;
  });
  const [order, setOrder] = useState([]);
  const [address, setAddress] = useState('');

  return (
    <ShopContext.Provider value={{ selectedShop, setSelectedShop }}>
      <AddressContext.Provider value={{ address, setAddress }}>
        <OrderContext.Provider value={{ order, setOrder }}>
          {children}
        </OrderContext.Provider>
      </AddressContext.Provider>
    </ShopContext.Provider>
  );
}

export { OrderContext, ShopContext, ShopContextProvider, AddressContext };
