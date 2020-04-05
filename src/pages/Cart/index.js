import React from 'react';
import { View } from 'react-native';
import IconMi from 'react-native-vector-icons/MaterialIcons';
import IconMc from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { formatedPrice } from '../../util/priceformat';
import * as ActionCart from '../../store/modules/cart/actions';

import {
  Container,
  BoxProduct,
  ImgProduct,
  BoxText,
  TextProduct,
  TextProductPrice,
  ClickRemoveOpacity,
  BoxCount,
  ClickOpacityControls,
  Input,
  TextSubPrice,
  BoxTotal,
  TextTotal,
  TextTotalPrice,
  Button,
  TextButton,
  ContainerEmpty,
  TextEmpty,
  ButtonEmpty,
} from './styles';

export default function Cart() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const product = useSelector((state) =>
    state.cart.map((itens) => ({
      ...itens,
      subTotal: formatedPrice(itens.price * itens.amount),
    }))
  );

  const total = useSelector((state) =>
    formatedPrice(
      state.cart.reduce((sumTotal, itens) => {
        return sumTotal + itens.price * itens.amount;
      }, 0)
    )
  );

  function incremenet(item) {
    dispatch(ActionCart.updateAmountRequest(item.id, item.amount + 1));
  }
  function decrement(item) {
    dispatch(ActionCart.updateAmountRequest(item.id, item.amount - 1));
  }

  function deleteItem(id) {
    dispatch(ActionCart.removeItem(id));
  }
  return (
    <>
      {product.length > 0 ? (
        <Container>
          {product.map((item) => (
            <View style={{ marginTop: 10 }} key={item.title}>
              <BoxProduct>
                <ImgProduct source={{ uri: item.image }} />
                <BoxText>
                  <TextProduct>{item.title}</TextProduct>
                  <TextProductPrice>{item.formatedPrice}</TextProductPrice>
                </BoxText>
                <ClickRemoveOpacity onPress={() => deleteItem(item.id)}>
                  <IconMi name="delete-forever" size={24} color="#7159c1" />
                </ClickRemoveOpacity>
              </BoxProduct>
              <BoxCount>
                <ClickOpacityControls onPress={() => decrement(item)}>
                  <IconMi
                    name="remove-circle-outline"
                    size={20}
                    color="#7159c1"
                  />
                </ClickOpacityControls>
                <Input value={String(item.amount)} />
                <ClickOpacityControls onPress={() => incremenet(item)}>
                  <IconMi name="add-circle-outline" size={20} color="#7159c1" />
                </ClickOpacityControls>
                <TextSubPrice>{item.subTotal}</TextSubPrice>
              </BoxCount>
            </View>
          ))}
          <BoxTotal>
            <TextTotal>TOTAL</TextTotal>
            <TextTotalPrice>{total}</TextTotalPrice>
          </BoxTotal>
          <Button>
            <TextButton>FINALIZAR PEDIDO</TextButton>
          </Button>
        </Container>
      ) : (
        <ContainerEmpty>
          <IconMc name="cart-outline" size={200} color="#fff" />
          <TextEmpty>Carrinho vazio</TextEmpty>
          <ButtonEmpty onPress={() => navigation.goBack()}>
            <IconMi name="arrow-back" size={42} color="#fff" />
          </ButtonEmpty>
        </ContainerEmpty>
      )}
    </>
  );
}
