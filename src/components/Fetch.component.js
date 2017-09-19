import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getName, setName } from '../actions/User.actions';

class FetchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      submit:''
    }
  }

  onChange(e) {
    const data = e.target.value;
    this.setState({name: data});
  }

  onSubmit(e) {
    this.setState({submit: this.state.name});
    this.props.setName(this.state.name);
    e.preventDefault();
  }

  render() {
    return (
      <div>
       
        <p> ค่า: {this.props.count} </p>
       
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    count: state.app
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getName: () => {
      dispatch(getName());
    },
    setName: (name) => {
      dispatch(setName(name));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FetchPage));
