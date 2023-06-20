import { combineReducers } from 'redux';
import credentialReducer from './credential.reducer';
import informationReducer from './information.reducer';
import questionReducer from './questionnaire.reducer';
import medicineReducer from './medicine.reducer';

const rootReducer = combineReducers({
  credentials: credentialReducer,
  information: informationReducer,
  questionnaire: questionReducer,
  medicine: medicineReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
