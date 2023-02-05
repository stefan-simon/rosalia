import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const COLORS = [
  '#ff0000', '#00ff00', '#0000ff',
  '#ffff00', '#00ffff', '#ff00ff',
];

class ExampleScreen extends Component {
  handlePress = (index) => {
    console.log(`Rectangle ${index + 1} pressed`);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.rectangle, { backgroundColor: COLORS[0] }]}
            onPress={() => this.handlePress(0)}
          />
          <TouchableOpacity
            style={[styles.rectangle, { backgroundColor: COLORS[1] }]}
            onPress={() => this.handlePress(1)}
          />
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.rectangle, { backgroundColor: COLORS[2] }]}
            onPress={() => this.handlePress(2)}
          />
          <TouchableOpacity
            style={[styles.rectangle, { backgroundColor: COLORS[3] }]}
            onPress={() => this.handlePress(3)}
          />
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.rectangle, { backgroundColor: COLORS[4] }]}
            onPress={() => this.handlePress(4)}
          />
          <TouchableOpacity
            style={[styles.rectangle, { backgroundColor: COLORS[5] }]}
            onPress={() => this.handlePress(5)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  rectangle: {
    width: '50%',
    aspectRatio: 1,
    backgroundColor: '#000',
  },
});

export default ExampleScreen;
