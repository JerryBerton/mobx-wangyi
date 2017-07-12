import { createStyleSheet } from 'material-ui/styles'
export default createStyleSheet('recommend',
 {
  root: {
     display: 'flex',
     flexWrap: 'wrap',
     justifyContent: 'space-between'
  },
  item: {
    flex: '0 0 30%',
    marginBottom: 16
  },
  content: {
    padding: 4,
    '&:last-child': {
      paddingBottom: 6,
    },
  }
})
