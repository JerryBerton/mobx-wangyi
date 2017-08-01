import { createStyleSheet } from 'material-ui/styles';
export const buttonClass = createStyleSheet('button', {
  root: {
    color: '#9E9E9E'
  },
  selected: {
    color: '#F3F3fF'
  }
})
export default createStyleSheet('layout', {
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    height: '56px',
    width: '100%',
    backgroundColor: '#B71C1C'
  },
  container: {
    flex: 1,
    padding: 20,
    background: '#f3f3f3',
    overflow: 'auto'
  },
  footer: {
    justifyContent: 'space-around',
    backgroundColor: '#212121'
  },
  buttonRoot: {
    color: '#9E9E9E'
  },
  buttonSelected: {
    color: '#F3F3fF'
  },
  music: {
    width: '100%',
    backgroundColor: '#424242'
  },
  flex: {
    flex: 1,
  },
})
