import { memo, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { TfiArrowsVertical } from "react-icons/tfi";

const List = ({ customers, editCustomer, deleteCustomer }: any) => {
  const [count, setcount] = useState(0);
  const [alternateImageUrl, setAlternateImageUrl] = useState("/default.png");

  /**
   *
   * Set Default Image if the image is broken
   *
   * @param event
   */
  const handleImageError = (event: any) => {
    event.target.src = alternateImageUrl;
  };

  /**
   *
   * Update the Values of the fields
   *
   * @param e
   */
  const handleEditClick = (e: any) => {
    const cust = customers[parseInt(e.target.id)];
    const name =
      cust.first_name != null && cust.last_name != null
        ? `${cust.first_name} ${cust.last_name}`
        : "";

    editCustomer({ ...cust, name: name.trim(), index: parseInt(e.target.id) });
  };

  /**
   *
   * Handle Sorting of List according to filter provided
   *
   * @param el
   */
  const handleSort = (el: any) => {
    el.preventDefault();
    const sortBy: string = el.target.id;
    if (sortBy === "1") {
      customers.sort((a: any, b: any) => a.id - b.id);
    } else if (sortBy === "2") {
      customers.sort((a: any, b: any) =>
        a.first_name.localeCompare(b.first_name)
      );
    } else if (sortBy === "3") {
      customers.sort((a: any, b: any) => a.email.localeCompare(b.email));
    }

    setcount(count + 1);
  };

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
  };

  return (
    <Table responsive className="customer-table">
      <thead>
        <tr>
          <th></th>
          <th>
            Customer Id <TfiArrowsVertical id="1" onClick={handleSort} />
          </th>
          <th>
            Customer Name <TfiArrowsVertical id="2" onClick={handleSort} />
          </th>
          <th>
            Email <TfiArrowsVertical id="3" onClick={handleSort} />
          </th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
        customers.map((customer: any, index: number) => {
          // eslint-disable-next-line
          return (
            <tr key={customer.id}>
              <td className="list-items">
                <div>
                  <img
                    src={customer.avatar ? customer.avatar : ""}
                    alt="Profile Picture"
                    className="profile-image"
                    onError={handleImageError}
                  />{" "}
                </div>
              </td>
              <td className="list-items">
                <div className="customer-id">
                  {customer.id.toLocaleString("en-US", {
                    minimumIntegerDigits: 3,
                    useGrouping: false,
                  })}
                </div>
              </td>
              <td className="list-items">
                <div className="customer-name">{`${customer.first_name} ${customer.last_name}`}</div>
              </td>
              <td className="list-items">
                <div className="customer-email">{customer.email}</div>
              </td>
              <td className="list-items">
                <div>
                  <Button
                    onClick={handleEditClick}
                    id={index.toString()}
                    variant="success"
                  >
                    Edit
                  </Button>{" "}
                </div>
              </td>
              <td className="list-items">
                <div>
                  <Button
                    onClick={handleDeleteClick}
                    id={index.toString()}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          );
        })
        }
      </tbody>
    </Table>
  );
};

export default memo(List);
