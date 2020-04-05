import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/header';
import Home from './pages/Home';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="float"
      screenOptions={{
        cardStyle: { backgroundColor: '#7159c1' },
        header: (navigation) => <Header {...navigation} />,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={
          {}

          // { header: (props) => <Header {...props} /> })
        }
        // options={{ headerTitle: (props) => <Header {...props} /> }}
      />
      <Stack.Screen name="Cart" component={Cart} options={{}} />
    </Stack.Navigator>
  );
}
