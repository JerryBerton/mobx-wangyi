
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import {withRouter} from 'react-router'
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer } from 'material-ui';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import MenuIcon from 'material-ui-icons/Menu';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import layoutStyles, { buttonClass } from 'styles/layout.js';
const routes = {
  0: '/recommend',
  1: '/test',
  2: '/mv'
}
import PlayerBox from 'components/player/';

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
  handleBackClick = () => {
    this.setState({ open: false })
  }
  render() {
    const classes = this.props.classes;
    console.log('111', buttonClass)
    const buttonClasses = {
      root: classes.buttonRoot,
      selected: classes.buttonSelected
    }
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
          <BottomNavigationButton classes={buttonClasses} label="推荐音乐" icon={<RestoreIcon />} />
          <BottomNavigationButton classes={buttonClasses} label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationButton classes={buttonClasses} label="MV专辑" icon={<LocationOnIcon />} />
        </BottomNavigation>
        <PlayerBox
          onBackClick={this.handleBackClick}
          visable={this.state.open} />
      </div>
    );
  }
}

export default Layout;
