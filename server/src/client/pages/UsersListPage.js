import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import requireAuth from "../components/hocs/requireAuth";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div className="container">
        <h3>Here's a big list of users</h3>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(requireAuth(UsersList)),
};
