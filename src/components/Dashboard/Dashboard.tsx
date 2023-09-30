import Header from './Header/Header'
import SideMenu from '../SideMenu/SideMenu'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux';
import TableHeader from './Table/TableHeader';
import List from './Table/List';
import AddCustomer from '../Dialogs/AddCustomer';
import EditCustomer from '../Dialogs/EditCustomer';
import { createTrue } from 'typescript';
import DeleteCustomer from '../Dialogs/DeleteCustomer';

function Dashboard() {
  const customers = useSelector((state: any) => state.list);
  const [addDialog, setaddDialog] = useState(false);
  const [editDialog, seteditDialog] = useState(false);
  const [deleteDialog, setdeleteDialog] = useState(false);
  const [deleteDialogData, setdeleteDialogData] = useState('');
  const [editDialogData, seteditDialogData] = useState({});
  const dispatch: any = useDispatch();

  /**
   * 
   * Get List on Page Load from either Local Storage or external Api
   */
  useEffect(() => {
    dispatch(actions.getList());
  }, []);

  /**
   * 
   * Save the old Data of Customer to update and Open Edit Dialog Box
   * 
   * @param data 
   */
  const editCustomer = (data: any) => {
    seteditDialogData(data);
    seteditDialog(true);
  }

  /**
   * 
   * Saves the Id of Customer to Delete and Opens the Delete Dialog Box
   * 
   * @param id 
   */
  const deleteCustomer = (id: string) => {
    setdeleteDialogData(id);
    setdeleteDialog(true);
  }

  //If any of the Dialog needed to be displayed then hide the Dashboard Component
  if (addDialog) {
    return <AddCustomer hide={() => setaddDialog(false)} />
  }
  else if (editDialog) {
    return <EditCustomer hide={() => seteditDialog(false)} customer={editDialogData} />
  }
  else if (deleteDialog) {
    return <DeleteCustomer hide={() => setdeleteDialog(false)} id={deleteDialogData} />
  }
  return (
    <>
      <SideMenu />
      <Header />
      <TableHeader addCustomer={() => setaddDialog(true)} />
      <List customers={customers} editCustomer={editCustomer} deleteCustomer={deleteCustomer} />
    </>
  )
}

export default Dashboard