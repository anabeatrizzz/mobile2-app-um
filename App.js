import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { Video } from 'expo-av';
import ponei from './assets/ponei.mp4';
import poneiStatic from './assets/ponei-static.jpg';

export default class App extends React.Component {
  // Método construtor
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString()
    };
  }

  // Método
  relogio(){
    this.setState({
      date: new Date().toLocaleTimeString()
    });
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.relogio(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  render(){
    return(
      <View style={estilos.container}>
        <Text style={estilos.texto}>Relógio ⏰</Text>
        <Text>{'\n'}</Text>
        <Text style={estilos.texto}>{this.state.date}</Text>
        <View style={estilos.videoStyle}>
        <Video
          source={ponei}
          style={{ width: 200, height: 200 }}
          rate={1.0}
          volume={1.0}
          useNativeControls
          isMuted={false}
          resizeMode="cover"
          isLooping
          posterSource={poneiStatic}
          posterStyle={{ width: 200, height: 200 }}
          usePoster
        />
        </View>
      </View>
    )
  }
}

const estilos = StyleSheet.create({
  container: {
    flex:  1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    fontSize: 60,
    width: '100%',
    textAlign: 'center'
  },

  videoStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 1
  }
})