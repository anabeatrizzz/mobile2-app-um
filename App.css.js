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

  videoStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 1
  }
})

export default estilos