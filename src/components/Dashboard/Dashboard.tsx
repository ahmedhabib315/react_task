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

  useEffect(() => {
    dispatch(actions.getList());
  }, []);

  const editCustomer = (data: any) => {
    seteditDialogData(data);
    seteditDialog(true);
  }

  const deleteCustomer = (id: string) => {
    setdeleteDialogData(id);
    setdeleteDialog(true);
  }

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