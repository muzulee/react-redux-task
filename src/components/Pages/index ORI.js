import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from "axios";
import { connect } from "react-redux";
import { Typography } from "../../includes";

import Blank from './Blank';

ReactDOM.render(
  <Router>
      <div>
        <Route path='/blank' component={Blank} />
      </div>
  </Router>,
  document.getElementById('root')
);

class Dashboard extends Component {

  state = {
    people: []
  };

  componentDidMount() {
    axios
      .get("https://reqres.in/api/users")
      .then(response => {
        this.successShow(response);
        console.log(response.data.data);
      })
      .catch(error => {
        this.successShow(error);
      });
  }

  successShow(response) {
    this.setState({
      people: response.data.data
    });
  }

  render() {
    return (
      <div>
        <Typography variant="display1" gutterBottom component="h2">
          Home Page 
        </Typography>
        
        <div class="container">
					<div class="panel panel-default">
					  <div class="panel-heading">
						<h3 class="panel-title">
						  USER LIST
						</h3>
					  </div>
					  <div class="panel-body">
						<h4><Link to="/blank" class="btn btn-secondary">Add User</Link></h4>
						<table class="table table-stripe">
						  <thead>
							<tr>
							  <th>Email</th>
							  <th>Full name</th>
							  <th>Picture</th>
							</tr>
						  </thead>
						  <tbody>
              {this.state.people.map(({id, email, first_name, last_name, avatar}) => (
							  <tr>
                  <td><Link to="/blank">{email}</Link></td>
                  <td>{first_name} {last_name}</td>
                  <td><img src={avatar} alt="Avatar"/></td>
							  </tr>
              ))}
						  </tbody>
						</table>
					  </div>
					</div>
				  </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
