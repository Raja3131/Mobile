import React, {createContext, useReducer} from 'react';
import authInitialState from './initialStates/authStates';
import appointments from './reducers/appointments';
import appointmentInitialState from './initialStates/appointmentStates';
import auth from './reducers/auth';
export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [appointmentState,appointmentDispatch] = useReducer(appointments,appointmentInitialState);
  return (
    <GlobalContext.Provider value={{authState,appointmentState,authDispatch,appointmentDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
