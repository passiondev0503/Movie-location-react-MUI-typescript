import React, { useRef, useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import {
  Paper,
  Grid,
} from '@material-ui/core';
import { ApartmentsMap } from 'components';
import moment from 'moment';

// redux
import { RootState } from 'types';
import { selectApartmentList, selectApartmentError } from 'store/apartment/apartmentSelector';

// eslint-disable-next-line
const useStyles = (window: any) => ({
  container: {
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
  table: {
  },
  tableHeader: {
    background: `rgba(0, 0, 0, 0.15)`,
  },
  tableHeaderRow: {
    height: 60,
  },
  tableHeaderCell: {
    fontSize: 15,
  },
  tableBodyFont: {
  },
  button: {
    fontSize: 12,
  },
  descCol: {
    width: '15%',
  },
});

interface StateFromProps {
  list: ReturnType<typeof selectApartmentList>;
  error: ReturnType<typeof selectApartmentError>;
}
interface DispatchFromProps {
}
interface OwnProps {}
interface StyleProps {
  classes: any;
}

type Props = StateFromProps & DispatchFromProps & OwnProps & StyleProps;

export const ApartmentsTable = ({
  list,
  error,
  classes,
}: Props) => {
  const [ filteredList, setFilteredList ] = useState<Array<any>>([]);
  React.useEffect(() => {
    setFilteredList(list);
  }, [list]);
  const handleSearchChange = (text: string) => {
    const updatedList = list.filter((x: any) => {
      if (!x.title) { return true; }
      return x.title.includes(text);
    })!;
    setFilteredList(updatedList);
  };
  return (
    <React.Fragment>
      <div className={classes.topContainer}>
        <ApartmentsMap list={filteredList} />
      </div>

      <div className={classes.bottomContainer}>
        <div className={classes.bottomWrapper}>
          <Grid>
            <Paper>
              <MaterialTable
                title='Location Table'
                columns={[
                  { title: 'Title', field: 'title' },
                  { title: 'Release Year', field: 'release_year' },
                  { title: 'Locations', field: 'locations' },
                  { title: 'Fun Facts', field: 'fun_facts' },
                  { title: 'Distributor', field: 'distributor' },
                  { title: 'Writer', field: 'writer' },
                  { title: 'Actor 1', field: 'actor_1' },
                  { title: 'Actor 2', field: 'actor_2' },
                  { title: 'Actor 3', field: 'actor_2' },
                ]}
                data={filteredList}
                onSearchChange={handleSearchChange}
              />
            </Paper>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

function mapStateToProps(
  state: RootState,
): StateFromProps {
  return {
    list: selectApartmentList(state),
    error: selectApartmentError(state),
  };
}
function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(useStyles)(ApartmentsTable));
