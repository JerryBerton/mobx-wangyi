import { createStyleSheet } from 'material-ui/styles';
export default createStyleSheet('layout',
 {
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    height: '56px',
    width: '100%',
    backgroundColor: '#2196f3'
  },
  container: {
    flex: 1,
    padding: 20,
    background: '#f3f3f3',
    overflow: 'auto'
  },
  footer: {
    justifyContent: 'space-around',
    backgroundColor: '#2196f3'
  },
  music: {
    width: '100%',
    backgroundColor: '#424242'
  },
  flex: {
    flex: 1,
  },
})
