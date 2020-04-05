import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import IconMi from 'react-native-vector-icons/MaterialIcons';

import * as ActionsCart from '../../store/modules/cart/actions';
import * as ActionsProducts from '../../store/modules/products/actions';
import api from '../../services/api';
import { formatedPrice } from '../../util/priceformat';

import {
  Container,
  ImageProduct,
  BoxText,
  TextProduct,
  TextPrice,
  ButtonHome,
  TextButton,
  LoadingCircle,
  BoxCountIcon,
  TextCount,
  LoadingImage,
  LoadingTitle,
  LoadingPrice,
  LoadingiButton,
} from './styles';

export default function Home() {
  const fake = [1, 2, 3];
  const [visible, setVisible] = useState(false);
  const dispacth = useDispatch();

  const product = useSelector((state) => state.products);
  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, item) => {
      sumAmount[item.id] = item.amount;
      return sumAmount;
    }, {})
  );

  useEffect(() => {
    async function loadData() {
      const response = await api.get('products');
      const data = response.data.map((value) => ({
        ...value,
        formatedPrice: formatedPrice(value.price),
        loading: false,
      }));
      dispacth(ActionsProducts.getProducts(data));
    }
    setTimeout(() => {
      loadData();
      setVisible(true);
    }, 2000);
  }, []);

  function handleItem(id) {
    dispacth(ActionsCart.addCartRequest(id));
  }

  return !visible ? (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={fake}
      keyExtractor={(item) => item}
      renderItem={() => (
        <Container>
          <LoadingImage autoRun visible={visible} />
          <BoxText>
            <LoadingTitle autoRun visible={visible} />
            <LoadingPrice autoRun visible={visible} />
          </BoxText>
          <LoadingiButton autoRun visible={visible} />
        </Container>
      )}
    />
  ) : (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={product}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Container>
          <ImageProduct source={{ uri: item.image }} />
          <BoxText>
            <TextProduct>{item.title}</TextProduct>
            <TextPrice>{item.formatedPrice}</TextPrice>
          </BoxText>
          <ButtonHome onPress={() => handleItem(item.id)}>
            <BoxCountIcon>
              <IconMi name="add-shopping-cart" color="#fff" size={18} />
              <TextCount>{amount[item.id] || '0'}</TextCount>
            </BoxCountIcon>
            {item.loading ? (
              <LoadingCircle size={42} color="#fff" />
            ) : (
              <TextButton>ADICIONAR</TextButton>
            )}
          </ButtonHome>
        </Container>
      )}
    />
  );
}
