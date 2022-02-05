import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Video } from 'expo-av';
import ponei from './assets/ponei.mp4';
import poneiStatic from './assets/ponei-static.jpg';
import estilos from './App.css'

export default function App() {
  const [date, setDate] = useState(new Date().toLocaleTimeString())

  function clock() {
    setDate(new Date().toLocaleTimeString())
  }

  useEffect(() => {
    setTimeout(() => {
      clock()
    }, 1000)
  })

  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Relógio ⏰</Text>
      <Text>{'\n'}</Text>
      <Text testID="clock" style={estilos.texto}>{date}</Text>
      <View style={estilos.videoViewStyle}>
        <Video
          source={ponei}
          style={estilos.video}
          rate={1.0}
          volume={1.0}
          useNativeControls
          isMuted={false}
          resizeMode="cover"
          isLooping
          posterSource={poneiStatic}
          posterStyle={estilos.posterStyle}
          usePoster
        />
      </View>
    </View>
  )
}