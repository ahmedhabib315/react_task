import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { actions } from "../../redux";
import deleteIcon from "../../assets/images/delete.png";

function DeleteCustomer({ hide, id }: any) {
  const dispatch: any = useDispatch();

  // Send the index of the customer to delete to dispatcher and close dialog
  const handleDelete = () => {
    dispatch(actions.deleteCustomer(parseInt(id)));
    hide();
  };

  return (
    <Modal show={true} onHide={hide} className="delete-model">
      <Modal.Body>
        <img src={deleteIcon} alt="delete-icon" />
        <h4>Are You Sure</h4>
        <p>
          Do you really want to delete this customer? This Process cannot be
          undone.
        </p>
        <div className="model-footer">
          <Button variant="secondary" type="submit" onClick={hide}>
            Cancel
          </Button>
          <Button type="submit" variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DeleteCustomer;
