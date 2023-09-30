import Button from 'react-bootstrap/Button';

function TableHeader({ addCustomer }: any) {

  return (
    <div className='container'>
      <Button variant="primary button" onClick={addCustomer}>ADD NEW CUSTOMER</Button>
      <hr />
    </div>
  )

}

export default TableHeader