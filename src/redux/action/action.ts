import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

export const getList = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    let list: any = [];
    const items = await localStorage.getItem('list');
    if (items) {
      list = JSON.parse(items);
    }
    else {
      const response = await axios.get("https://reqres.in/api/users?page=1");
      list = await response.data.data;
    }
    dispatch({
      type: 'list',
      payload: list,
    });
  }
}

export const addCustomer = (payload: any) => {
  return async (dispatch: Dispatch): Promise<void> => {
    const data = {
      email: payload.email,
      first_name: payload.name.split(' ')[0] || '',
      last_name: payload.name.split(' ')[1] || ''
    }
    dispatch({
      type: 'add',
      payload: data,
    });
  }
}

export const editCustomer = (payload: any, index: number) => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch({
      type: 'update',
      index: index,
      payload: payload,
    });
  }
}

export const deleteCustomer = (index: number) => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch({
      type: 'delete',
      index: index
    });
  }
}