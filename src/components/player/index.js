import React from 'react';
import { observer, inject} from 'mobx-react';

import { withStyles } from 'material-ui/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer
} from 'material-ui';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ScreenShareIcon from 'material-ui-icons/ScreenShare';
<i class="material-icons"></i>
import playerStyles from 'styles/player';

@withStyles(playerStyles)
// @inject('mv')
@observer
class Song extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    // const { mv } = this.props;
    // mv.fetchList();
  }
  handleBackClick = () => {
    if (this.props.onBackClick) {
      this.props.onBackClick();
    }
  }
  render() {
    const { mv, classes, visable} = this.props;
    return (
      <Drawer
        classes={{
          paper: classes.music, // className, e.g. `OverridesClasses-root-X`
        }}
        open={visable}
        onRequestClose={this.handleLeftClose}
        onClick={this.handleLeftClose}
      >
        <AppBar position="static">
          <Toolbar>
           <IconButton color="contrast" aria-label="back">
             <ChevronLeftIcon onClick={this.handleBackClick}/>
           </IconButton>
           <IconButton color="contrast" aria-label="share">
             <ScreenShareIcon />
           </IconButton>
        </Toolbar>
        </AppBar>
    </Drawer>
    );
  }
}


export default Song;
