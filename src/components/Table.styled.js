import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  border: none;
  padding: 10px;
  margin: auto;
  th {
    background: #ffd300;
  }
  tr {
    background-color: #a9a9a9a9;
    font-size: 20px;
  }
  tr:nth-child(6n + 1) {
    background-color: white;
  }
`;

export default Table;
