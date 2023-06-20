import { connect } from 'react-redux';
import Payment from './PaymentPage';
import {
  getPaymentInformationData,
  getPaymentInformationError,
  getPaymentInformationLoading,
} from '../../store/selectors/information.selector';
import { paymentInformationHandler } from '../../store/action/information.actions';

const mapStateToProps = (state: any) => {
  const shippingData = getPaymentInformationData(state);
  const loading = getPaymentInformationLoading(state);
  const errors = getPaymentInformationError(state);
  return {
    shippingData,
    loading,
    errors,
  };
};

const mapDispatchToProps = {
  paymentInformation: paymentInformationHandler,
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
