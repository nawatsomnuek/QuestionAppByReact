/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Button } from 'react-native';
import { questions } from './Question';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ranQuestion: [],
      selectedAnswer: [],
      isAnswer: false,
    }
  }

  componentDidMount() {
    this.randomQuestion();
  }

  shuffleArrayQustions(array) {
    for (var i = 0; i < array.length - 1; i++) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
    }
    return array;
  }

  randomQuestion() {
    let qu = this.shuffleArrayQustions(questions.sample);
    // reset answer was selected
    qu.map((q) => {
      q.seleted = -1;
    });
    this.setState({ isAnswer: false, ranQuestion: qu.slice(0, 10) });
  }

  renderQuestions = () => {
    let listQuestion = this.state.ranQuestion.map((ques, idx) => {
      return (
        <View>
          <Question title={ques.title} index={idx} />
          <View>
            {this.renderAnswer(idx, ques.answer, ques.seleted)}
          </View>
        </View>
      );
    })
    return listQuestion;
  }

  renderAnswer = (quesIdx, answers, seleted) => {
    let listAnswer = answers.map((answer, idx) => {
      return (
        <TouchableOpacity key={`ans-${idx}`} onPress={() => this.questionAClick(quesIdx, idx)}>
          <View style={{ padding: 10 }}>
            <Text style={{ color: answer.result && this.state.isanswered ? 'green' : 'black' }}>[{seleted == idx ? 'X' : ' '}]{answer.title}</Text>
          </View>
        </TouchableOpacity>
      )
    });
    return listAnswer;
  }

  questionAClick(quesIdx, ansIdx) {
    this.state.ranQuestion[quesIdx].seleted = ansIdx;
    this.setState({
      ...this.state.ranQuestion, [quesIdx]: this.state.ranQuestion[quesIdx]
    });
  }

  submitAnswers(){
    let countAns = 10;
    let countPoint = 0;

    this.state.ranQuestion.map((question) => {
      if(question.seleted !=  -1){
        countAns--;
      }
      rs = question.answer[question.seleted];
      if(rs != undefined){
        if(question.answer[question.seleted].result == true){
          countPoint++;
        }
      }
    });

    if(countAns == 0){
      alert(`คุณทำได้ ${countPoint} คะแนน`);
      this.setState({ isanswer: true });
    } else {
      alert(`กรุณาทำให้ครบทุกข้อ
เหลืออีก ${countAns} ข้อ` );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>10 Question</Text>
        </View>
        <Button title={'reset question'} onPress={this.randomQuestion.bind(this)} />
        <ScrollView>
          <View>
            {this.renderQuestions()}
          </View>
          <Button title={'submit answer'} onPress={this.submitAnswers.bind(this)} />
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
  render() {
    return (
      <View>
        <Text>{this.props.index + 1}). {this.props.title}</Text>
      </View>
    );
  }
}