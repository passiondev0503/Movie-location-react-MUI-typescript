import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// components
import { ApartmentsTable, AppHeader, ApartmentsMap } from 'components';
import { getApartmentList } from 'store/apartment/apartmentActions';

import { theme } from 'utils';
import {
  Grid,
  Button,
} from '@material-ui/core';

// eslint-disable-next-line
const useStyles = (window: any) => ({
  container: {
    backgroundColor: theme.palette.primary[0],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  topContainer: {
    width: '70%',
    marginBottom: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    [window.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  bottomWrapper: {
    width: '70%',
    [window.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  button: {
    marginTop: theme.spacing.unit,
    fontSize: 18,
    fontWeight: 700,
  },
  filterContainer: {
    marginBottom: theme.spacing.unit,
  },
  usersTableContainer: {
    marginTop: theme.spacing.unit * 2,
  },
});

interface StateFromProps {}
interface DispatchFromProps {
  getApartmentList: typeof getApartmentList;
}
interface OwnProps {}
interface StyleProps {
  classes: any;
}

type Props = StateFromProps & DispatchFromProps & OwnProps & StyleProps;

export const AppComposition = ({
  classes,
  getApartmentList,
}: Props) => {

  useEffect(() => {
    getApartmentList();
  }, []);

  return (
      <div>
        <AppHeader />
        <div className={classes.container}>
          <ApartmentsTable />
        </div>
      </div>
  );
};

function mapStateToProps(
  state: any,
): StateFromProps {
  return {};
}
function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
  return {
    getApartmentList: () => dispatch(getApartmentList()),
  };
}

AppComposition.prototype = {
  classes: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(useStyles)(AppComposition));
