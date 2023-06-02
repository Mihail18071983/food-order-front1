import { Route, Routes } from 'react-router-dom';
import { useState, useEffect, lazy, useContext } from 'react';
import { getAllProducts } from 'API/ProductsAPI';
import { OrderContext } from 'utils/context';
import Notiflix from 'notiflix';

const LayoutPage = lazy(() => import('Pages/LayoutPage'));
const ShopsPage = lazy(() => import('Pages/ShopsPage'));
const OrderPage = lazy(() => import('Pages/OrderPage/OrderPage'));
const ConfirmedOrerPage = lazy(() => import('Pages/ConfirmedOrerPage'));

export const App = () => {
  const [storesData, setstoresData] = useState(null);
  const { order, setOrder } = useContext(OrderContext)

  function orderCreator({ id, shop, name, price, imageUrl }) {
    if (order.length === 0) {
      const count = 1;
      setOrder([
        ...order,
        {
          id,
          shop,
          name,
          price,
          imageUrl,
          count: 1,
          totalPrice: price * count,
        },
      ]);
      Notiflix.Notify.success('Added to Card');
    } else {
      if (order[0].shop !== shop) {
        Notiflix.Notify.failure(
          'You can only have items from one store in your shopping cart at a time.'
        );
        return;
      }
      const existingItemInOrder = order.find(item => item.id === id);
      const idx = order.indexOf(existingItemInOrder);

      if (idx === -1) {
        const count = 1;
        setOrder([
          ...order,
          {
            id,
            shop,
            name,
            price,
            imageUrl,
            count: 1,
            totalPrice: price * count,
          },
        ]);
        Notiflix.Notify.success('Added to Card');
      } else {
        const newOrder = [...order];
        newOrder[idx].count += 1;
        newOrder[idx].totalPrice = newOrder[idx].count * newOrder[idx].price;
        Notiflix.Notify.success('Added to Card');
        setOrder(newOrder);
      }
    }
  }

  async function setResponsedData() {
    const { data } = await getAllProducts();
    setstoresData(data);
  }

  useEffect(() => {
    if (storesData !== null) {
      return;
    }

    setResponsedData();
  }, [storesData]);

  function onOrderInputChange(action, id) {
    const existingItemInOrder = order.find(item => item.id === id);
    const idx = order.indexOf(existingItemInOrder);

    if (action === 'increment') {
      const newOrder = [...order];
      newOrder[idx].count += 1;
      newOrder[idx].totalPrice = newOrder[idx].count * newOrder[idx].price;
      setOrder(newOrder);
      return;
    }

    if (action === 'decrement') {
      const newOrder = [...order];
      newOrder[idx].count -= 1;
      newOrder[idx].totalPrice = newOrder[idx].count * newOrder[idx].price;
      setOrder(newOrder);
      return;
    }
  }

  return (
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route
            index
            element={
              <ShopsPage storesData={storesData} orderCreator={orderCreator} />
            }
          />
          <Route
            path="order"
            element={
              <OrderPage
                order={order}
                setOrder={setOrder}
                onOrderInputChange={onOrderInputChange}
              />
            }
          />
          <Route
            path="order-confirm"
            element={<ConfirmedOrerPage setOrder={setOrder} />}
          />
        </Route>
      </Routes>
  );
};
