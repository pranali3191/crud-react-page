import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditForm extends React.Component {
  state = {
    id: 0,
    first: '',
    last: '',
    email: '',
    phone: '',
    location: '',
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitFormAdd = (e) => {
    e.preventDefault();
    fetch('http://ec2-13-232-33-53.ap-south-1.compute.amazonaws.com:3001/api/user', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first: this.state.first,
        last: this.state.last,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
        location: this.state.location,
      }),
    })
      .then((response) => response.json())
      .then((item) => {
        if (Array.isArray(item)) {
          this.props.addItemToState(item[0]);
          this.props.toggle();
        } else {
          console.log('failure');
        }
      })
      .catch((err) => console.log(err));
  };

  submitFormEdit = (e) => {
    e.preventDefault();
    console.log(this.state.id);
    fetch(`http://ec2-13-232-33-53.ap-south-1.compute.amazonaws.com:3001/api/user/${this.state._id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: this.state._id,
        first: this.state.first,
        last: this.state.last,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
        location: this.state.location,
      }),
    })
      .then((response) => response.json())
      .then((item) => {
        if (Array.isArray(item)) {
          // console.log(item[0])
          this.props.updateState(item[0]);
          this.props.toggle();
        } else {
          console.log('failure');
        }
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    // if item exists, populate the state with proper data
    if (this.props.item) {
      const {
        _id,
        first,
        last,
        email,
        password,
        phone,
        location,
      } = this.props.item;
      this.setState({ _id, first, last, email, password, phone, location });
    }
  }

  render() {
    return (
      <Form
        onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}
      >
        <FormGroup>
          <Label for="first">First Name</Label>
          <Input
            type="text"
            name="first"
            id="first"
            onChange={this.onChange}
            value={this.state.first === null ? '' : this.state.first}
          />
        </FormGroup>
        <FormGroup>
          <Label for="last">Last Name</Label>
          <Input
            type="text"
            name="last"
            id="last"
            onChange={this.onChange}
            value={this.state.last === null ? '' : this.state.last}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            onChange={this.onChange}
            value={this.state.email === null ? '' : this.state.email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            onChange={this.onChange}
            value={this.state.password === null ? '' : this.state.password}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input
            type="text"
            name="phone"
            id="phone"
            onChange={this.onChange}
            value={this.state.phone === null ? '' : this.state.phone}
            placeholder="ex. 555-555-5555"
          />
        </FormGroup>
        <FormGroup>
          <Label for="location">Location</Label>
          <Input
            type="text"
            name="location"
            id="location"
            onChange={this.onChange}
            value={this.state.location === null ? '' : this.state.location}
            placeholder="City, State"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditForm;
