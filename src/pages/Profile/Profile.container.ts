import { connect } from 'react-redux';
import { getAuthUserData } from '../../store/selectors/credential.selector';
import Profile from './Profile';

const mapStateToProps = (state: any) => {
    const authUserData = getAuthUserData(state);
    return {
        authUserData
    };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
