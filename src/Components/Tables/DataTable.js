import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/Modal';

class DataTable extends Component {
  deleteItem = (id) => {
    let confirmDelete = window.confirm('Delete item forever?');
    if (confirmDelete) {
      fetch(
        `http://ec2-13-232-33-53.ap-south-1.compute.amazonaws.com:3001/api/user/${id}`,
        {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id,
          }),
        }
      )
        .then((response) => response.json())
        .then((item) => {
          this.props.deleteItemFromState(id);
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    const items = this.props.items.map((item) => {
      return (
        <tr key={item._id}>
          <th scope="row">{item._id}</th>
          <td>{item.first}</td>
          <td>{item.last}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.location}</td>
          <td>
            <div style={{ width: '110px' }}>
              <ModalForm
                buttonLabel="Edit"
                item={item}
                updateState={this.props.updateState}
              />{' '}
              <Button color="danger" onClick={() => this.deleteItem(item._id)}>
                Del
              </Button>
            </div>
          </td>
        </tr>
      );
    });

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </Table>
    );
  }
}

export default DataTable;
