import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import Station from '../constants/Station'

const styles = StyleSheet.create({
  stations: {
    flex: 1
  },
  view: {
    height: 50
  },
  text: {
    color: 'white'
  },
  selectedText: {
    color: 'yellow' // TODO
  }
});

const StationPicker = ({ selectedStation, onSelect }) => {
  const stations = Object.keys(Station);
  return (
    <View style={styles.stations}>
      {stations.map((value) => {
        return (
          <StationItem
            key={value}
            value={value}
            isSelected={value === selectedStation}
            onSelect={onSelect}
          />
        );
      })}
    </View>
  );
};

const StationItem = ({ value, isSelected, onSelect }) => {
  const station = Station[value];

  const viewStyle = isSelected ? [styles.view, styles.selected] : [styles.view];
  const textStyle = isSelected ? [styles.text, styles.selectedText] : [styles.text];

  return (
    <TouchableHighlight key={value} onPress={() => onSelect(station)}>
      <View style={viewStyle}>
        <Text style={textStyle}>{station.name}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default StationPicker;
