import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ModalForm from './Components/Modals/Modal';
import DataTable from './Components/Tables/DataTable';
import { CSVLink } from 'react-csv';

class App extends Component {
  state = {
    items: [],
  };

  getItems() {
    console.log('fetch');
    fetch(
      'http://ec2-13-232-33-53.ap-south-1.compute.amazonaws.com:3001/api/users'
    )
      .then((response) => response.json())
      .then((items) => this.setState({ items }))
      .catch((err) => console.log(err));
  }

  addItemToState = (item) => {
    this.setState((prevState) => ({
      items: [...prevState.items, item],
    }));
  };

  updateState = (item) => {
    const itemIndex = this.state.items.findIndex(
      (data) => data._id === item._id
    );
    const newArray = [
      // destructure all items from beginning to the indexed item
      ...this.state.items.slice(0, itemIndex),
      // add the updated item to the array
      item,
      // add the rest of the items to the array from the index after the replaced item
      ...this.state.items.slice(itemIndex + 1),
    ];
    this.setState({ items: newArray });
  };

  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter((item) => item._id !== id);
    this.setState({ items: updatedItems });
  };

  componentDidMount() {
    this.getItems();
  }

  render() {
    return (
      <Container className="App">
        <Row>
          <Col>
            <h1 style={{ margin: '20px 0' }}>User Directory</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable
              items={this.state.items}
              updateState={this.updateState}
              deleteItemFromState={this.deleteItemFromState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CSVLink
              filename={'db.csv'}
              color="primary"
              style={{ float: 'left', marginRight: '10px' }}
              className="btn btn-primary"
              data={this.state.items}
            >
              Download CSV
            </CSVLink>
            <ModalForm
              buttonLabel="Add Item"
              addItemToState={this.addItemToState}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
// import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
