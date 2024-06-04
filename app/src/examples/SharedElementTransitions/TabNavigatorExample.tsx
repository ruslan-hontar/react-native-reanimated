import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Animated from 'react-native-reanimated';

function getStyle(index: number) {
  if (index === 0) {
    return styles.box1;
  } else if (index === 1) {
    return styles.box2;
  }
  return styles.box3;
}

const Screen = ({ navigation, route }) => {
  console.log('Screen', route);
  const id = route.params?.id ?? 0;
  const showButtons = !!route.params?.showButtons;
  return (
    <View style={{ ...styles.container }}>
      <Text>Current id: {id}</Text>
      {showButtons && id < 3 && (
        <Button
          title={`Go next ${id + 1}`}
          onPress={() => navigation.push('Details', { id: id + 1 })}
        />
      )}
      {showButtons && id > 0 && (
        <Button
          onPress={() => navigation.push('Details', { id: id - 1 })}
          title={`Go next ${id - 1}`}
        />
      )}
      <Animated.View style={getStyle(id)} sharedTransitionTag="test" />
    </View>
  );
};

const createStack = (name: string) => {
  const Stack = createNativeStackNavigator();
  return () => (
    <Stack.Navigator>
      <Stack.Screen 
        name={"Details"}
        initialParams={{ showButtons: true }}
        component={Screen}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const StackA = createStack("Stack A");
const StackB = createStack("Stack B");

const TabNavigatorExample = (): JSX.Element => (
  <Tab.Navigator screenOptions={{ headerShown: false }} >
    <Tab.Screen
      name="A"
      initialParams={{ id: 0 }}
      component={Screen}
    />
    <Tab.Screen
      name="B"
      initialParams={{ id: 1 }}
      component={Screen}
    />
    <Tab.Screen name="C" component={StackA} />
    <Tab.Screen name="D" component={StackB} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  box2: {
    width: 200,
    height: 100,
    backgroundColor: 'blue',
  },
  box3: {
    width: 150,
    height: 250,
    backgroundColor: 'red',
    marginLeft: 50,
  },
  box4: {
    width: 200,
    height: 300,
    backgroundColor: 'black',
  },
});

export default TabNavigatorExample;
