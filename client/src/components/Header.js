import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  state = {
    auth: null
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.auth !== this.props.auth) {
      this.setState({ auth: this.props.auth });
    }
  }
  renderLogButton() {
    switch (this.state.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href='/auth/google'>Login With Google</a>
          </li>
        );
      default:
        return [
          <li key={1}>
            <Payments />
          </li>,
          <li key={2} style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits || 0}
          </li>,
          <li key={3}>
            <a href='/api/logout'>Log out</a>
          </li>
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link to={this.props.auth ? '/surveys' : '/'} className='brand-logo'>
            Emaily
          </Link>
          <ul id='nav-mobile' className='right'>
            {this.renderLogButton()}
          </ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => {
  const { auth } = state;
  return {
    auth
  };
};
export default connect(mapStateToProps)(Header);
