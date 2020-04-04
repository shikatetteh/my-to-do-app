import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function SandBox() {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.boxOne}>One</Text>
        <Text style={styles.boxTwo}>Two</Text>
        <Text style={styles.boxThree}>Three</Text>
        <Text style={styles.boxFour}>Four</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    JustifyContent: 'space-around',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#ddd'
  },
  boxOne: {
    backgroundColor: 'violet',
    padding: 10
  },
  boxTwo: {
    backgroundColor: 'gold',
    padding: 10
  },
  boxThree: {
    backgroundColor: 'coral',
    padding: 10
  },
  boxFour: {
    backgroundColor: 'skyblue',
    padding: 10
  }
});
