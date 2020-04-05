import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import { darken } from 'polished';
import { RectButton } from 'react-native-gesture-handler';
import Shimmer from 'react-native-shimmer-placeholder';

export const Container = styled.View`
  background: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin: 4px 20px 10px 20px;
  padding: 20px;
`;
export const ImageProduct = styled.Image`
  width: 200px;
  height: 200px;
`;
export const BoxText = styled.View`
  margin-top: 5px;
  align-self: flex-start;
`;
export const TextProduct = styled.Text`
  font-size: 18px;
  line-height: 20px;
  color: #333;
`;
export const TextPrice = styled.Text`
  font-size: 24px;
  margin: 14px 0;
  font-weight: bold;
`;

export const ButtonHome = styled(RectButton)`
  background: #7159c1;
  margin-top: auto;
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
`;

export const BoxCountIcon = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background: ${darken(0.03, '#7159c1')};
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 18px;
  transform: translateX(-20px);

  flex: 1;
  text-align: center;
  font-weight: bold;
`;
export const TextCount = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 5px;
`;

export const LoadingCircle = styled(ActivityIndicator)`
  transform: translateX(-20px);
  flex: 1;
`;
/* Loading components  */
export const LoadingImage = styled(Shimmer)`
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;
export const LoadingTitle = styled(Shimmer)`
  width: 390px;
  height: 30px;
  margin-top: 5px;
`;
export const LoadingPrice = styled(Shimmer)`
  width: 110px;
  height: 30px;
  margin: 14px 0;
`;
export const LoadingiButton = styled(Shimmer)`
  width: 400px;
  height: 52px;
  border-radius: 4px;
  margin-top: auto;
`;
