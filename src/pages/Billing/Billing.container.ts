import { connect } from 'react-redux';
import Billing from './BillingPage';
import {
  getBillingInformationData,
  getBillingInformationError,
  getBillingInformationLoading,
} from '../../store/selectors/information.selector';
import { billingInformationHandler } from '../../store/action/information.actions';

const mapStateToProps = (state: any) => {
  const shippingData = getBillingInformationData(state);
  const loading = getBillingInformationLoading(state);
  const errors = getBillingInformationError(state);
  return {
    shippingData,
    loading,
    errors,
  };
};

const mapDispatchToProps = {
  billingInformation: billingInformationHandler,
};

export default connect(mapStateToProps, mapDispatchToProps)(Billing);
