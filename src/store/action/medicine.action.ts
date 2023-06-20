import { ACTIONS } from '../app.constants';

export const getMedicines = {
    pending: () => ({
      type: ACTIONS.GET_MEDICINES.PENDING,
    }),
    success: (data: any) => ({
      type: ACTIONS.GET_MEDICINES.SUCCESS,
      data,
    }),
    error: (error: any) => ({
      type: ACTIONS.GET_MEDICINES.ERROR,
      error,
    }),
  };

export const getMedicinesBegin = () => {
    return {
      type: ACTIONS.GET_MEDICINES_BEGIN,
    };
  };