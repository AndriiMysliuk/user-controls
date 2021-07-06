import React, { Component } from 'react';
import Input from '../Input.styled';
import { AddButton } from '../Button.styled';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };
  handleSubmit(name) {
    const { userName } = this.state;
    fetch('http://localhost:8081/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({ name: userName }),
    });
    this.setState({
      userName: '',
    });
  }
  render() {
    return (
      <div>
                
        <Input
          onChange={(e) => this.handleChange(e)}
          value={this.state.userName}
          placeholder="Name"
        ></Input>
                
        <AddButton onClick={this.handleSubmit} style={{ margin: 10 }}>
                    Submit         
        </AddButton>
              
      </div>
    );
  }
}
export default Add;
