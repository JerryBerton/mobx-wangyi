import React from 'react';
import { observer, inject} from 'mobx-react';
import List, {
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    ListSubheader
  } from 'material-ui/List';


import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Switch from 'material-ui/Switch';
import TextField from 'material-ui/TextField';

import WifiIcon from 'material-ui-icons/Wifi';
import BluetoothIcon from 'material-ui-icons/Bluetooth';
import { withStyles } from 'material-ui/styles';

import TestStyles from 'styles/test';

@withStyles(TestStyles)
@inject('todoStore')
@observer
class TextComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleBlur(e)  {
    const { todoStore } = this.props;
    todoStore.addTodo(e.target.value);
  }
  render() {
    const classes = this.props.classes;
    const { todos, todosCount, todosDisabledCount} = this.props.todoStore;
    return (
      <div >
        <Paper className={classes.form} elevation={4}>
           <Typography type="body1" component="p">
             <TextField
               id="placeholder"
               label="Label"
               type="text"
               InputProps={{ placeholder: 'Placeholder' }}
               fullWidth
               marginForm
               inputRef={input => this.input}
               onBlur={this.handleBlur}
             />
           </Typography>
         </Paper>
         <List className={classes.root} subheader={<ListSubheader>列表</ListSubheader>}>
         {
           todos.map((item, idx) => (
             <ListItem key={idx}>
               <ListItemIcon>
                 <WifiIcon />
               </ListItemIcon>
               <ListItemText primary={item.title} />
               <ListItemSecondaryAction>
                 <Switch />
               </ListItemSecondaryAction>
             </ListItem>
           ))
         }
         </List>
      </div>
    );
  }
}

export default TextComponent;
