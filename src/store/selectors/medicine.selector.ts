export const getAllMedicines = (state: any) => {
    const { medicine } = state;
    return medicine.getIn(['medicine', 'data']);
  };
  
  export const getAllMedicinesLoading = (state: any) => {
    const { medicine } = state;
    return medicine.getIn(['medicine', 'loading']);
  };
  
  export const getAllMedicinesError = (state: any) => {
    const { medicine } = state;
    return medicine.getIn(['medicine', 'error']);
  };