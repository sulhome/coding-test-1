import React, {useState} from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Obstruction from 'obstruction';
import AppHeader from '../components/AppHeader';
import AppDrawer from '../components/AppDrawer';
import ResizeHandler from '../components/ResizeHandler';
import DriversActivityList from './DriversActivityList';

const styles = (theme) => ({
  base: {},
  window: {
    background: 'linear-gradient(180deg, #1D2225 0%, #16181A 100%)',
    display: 'flex',
    flexDirection: 'column',
  },
});

function FleetManager(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const {classes} = props;
  const sidebarWidth = Math.max(280, windowWidth * 0.2);
  let drawerStyles = {
    minHeight: `calc(100vh - ${111}px)`,
  };
  let containerStyles = {
    marginLeft: `${sidebarWidth}px`,
    color: 'white',
  };
  return (
    <div className={classes.base}>
      <ResizeHandler onResize={(windowWidth) => setWindowWidth(windowWidth)}/>
      <AppHeader drawerIsOpen={false} annotating={true} showDrawerButton={false}/>
      <AppDrawer drawerIsOpen={false} isPermanent={true} width={sidebarWidth}
                 style={drawerStyles}/>
      <div className={classes.window} style={containerStyles}>
        <DriversActivityList/>
      </div>

    </div>
  );
}

const stateToProps = Obstruction({
  pathname: 'router.location.pathname'
});

export default connect(stateToProps)(withStyles(styles)(FleetManager));
