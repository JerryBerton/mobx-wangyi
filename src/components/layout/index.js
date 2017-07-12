
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import {withRouter} from 'react-router'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer
} from 'material-ui';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import MenuIcon from 'material-ui-icons/Menu';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import layoutStyles from 'styles/layout.js';
const routes = {
  0: '/recommend',
  1: '/test',
  2: '/mv'
}
@withRouter
@withStyles(layoutStyles)
class Layout extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      open: false
    }
  }
  handleChange = (record, index) => {
    const { history } = this.props;
    history.push(routes[index]);
    this.setState({ index })
  }
  handleOpenMusic = () => {
    this.setState({ open: true })
  }
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.header}>
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Music
            </Typography>
            <Button onClick={this.handleOpenMusic} color="contrast">音乐</Button>
          </Toolbar>
        </AppBar>
        <section className={classes.container}>
          {this.props.children}
        </section>
        <BottomNavigation
          index={this.state.index}
          className={classes.footer}
          onChange={this.handleChange}
          showLabels
        >
          <BottomNavigationButton  label="推荐音乐" icon={<RestoreIcon />} />
          <BottomNavigationButton  label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationButton  label="MV专辑" icon={<LocationOnIcon />} />
        </BottomNavigation>
        <Drawer
          classes={{
            paper: classes.music, // className, e.g. `OverridesClasses-root-X`
          }}
          open={this.state.open}
          onRequestClose={this.handleLeftClose}
          onClick={this.handleLeftClose}
        >
          <AppBar position="static">
            <Toolbar>
             <IconButton color="contrast" aria-label="Menu">
               <MenuIcon />
             </IconButton>
             <Typography type="title" color="inherit" className={classes.flex}>
               Title
             </Typography>
             <Button color="contrast">Login</Button>
          </Toolbar>
          </AppBar>
      </Drawer>
      </div>
    );
  }
}

export default Layout;
