import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from "axios";
import { connect } from "react-redux";
import Modal from 'react-modal';
import { Typography } from "../../includes";

import Blank from './Blank';

ReactDOM.render(
  <Router>
      <div>
        <Route path='/Blank' component={Blank} />
      </div>
  </Router>,
  document.getElementById('root')
);

class Dashboard extends Component {
  constructor () {
    super();
    this.state = {
      people: [],
      showModal: false,
      showModal2: false,
      name: '',
      job: ''
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleCloseModal2 = this.handleCloseModal2.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // state = {
  //   people: [],
  // };

  addition(e) {
    axios
    .post(`https://reqres.in/api/users`,{ name:document.getElementsByName("name")[0].value, job:document.getElementsByName("job")[0].value })
    // .post(`https://reqres.in/api/users`,{ name:"Jay", job:"Students" })
      .then(response2 => {
        console.log(response2.data);
        alert("Add successfully.")
      })
      .catch(error => {
        console.error("Error adding document: ", error);
        alert("Add failed.")
        
      });
  }

  edit(e) {
    axios
    .put(`https://reqres.in/api/users/2`,{ name:document.getElementsByName("editName")[0].value, job:document.getElementsByName("editJob")[0].value })
    // .put(`https://reqres.in/api/users/2`,{ name:"Jay", job:"Students" })
      .then(response3 => {
        console.log(response3.data);
        alert("Edit successfully.")
      })
      .catch(error => {
        console.error("Error adding document: ", error);
        alert("Add failed.")
        
      });
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

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

  handleChange(e) {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  handleOpenModal2 () {
    this.setState({ showModal2: true });
  }

  handleCloseModal2 () {
    this.setState({ showModal2: false });
  }

  render() {
    const { name, job, editName, editJob } = this.state;
    return (
      <div>
        <Typography variant="display1" gutterBottom component="h2">
          Home Page
        </Typography>
        
        <div class="custom">
          <Modal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
          <form onSubmit={this.addition} method="POST">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Name: <input type="text" name="name" value={name} onChange={this.handleChange}/></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Job: <input type="text" name="job" value={job} onChange={this.handleChange}/></p>
          </form>

          <p>&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={this.addition}>Add</button></p>
          <br></br>&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={this.handleCloseModal}>Cancel</button>
          </Modal>

          <Modal
            isOpen={this.state.showModal2}
            contentLabel="Minimal Modal Example"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
          <form onSubmit={this.edit} method="PUT">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Name: <input type="text" name="editName" defaultValue="morpheus" value={editName} onChange={this.handleChange}/></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Job: <input type="text" name="editJob" defaultValue="zion resident" value={editJob} onChange={this.handleChange}/></p>
          </form>

          <p>&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={this.edit}>Update</button></p>
          <br></br>&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={this.handleCloseModal2}>Cancel</button>
          </Modal>
        </div>

        <div class="container">
					<div class="panel panel-default">
					  <div class="panel-heading">
						<h3 class="panel-title">
						  USER LIST
						</h3>
					  </div>
					  <div class="panel-body">
						<h4><button onClick={this.handleOpenModal}>Add Name and Job</button></h4>
            <h4><button onClick={this.handleOpenModal2}>Update Name and Job</button></h4>
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
                  <td><Link to="/Blank">{email}</Link></td>
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
