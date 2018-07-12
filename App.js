/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import { questions } from './Question';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  shuffleArrayQustions(array) {
    for (var i = 0; i <= array.length - 1; i++) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
    }
    return array;
  }

  radnomQuestion(){

  }

  renderQuestions = () => {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>10 Question</Text>
        </View>
        <ScrollView>
          <View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    paddingTop: 40,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class Question extends Component {
  render(){
    return (
      <View>
        <Text>{this.props.index+1}). {this.props.title}</Text>
      </View>
    );
  }
}