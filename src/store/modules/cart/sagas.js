import { select, put, call, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { formatedPrice } from '../../../util/priceformat';

import api from '../../../services/api';
import { navigate } from '../../../util/NavigationService';

import { addCartSuccess, updateAmountSuccess } from './actions';
import { setStatusInLoading } from '../products/actions';

function* addCart({ id }) {
  yield put(setStatusInLoading(id, true));

  const itemExists = yield select((state) =>
    state.cart.find((item) => item.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const amountStock = stock.data.amount;
  const valueAmount = itemExists ? itemExists.amount : 0;

  const amount = valueAmount + 1;

  if (amount > amountStock) {
    yield put(setStatusInLoading(id, false));
    Alert.alert('Quantidade acima do limite em estoque');
    return;
  }

  if (itemExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      formatedPrice: formatedPrice(response.data.price),
    };

    yield put(addCartSuccess(data));
    navigate('Cart');
  }

  yield put(setStatusInLoading(id, false));
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const amountStock = stock.data.amount;

  if (amount > amountStock) {
    Alert.alert('Quantidade acima do limite em estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_CART_REQUEST', addCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
