import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// redux
import { RootState } from 'types';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Avatar,
} from '@material-ui/core';

// eslint-disable-next-line
const useStyles = () => ({
  container: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
});

interface StateFromProps {}
interface DispatchFromProps {}
interface OwnProps {}
interface StyleProps {
  classes: any;
}

type Props = StateFromProps & DispatchFromProps & OwnProps & StyleProps;

export const AppHeader = ({
  classes,
}: Props) => {
  return (
    <div className={classes.container}>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h6'>San Francisco Movie Locations</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

AppHeader.prototype = {
  classes: PropTypes.object,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default withStyles(useStyles)(AppHeader);
