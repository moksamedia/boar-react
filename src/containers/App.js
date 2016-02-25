// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BoarApp from '../components/BoarApp';
import * as BoarActions from '../actions/boarActions';

class App extends React.Component {
  render() {

    const { boarAppState, actions } = this.props;

    return (
        <BoarApp boarAppState={boarAppState} actions={actions} />
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  boarAppState: PropTypes.object.isRequired
};

/*
  Connect, mapStateToProps, and mapDispatchToProps
  https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
*/

// Subscribes component to redux store updates
function mapStateToProps(state) {
  return {
    boarAppState: state.boarAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // Bind the action definitions to the store via dispatch
    // http://redux.js.org/docs/api/bindActionCreators.html
    actions: bindActionCreators(BoarActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
