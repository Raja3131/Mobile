import { ACTION_TYPES } from "../../constants/actionTypes";
const appointments = (state, {type, payload}) => {
    switch (type) {
      case ACTION_TYPES.EDIT_APPOINTMENT_LOADING: {
        return {
          ...state,
          createAppointment: {
            ...state.createAppointment,
            AppointLoading: true,
            AppointError: null,
          },
        };
      }
  
      case ACTION_TYPES.EDIT_APPOINTMENT_SUCCESS: {
        return {
          ...state,
          createAppointment: {
            ...state.createAppointment,
            loading: false,
            error: null,
          },
  
          getAppointments: {
            ...state.getAppointments,
            AppointLoading: false,
            AppointData: state.getAppointments.data.map((item) => {
              if (item.id === payload.id) {
                return payload;
              } else {
                return item;
              }
            }),
            AppointError: null,
          },
        };
      }
  
      case ACTION_TYPES.EDIT_APPOINTMENT_FAIL: {
        return {
          ...state,
          createAppointment: {
            ...state.createAppointment,
            AppointLoading: false,
            AppointError: null,
          },
        };
      }
  
      case ACTION_TYPES.DELETE_APPOINTMENT_LOADING: {
        return {
          ...state,
          deleteAppointment: {
            ...state.deleteAppointment,
            AppointLoading: true,
            AppointError: null,
          },
        };
      }
  
      case ACTION_TYPES.DELETE_APPOINTMENT_SUCCESS: {
        return {
          ...state,
          deleteAppointment: {
            ...state.deleteAppointment,
            AppointLoading: false,
            AppointError: null,
          },
  
          getAppointments: {
            ...state.getAppointments,
            AppointLoading: false,
            AppointData: state.getAppointments.data.filter((item) => item.id !== payload),
            AppointError: null,
          },
        };
      }
  
      case ACTION_TYPES.CREATE_APPOINTMENT_FAIL:
        return {
          ...state,
          createAppointment: {
            ...state.createAppointment,
            AppointLoading: false,
            AppointError: null,
          },
        };
      case ACTION_TYPES.CREATE_APPOINTMENT_LOADING:
        return {
          ...state,
          createAppointment: {
            ...state.createAppointment,
            AppointLoading: true,
            AppointError: null,
          },
        };
      case ACTION_TYPES.CREATE_APPOINTMENT_SUCCESS:
        return {
          ...state,
          createAppointment: {
            ...state.createAppointment,
            AppointLoading: false,
            AppointError: null,
            AppointData: payload,
          },
  
          getAppointments: {
            ...state.getAppointments,
            AppointLoading: false,
            AppointData: {payload, ...state.getAppointments.data},
            AppointError: null,
          },
        };
  
      case ACTION_TYPES.CREATE_APPOINTMENT_FAIL:
        return {
          ...state,
          createAppointment: {
            ...state.createAppointment,
            AppointLoading: false,
            AppointError: payload,
          },
        };
  
      case ACTION_TYPES.GET_APPOINTMENTS_LOADING:
        return {
          ...state,
          getAppointments: {
            ...state.getAppointments,
            AppointLoading: true,
            AppointError: null,
          },
        };
  
      case ACTION_TYPES.GET_APPOINTMENTS_SUCCESS:
        return {
          ...state,
          getAppointments: {
            ...state.getAppointments,
            AppointLoading: false,
            AppointData: [payload],
            AppointError: null,
          },
        };
  
      case ACTION_TYPES.GET_APPOINTMENTS_FAIL:
        return {
          ...state,
          getAppointments: {
            ...state.getAppointments,
            AppointLoading: false,
            AppointError: payload,
          },
        };
  
      default:
        return state;
    }
  };
  
  export default appointments;