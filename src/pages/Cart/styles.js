import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 12px;
  margin: 5px 20px 10px 20px;

  justify-content: center;
`;

export const ContainerEmpty = styled.View`
  background: #7159c1;
  margin: 0 80px;
  padding-bottom: 70px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextEmpty = styled.Text`
  color: #fff;
  font-size: 38;
  font-weight: bold;
`;

export const ButtonEmpty = styled(RectButton)`
  padding: 10px 10px;
`;

export const BoxProduct = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImgProduct = styled.Image`
  height: 80px;
  width: 80px;
`;

export const BoxText = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;
export const TextProduct = styled.Text`
  font-size: 18px;
  line-height: 20px;
  color: #333;
`;
export const TextProductPrice = styled.Text`
  font-size: 18px;
  margin-top: 5px;
  font-weight: bold;
`;

export const ClickRemoveOpacity = styled.TouchableOpacity`
  padding: 4px;
`;
export const BoxCount = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
`;
export const BoxInput = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ClickOpacityControls = styled.TouchableOpacity``;
export const Input = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 0 10px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;
export const TextSubPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
`;

export const BoxTotal = styled.View`
  margin-top: 30px;
`;
export const TextTotal = styled.Text`
  text-align: center;
  color: #999;
  font-weight: bold;
`;
export const TextTotalPrice = styled.Text`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: bold;
`;
export const Button = styled(RectButton)`
  background: #7159c1;
  padding: 12px;
  border-radius: 4px;
`;
export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;
