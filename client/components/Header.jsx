import React from 'react';
import styles from './../styles/Header.scss';
import RunButton from './RunButton.jsx';
import HistoryButton from './HistoryButton.jsx';

import * as actions from '../actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const mapStateToProps = store => ({
  codeInput: store.app.codeInput,
  dataResults: store.app.dataResults,
  networkLatency: store.app.networkLatency,
  visObj: store.app.dataVis.visObj,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const Header = props => {
  return (
    <div id="header">
      <h1>Orpheus GQL</h1>
      <RunButton
        setDataPoints={props.setDataPoints}
        codeInput={props.codeInput}
        updateCodeHistory={props.updateCodeHistory}
        buildTreeVis={props.buildTreeVis}
        storeResponseData={props.storeResponseData}
        setDatabaseRequests={props.setDatabaseRequests}
        setDataPoints={props.setDataPoints}
        setNestingDepth={props.setNestingDepth}
        setEffectiveRuntime={props.setEffectiveRuntime}
        setNetworkLatency={props.setNetworkLatency}
        setResolverNum={props.setResolverNum}
        setResolverNames={props.setResolverNames}
        setQueryErrorStatus={props.setQueryErrorStatus}
      />
      <HistoryButton toggleCodeHistory={props.toggleCodeHistory} />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
