import Button from "react-bootstrap/Button";
import { FaPlus } from "react-icons/fa";

function TableHeader({ addCustomer }: any) {
  return (
    <div className="app-container">
      <Button variant="primary button" onClick={addCustomer}>
        <FaPlus className="start-icon" />
        ADD NEW CUSTOMER
      </Button>
    </div>
  );
}

export default TableHeader;
