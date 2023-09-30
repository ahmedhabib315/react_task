import { Action } from "@reduxjs/toolkit";

const getListReducer = (state: any = [], action: any) => {
  if (action.type === 'list') {
    localStorage.setItem('list', JSON.stringify(action.payload));
    return action.payload ? action.payload : [];
  }
  else if (action.type === 'add') {
    const data = [...state, { ...action.payload, id: state.length + 1 }];
    localStorage.setItem('list', JSON.stringify(data));
    return data;
  }
  else if (action.type === 'update') {
    const index = action.index;
    const data = [...state];
    data[index] = {
      ...data[index],
      first_name: action.payload.name.split(' ')[0] || '',
      last_name: action.payload.name.split(' ')[1] || '',
      email: action.payload.email
    }

    localStorage.setItem('list', JSON.stringify(data));
    return data;
  }
  else if (action.type === 'delete') {
    const index = action.index;
    const data = [...state];
    data.splice(index, 1);

    localStorage.setItem('list', JSON.stringify(data));
    return data;
  }
  else {
    return state;
  }
}

export default getListReducer;