import styled from 'styled-components/native';

import logo from '../../assets/image/logo.png';

export const Container = styled.View`
  background: #000;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`;
export const ImageHeader = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 200px;
  height: 26px;
`;

export const TouchIcon = styled.TouchableOpacity`
  height: 26px;
`;

export const TextCount = styled.Text`
  position: absolute;
  text-align: center;
  width: 18px;
  height: 18px;
  background: #7159c1;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  left: 22px;
  font-family: sans-serif;
  overflow: hidden;
  border-radius: 9px;
`;
