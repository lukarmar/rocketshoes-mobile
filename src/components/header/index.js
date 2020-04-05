import React from 'react';
import IconMi from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { Container, ImageHeader, TouchIcon, TextCount } from './styles';

export default function Header() {
  const cartSize = useSelector((state) => state.cart.length);
  const navigation = useNavigation();

  return (
    <Container>
      <ImageHeader />
      <TouchIcon onPress={() => navigation.navigate('Cart')}>
        <IconMi name="shopping-basket" size={32} color="#fff" />
        <TextCount>{cartSize}</TextCount>
      </TouchIcon>
    </Container>
  );
}
