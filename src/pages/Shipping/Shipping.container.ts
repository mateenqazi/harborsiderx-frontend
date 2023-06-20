import { connect } from 'react-redux';
import Shipping from './ShippingPage';
import {
  getShippingInformationData,
  getShippingInformationError,
  getShippingInformationLoading,
} from '../../store/selectors/information.selector';
import { shippingInformationHandler } from '../../store/action/information.actions';

const mapStateToProps = (state: any) => {
  const shippingData = getShippingInformationData(state);
  const loading = getShippingInformationLoading(state);
  const errors = getShippingInformationError(state);
  return {
    shippingData,
    loading,
    errors,
  };
};

const mapDispatchToProps = {
  shippingInformation: shippingInformationHandler,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);
