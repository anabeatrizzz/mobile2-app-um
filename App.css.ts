import { StyleSheet } from 'react-native';

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

  videoViewStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 1
  },

  video: {
    width: 200,
    height: 200
  },

  posterStyle: {
    width: 200,
    height: 200
  }
})

export default estilos