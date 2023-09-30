import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux';

function DeleteCustomer({ hide, id }: any) {
  const dispatch: any = useDispatch();

  // Send the index of the customer to delete to dispatcher and close dialog
  const handleDelete = () => {
    dispatch(actions.deleteCustomer(parseInt(id)));
    hide();
  }

  return (
    <Modal show={true} onHide={hide}>
      <Modal.Body>
        <h4>Are You Sure</h4>
        <p>
          Do you really want to delete this customer?
          This Process cannot be undone.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" variant="primary" onClick={hide}>
          Cancel
        </Button>
        <Button type="submit" variant="danger" onClick={handleDelete}>
          Delete
        </Button>

      </Modal.Footer>
    </Modal>
  )
}

export default DeleteCustomer