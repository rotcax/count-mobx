import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';

@inject('counter')
@observer
export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Increment"
          onPress={() => this.props.counter.increment()}
          color="red"
        />
          <Text style={styles.separation}>{this.props.counter.count}</Text>
        <Button
          title="Decrement"
          onPress={() => this.props.counter.decrement()}
          color="red"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  separation: {
    marginVertical: 10 
  }
});
