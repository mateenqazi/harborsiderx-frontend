import ACTIONS from '../app.constants';

export const ShippingInformation = {
  pending: () => ({
    type: ACTIONS.SHIPPING_INFORMATION.PENDING,
  }),
  success: (data: any) => ({
    type: ACTIONS.SHIPPING_INFORMATION.SUCCESS,
    data,
  }),
  error: (error: any) => ({
    type: ACTIONS.SHIPPING_INFORMATION.ERROR,
    error,
  }),
};

export const BillingInformation = {
  pending: () => ({
    type: ACTIONS.BILLING_INFORMATION.PENDING,
  }),
  success: (data: any) => ({
    type: ACTIONS.BILLING_INFORMATION.SUCCESS,
    data,
  }),
  error: (error: any) => ({
    type: ACTIONS.BILLING_INFORMATION.ERROR,
    error,
  }),
};

export const PaymentInformation = {
  pending: () => ({
    type: ACTIONS.PAYMENT_INFORMATION.PENDING,
  }),
  success: (data: any) => ({
    type: ACTIONS.PAYMENT_INFORMATION.SUCCESS,
    data,
  }),
  error: (error: any) => ({
    type: ACTIONS.PAYMENT_INFORMATION.ERROR,
    error,
  }),
};

export const shippingInformationHandler = (data: any) => {
  return {
    type: ACTIONS.SUBMIT_SHIPPING_INFORMATION,
    data,
  };
};

export const billingInformationHandler = (data: any) => {
  return {
    type: ACTIONS.SUBMIT_BILLING_INFORMATION,
    data,
  };
};

export const paymentInformationHandler = (data: any) => {
  return {
    type: ACTIONS.SUBMIT_PAYMENT_INFORMATION,
    data,
  };
};
