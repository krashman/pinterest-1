/**
 *
 * RegisterPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage, injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Row, Col, FormGroup, FormControl, ControlLabel, Glyphicon, InputGroup, Button } from 'react-bootstrap';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRegisterPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import messagesApp from '../App/messages';
import styled from 'styled-components';
import './styles.scss';
import 'bootstrap-social/bootstrap-social.css';

const RowWrapper = styled.div`
  padding: 4em;
  background: papayawhip;
`;

export class RegisterPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <Helmet>
          <title>RegisterPage</title>
          <meta name="description" content="Description of RegisterPage" />
        </Helmet>
        <div className="container">
          <form>
            <Row>
              <Col className="registerContainer" md={6} mdOffset={3} sm={12}>
                <FormGroup>
                  <ControlLabel><FormattedMessage {...messagesApp.email} /></ControlLabel>
                  <InputGroup>
                    <InputGroup.Addon>
                      <Glyphicon glyph="user" />
                    </InputGroup.Addon>
                    <FormControl type="email" required/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <ControlLabel><FormattedMessage {...messagesApp.password} /></ControlLabel>
                  <InputGroup>
                    <InputGroup.Addon>
                      <Glyphicon glyph="lock" />
                    </InputGroup.Addon>
                    <FormControl type="password" required/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <ControlLabel><FormattedMessage {...messagesApp.confirmpassword} /></ControlLabel>
                  <InputGroup>
                    <InputGroup.Addon>
                      <Glyphicon glyph="lock" />
                    </InputGroup.Addon>
                    <FormControl type="password" required />
                  </InputGroup>
                </FormGroup>
                <Button bsSize="large" block type="submit"> {formatMessage(messagesApp.createaccount)}</Button>
                <br />
                <Row>
                  <Col md={6}>
                    <Button bsStyle="" bsSize="large" className="btn-social btn-facebook" block>
                      <span className="fa fa-facebook"></span>
                      Facebook
                    </Button>
                  </Col>
                  <Col md={6}>
                    <Button bsStyle="" bsSize="large" className="btn-social btn-twitter" block>
                      <span className="fa fa-twitter"></span>
                      Twitter
                  </Button>
                  </Col>
                </Row>
              </Col>

            </Row>
          </form>
        </div>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  registerpage: makeSelectRegisterPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'registerPage', reducer });
const withSaga = injectSaga({ key: 'registerPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  injectIntl
)(RegisterPage);