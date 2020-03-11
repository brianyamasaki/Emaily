import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {
    auth: null
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.auth !== this.props.auth) {
      this.setState({ auth: this.props.auth });
    }
  }
  renderBrandLink() {}
  renderLogButton() {
    switch (this.state.auth) {
      case null:
        return;
      case false:
        return <a href='/auth/google'>Login With Google</a>;
      default:
        return <a href='/api/logout'>Log out</a>;
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
            <li>{this.renderLogButton()}</li>
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
