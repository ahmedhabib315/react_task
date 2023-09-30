import React, { memo, useState } from 'react';
import Table from 'react-bootstrap/Table';

const List = ({ customers, editCustomer, deleteCustomer }: any) => {

  const handleEditClick = (e: any) => {
    const data = customers[parseInt(e.target.id)];
    const name = data.first_name != null && data.last_name != null ? `${data.first_name} ${data.last_name}` : '';

    editCustomer({ ...data, name: name.trim(), index: parseInt(e.target.id) });
  }

  const handleDeleteClick = (e: any) => {
    e.preventDefault();
    deleteCustomer(e.target.id);
  }

  return (
    <Table responsive>
      <thead>
        <tr>
          <th></th>
          <th>Customer Id <button>arrow</button></th>
          <th>Customer Name <button>arrow</button></th>
          <th>Email <button>arrow</button></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer: any, index: number) => {
          return (<tr key={customer.id}>
            <td><img src={customer.avatar} alt="Profile Picture" /> </td>
            <td>{customer.id}</td>
            <td>{`${customer.first_name} ${customer.last_name}`}</td>
            <td>{customer.email}</td>
            <td><button onClick={handleEditClick} id={index.toString()}>Edit</button></td>
            <td><button onClick={handleDeleteClick} id={index.toString()}>Delete</button></td>
          </tr>)
        })}
      </tbody>
    </Table>
  )
}

export default memo(List)