import { memo, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const List = ({ customers, editCustomer, deleteCustomer }: any) => {
  const [count, setcount] = useState(0);

  /**
   * 
   * Update the Values of the fields
   * 
   * @param e 
   */
  const handleEditClick = (e: any) => {
    const cust = customers[parseInt(e.target.id)];
    const name = cust.first_name != null && cust.last_name != null ? `${cust.first_name} ${cust.last_name}` : '';

    editCustomer({ ...cust, name: name.trim(), index: parseInt(e.target.id) });
  }

  /**
   * 
   * Handle Sorting of List according to filter provided
   * 
   * @param el 
   */
  const handleSort = (el: any) => {
    el.preventDefault();
    const sortBy: string = el.target.id;
    if (sortBy === '1') {
      customers.sort((a: any, b: any) => a.id - b.id)
    }
    else if (sortBy === '2') {
      customers.sort((a: any, b: any) => a.first_name.localeCompare(b.first_name))
    }
    else if (sortBy === '3') {
      customers.sort((a: any, b: any) => a.email.localeCompare(b.email))
    }

    setcount(count + 1);
  }

  /**
   * 
   * Rerender the table after sorting the list
   * 
   */
  useEffect(() => {
    //Rerender the table to show sorted result
  }, [count]);

  /**
   * 
   * Save the id of Customer to Delete 
   * 
   * @param e 
   */
  const handleDeleteClick = (e: any) => {
    e.preventDefault();
    deleteCustomer(e.target.id);
  }

  return (
    <Table responsive>
      <thead>
        <tr>
          <th></th>
          <th>Customer Id <button id='1' onClick={handleSort}>arrow</button></th>
          <th>Customer Name <button id='2' onClick={handleSort}>arrow</button></th>
          <th>Email <button id='3' onClick={handleSort}>arrow</button></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer: any, index: number) => {
            // eslint-disable-next-line
          return (<tr key={customer.id}>
            <td><img src={customer.avatar ? customer.avatar : ''} alt="Profile Picture" /> </td>
            <td>{customer.id.toLocaleString('en-US', { minimumIntegerDigits: 3, useGrouping: false })}</td>
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