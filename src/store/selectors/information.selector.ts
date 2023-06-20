export const getShippingInformationLoading = (state: any) => {
  const { information } = state;
  return information.getIn(['information', 'shipping', 'loading']);
};

export const getShippingInformationData = (state: any) => {
  const { information } = state;
  return information.getIn(['information', 'shipping', 'data']);
};

export const getShippingInformationError = (state: any) => {
  const { information } = state;
  return information.getIn(['information', 'shipping', 'error']);
};

export const getPaymentInformationLoading = (state: any) => {
  const { information } = state;
  return information.getIn(['information', 'payment', 'loading']);
};

export const getPaymentInformationData = (state: any) => {
  const { information } = state;
  return information.getIn(['information', 'payment', 'data']);
};

export const getPaymentInformationError = (state: any) => {
  const { information } = state;
  return information.getIn(['information', 'payment', 'error']);
};

export const getBillingInformationLoading = (state: any) => {
  const { information } = state;
  return information.getIn(['information', 'billing', 'loading']);
};

export const getBillingInformationData = (state: any) => {
  const { information } = state;
  return information.getIn(['information', 'billing', 'data']);
};

export const getBillingInformationError = (state: any) => {
  const { information } = state;
  return information.getIn(['information', 'billing', 'error']);
};
