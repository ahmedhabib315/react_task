import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux';

function CustomerDialog({ hide, ...props }: any) {
  const [data, setdata] = useState(props && props.props ? props.props : {});
  const dispatch: any = useDispatch();

  /**
   * 
   * Handle and update field values of the dialog
   * 
   * @param e 
   */
  const handleOnChange = (e: any) => {
    e.preventDefault()
    setdata({ ...data, [e.target.name]: e.target.value });
  }

  /**
   * 
   * Add or Update the Customer according to the Request and Hide the dialog boxes
   * 
   * @param el 
   */
  const handleSubmit = (el: any) => {
    el.preventDefault();
    if (data.index != null) {
      dispatch(actions.editCustomer(data, data.index));
    }
    else {
      dispatch(actions.addCustomer(data));
    }
    hide();
  }


  /**
   * 
   * Save Image Values
   * 
   * @param event 
   */
  const handleImageChange = (event: any) => {
    const file = event.target.files[0];

    const reader: any = new FileReader();
    reader.onload = () => {
      const blob = new Blob([reader.result]);
      const imageUrl = URL.createObjectURL(blob);
      setdata({ ...data, avatar: imageUrl.replace('blob:', '') })
    };
    reader.readAsDataURL(file);
  };


  return (
    <>
      <Modal show={true} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>{data.id ? 'Edit Customer' : 'Add New Customer'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                value={data.name ? data.name : ''}
                name="name"
                onChange={handleOnChange}
                placeholder="Customer Name"
                required
              />
              <Form.Control
                type="email"
                value={data.email ? data.email : ''}
                name="email"
                onChange={handleOnChange}
                placeholder="Email"
                required
              />
              <label htmlFor="avatar">Upload image</label>
              <input type="file" onChange={handleImageChange} name="avatar" accept="image/*" />
            </Form.Group>
            <Button type="submit" variant="primary" onSubmit={handleSubmit}>
              {data.id ? 'EDIT CUSTOMER' : 'ADD CUSTOMER'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CustomerDialog