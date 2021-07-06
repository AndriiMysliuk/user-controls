import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

const StyledTable = styled.table`
  border: 2px;
  tr {
    background-color: lightgray;
  }
  tr:nth-child(6n + 1) {
    background-color: white;
  }
`;

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      id: '',
      name: '',
    };
  }
  handleClickEdit(user) {
    this.setState({
      id: user._id,
      name: user.name,
    });
  }
  handleClickCancel() {
    this.setState({
      ...this.state,
      id: '',
      name: '',
    });
  }
  handleClickSave() {
    const { id, name } = this.state;
    fetch('http://localhost:8081/api/user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({ id: id, name: name }),
    })
      .then(() => {
        fetch('http://localhost:8081/api/users')
          .then((res) => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result,
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error,
              });
            }
          );
      })
      .then(() => {}); //exit edit mode
  }
  handleNameChange(e) {
    this.setState({
      ...this.state,
      name: e.target.value,
    });
  }
  handleClickDelete(user) {
    fetch('http://localhost:8081/api/user/' + user._id, {
      method: 'DELETE',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(() => {
      fetch('http://localhost:8081/api/users')
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result,
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );
    });
  }
  componentDidMount() {
    fetch('http://localhost:8081/api/users')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p> Error: {error.message} </p>;
    } else if (!isLoaded) {
      return <p> Loading... </p>;
    } else {
      return (
        <StyledTable>
                    <th>Name:</th>
                    
          {items.map((item) => (
            <tr>
                            
              <td key={item.id}>
                                
                {this.state.id === item._id ? (
                  <input
                    onChange={(e) => this.handleNameChange(e)}
                    value={this.state.name}
                  ></input>
                ) : (
                  item.name
                )}
                              
              </td>{' '}
                            
              <td>
                                
                {this.state.id === item._id ? (
                  <StyledButton onClick={() => this.handleClickCancel(item)}>
                                        Cancel                   
                  </StyledButton>
                ) : (
                  <StyledButton onClick={() => this.handleClickEdit(item)}>
                                        Edit                   
                  </StyledButton>
                )}
                              
              </td>
                            
              <td>
                                
                {this.state.id === item._id ? (
                  <StyledButton onClick={() => this.handleClickSave(item)}>
                                        Save                   
                  </StyledButton>
                ) : (
                  <StyledButton onClick={() => this.handleClickDelete(item)}>
                    Delete
                  </StyledButton>
                )}
                              
              </td>
                          
            </tr>
          ))}
                  
        </StyledTable>
      );
    }
  }
}
export default Edit;
