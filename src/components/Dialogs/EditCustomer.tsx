import CustomerDialog from './CustomerDialog'

function EditCustomer({hide, customer}: any) {
  return (
    <CustomerDialog hide={hide} props={customer} />
  )
}

export default EditCustomer