import { connect } from 'react-redux';
import { getMedicinesBegin } from '../../store/action/medicine.action';
import { getAllMedicines } from '../../store/selectors/medicine.selector';
import LandingPage from './LandingPage';

const mapStateToProps = (state: any) => {
    const medicines = getAllMedicines(state);
    return {
        medicines
    };
};

const mapDispatchToProps = {
    getMedicines: getMedicinesBegin
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
