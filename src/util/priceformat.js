import numeral from 'numeral';
import 'numeral/locales/pt-br';

numeral.locale('pt-br');

export function formatedPrice(value) {
  return `R$ ${numeral(value).format('0,0.00')}`;
}
