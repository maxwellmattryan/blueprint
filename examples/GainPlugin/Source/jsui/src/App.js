import Label from './Label';
import Meter from './Meter';
import React, { Component } from 'react';
import Slider from './Slider';
import {
  Image,
  View,
  Text,
  AnimatedView
} from 'juce-blueprint';


class App extends Component {
  render() {
    return (
      <View {...styles.container}>
        <AnimatedView {...styles.cell}><Text {...styles.label}>1</Text></AnimatedView>
        <AnimatedView {...styles.cell}><Text {...styles.label}>2</Text></AnimatedView>
        <AnimatedView {...styles.cell}><Text {...styles.label}>3</Text></AnimatedView>
        <AnimatedView {...styles.cell}><Text {...styles.label}>4</Text></AnimatedView>
        <AnimatedView {...styles.cell}><Text {...styles.label}>5</Text></AnimatedView>
        <AnimatedView {...styles.cell}><Text {...styles.label}>6</Text></AnimatedView>
        <AnimatedView {...styles.cell}><Text {...styles.label}>7</Text></AnimatedView>
        <AnimatedView {...styles.cell}><Text {...styles.label}>8</Text></AnimatedView>
        <AnimatedView {...styles.cell}><Text {...styles.label}>9</Text></AnimatedView>
        <AnimatedView {...styles.cell}><Text {...styles.label}>10</Text></AnimatedView>
        <AnimatedView {...styles.cell}><Text {...styles.label}>11</Text></AnimatedView>
        <AnimatedView {...styles.cell}><Text {...styles.label}>12</Text></AnimatedView>
      </View>
    );
  }
}

const styles = {
  container: {
    'display': 'grid',
    'width': '100%',
    'height': '100%',
    'background-color': 'ff17191f',
    'grid-template-columns': 'auto',
    'grid-template-rows': 'auto'
  },
  cell: {
    'width': 100,
    'height': 100,
    'flex': 0,
    'background-color': 'ffefefef',
    'justify-content': 'center',
    'align-items': 'center',
  },
  label: {
    'font-size': 24.0,
  },
};

export default App;
