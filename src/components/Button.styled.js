import styled from 'styled-components';

const AddButton = styled.button`
  background-color: #fff;
  border: 2px solid #4caf50;
  color: #000;
  padding: 15px 30px;
  text-align: center;
  display: inline-block;
  font-size: 20px;
  font-family: serif;
  margin: 5px;
  transition-duration: 0.5s;
  cursor: pointer;
  :hover {
    background-color: #4caf50;
    color: white;
  }
`;

const EditButton = styled(AddButton)`
  border: 2px solid #d2691e;
  :hover {
    background-color: #d2691e;
  }
`;

const DeleteButton = styled(AddButton)`
  border: 2px solid #800000;
  :hover {
    background-color: #800000;
  }
`;

const SaveButton = styled(AddButton);
const CancelButton = styled(DeleteButton);

export { AddButton, EditButton, DeleteButton, SaveButton, CancelButton };
