import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Notification from '../../common/Notification';
import Button from '@material-ui/core/Button';
import ConfirmDelete from '../../common/ConfirmDelete';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import format from 'string-format';
import PageBase from '../PageBase';
import CustomTableCell from './components/CustomTableCell';
import { projectdata } from './mock';
import styles from './style';
import routes from '../../constants/routes.contants';
import ManageProjectInfo from '../../pages/ManageProjectInfo';

// const CustomTableCell = withStyles(theme => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const styles = theme => ({
//   row: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.background.default,
//     },
//   },
//   button: {
//     margin: theme.spacing.unit,
//   }
// });

export class OrderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      deleteRecord: false,
      id: '',
      pgNo: 1,
      pageSize: 10,
      notify: false,
      message: '',
      error: false,
    };
    this.deleteProjectInfo = this.deleteProjectInfo.bind(this);
    this.deleteAfterConfirmation = this.deleteAfterConfirmation.bind(this);
    this.editProjectInfo = this.editProjectInfo.bind(this);
    this.addProjectInfo = this.addProjectInfo.bind(this);
  }

  deleteProjectInfo(id) {
    this.setState({ deleteRecord: true, id: id });
  }
  editProjectInfo(id) {
    this.props.history.push(`/ProjectInfo/` + id);
  }
  deleteAfterConfirmation(deleteConfirmed) {
    this.setState({ deleteRecord: false });
    if (deleteConfirmed) {
      /* let selectedid =  this.state.id
        Create and call deleteProjectInfo action */
      this.showNotification(
        'Deleted!! Create and call deleteProjectInfo action',
      );
    }
    this.setState({ id: '' });
  }
  showNotification = (msg, err) => {
    if (err) this.setState({ notify: true, message: msg, error: true });
    else this.setState({ notify: true, message: msg, error: false });
  };

  handleNotificationClosed = () => {
    this.setState({
      notify: false,
    });
  };

  addProjectInfo() {
    this.props.history.push(routes.orders.getOrderNew());
  }
  render() {
    const { classes } = this.props;
    const { match } = this.props;
    const { notify, message, error } = this.state;

    return (
      <Fragment>
        <Route
          exact
          path={`${match.url}`}
          component={() => (
            <PageBase
              title="List of Order"
              navigation="Order / Order List"
            >
              <Button
                variant="fab"
                mini
                color="primary"
                aria-label="addd"
                className={classes.button}
                onClick={this.addProjectInfo}
              >
                <AddIcon />
              </Button>
              <Table>
                <TableHead>
                  <TableRow>
                    <CustomTableCell>SrNo</CustomTableCell>
                    <CustomTableCell>Order Name</CustomTableCell>
                    <CustomTableCell>Subject</CustomTableCell>
                    <CustomTableCell>Date</CustomTableCell>
                    <CustomTableCell>Type</CustomTableCell>
                    <CustomTableCell>Edit</CustomTableCell>
                    <CustomTableCell>Delete</CustomTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {projectdata &&
                    projectdata.map(projectInfo => {
                      return (
                        <TableRow
                          className={classes.row}
                          key={projectInfo.SrNo}
                        >
                          <CustomTableCell>{projectInfo.SrNo}</CustomTableCell>
                          <CustomTableCell>
                            {projectInfo.ProjectName}
                          </CustomTableCell>
                          <CustomTableCell>
                            {projectInfo.Subject}
                          </CustomTableCell>
                          <CustomTableCell>{projectInfo.Date}</CustomTableCell>
                          <CustomTableCell>{projectInfo.Type}</CustomTableCell>
                          <CustomTableCell>
                            <Button
                              variant="fab"
                              mini
                              aria-label="edit"
                              className={classes.button}
                              onClick={() =>
                                this.editProjectInfo(projectInfo.SrNo)
                              }
                            >
                              <EditIcon />
                            </Button>
                          </CustomTableCell>
                          <CustomTableCell>
                            <Button
                              variant="fab"
                              mini
                              color="secondary"
                              aria-label="delete"
                              className={classes.button}
                              onClick={() =>
                                this.deleteProjectInfo(projectInfo.SrNo)
                              }
                            >
                              <DeleteIcon />
                            </Button>
                          </CustomTableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
              <ConfirmDelete
                resourceHeader="Delete Project Information ?"
                resourceSubject={format(
                  "Do you want to delete project information '{}'?",
                  this.state.id,
                )}
                onModalClose={this.deleteAfterConfirmation}
                openDeleteDialog={this.state.deleteRecord}
              />

              <Notification
                notify={notify}
                message={message}
                error={error}
                closed={this.handleNotificationClosed}
              />
            </PageBase>
          )}
        />
        <Route path={`${match.url}/new`} component={ManageProjectInfo} />
      </Fragment>
    );
  }
}

OrderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OrderList);
