import { OrderProducts, TotalResult } from 'components';
import { StyledForm, UserDataWrapper, StyledInput } from './OrderPage.styled';
import { Formik } from 'formik';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendOrder } from 'API/OrdersAPI';
import { MapContainer } from 'components/Map/Map';
import { AddressContext } from 'utils/context';
import Notiflix from 'notiflix';

export default function OrderPage({ order, setOrder, onOrderInputChange }) {
  const navigate = useNavigate();
  const [total, setTotal] = useState(null);
  const { address } = useContext(AddressContext);
 
  function totalAmountCalculation(data) {
    return data.reduce((count, item) => (count += item.totalPrice), 0);
  }
  useEffect(() => {
    totalAmountCalculation(order);
    setTotal(totalAmountCalculation(order));
  }, [order]);

  async function onFormSubmit({ userName, email, phone }, { resetForm }) {
    const userData = {
      name: userName,
      email,
      phone,
      address,
      totalPrice: totalAmountCalculation(order),
      userOrder: order,
    };

    try {
      const response = await sendOrder(userData);

      if (response.status === 200) {
        setOrder([]);
        resetForm();
        navigate('/order-confirm');
        return;
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      Notiflix.Notify.failure(`${error}`);
    }
  }

  return (
    <>
      <MapContainer />
      <Formik
        initialValues={{ userName: '', email: '', phone: '', address: '' }}
        onSubmit={onFormSubmit}
      >
        <StyledForm>
          <div style={{ display: 'flex', alignItems:'flex-end' }}>
            <UserDataWrapper>
              <label>
                Name:
                <StyledInput type="text" name="userName" />
              </label>

              <label>
                Email:
                <StyledInput type="email" name="email" />
              </label>

              <label>
                Phone:
                <StyledInput type="tel" name="phone" />
              </label>

              <label>
                address:
                <StyledInput
                  type="text"
                  name="address"
                  value={address}
                />
              </label>
            </UserDataWrapper>

            <OrderProducts
              order={order}
              setOrder={setOrder}
              onOrderInputChange={onOrderInputChange}
            />
          </div>

          <TotalResult total={total} />
        </StyledForm>
      </Formik>
    </>
  );
}
