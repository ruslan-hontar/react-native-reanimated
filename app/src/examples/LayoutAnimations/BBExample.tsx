import { Button, StyleSheet, View } from 'react-native';
import Animated, {
  BounceIn,
  FadeInRight,
  FadeInUp,
  FadeOutLeft,
  LinearTransition,
  RotateOutDownLeft,
} from 'react-native-reanimated';
import React from 'react';

export default function EmptyExample() {
  const [show, setShow] = React.useState(true);
  const [show2, setShow2] = React.useState(false);
  const [refresher, setRefresher] = React.useState(false);

  return (
    <View style={styles.container}>
      <Button title="toggle" onPress={() => setShow(!show)} />
      <Button title="toggle" onPress={() => setShow2(!show2)} />
      {show && (
        <Animated.View
          onTouchStart={() => setShow(!show)}
          entering={BounceIn}
          layout={LinearTransition}
          style={styles.box}
          exiting={FadeOutLeft.duration(1000)}>
          <Animated.View
            style={styles.innerBox}
            exiting={RotateOutDownLeft.duration(2000)}
            entering={FadeInRight.delay(500)}
          />
        </Animated.View>
      )}
      {show2 && (
        <Animated.View
          entering={FadeInUp}
          layout={LinearTransition.duration(2000)}
          exiting={RotateOutDownLeft}
          onTouchStart={() => setRefresher(!refresher)}
          style={[styles.refresher, { width: show ? 200 : 100 }]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 200,
    backgroundColor: 'pink',
    // justifyContent: 'center',
  },
  box: {
    marginTop: 10,
    width: 200,
    height: 100,
    backgroundColor: 'tomato',
  },
  innerBox: {
    marginTop: 10,
    width: 100,
    height: 50,
    backgroundColor: 'green',
  },
  refresher: {
    marginTop: 10,
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    // opacity: 0.5,
  },
});
