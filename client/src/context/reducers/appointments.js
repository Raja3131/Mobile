import { ACTION_TYPES } from "../../constants/actionTypes";
const appointments = (state, {type, payload}) => {
    switch (type) {
      case EDIT_CONTACT_LOADING: {
        return {
          ...state,
          createContact: {
            ...state.createContact,
            loading: true,
            error: null,
          },
        };
      }
  
      case EDIT_CONTACT_SUCCESS: {
        return {
          ...state,
          createContact: {
            ...state.createContact,
            loading: false,
            error: null,
          },
  
          getContacts: {
            ...state.getContacts,
            loading: false,
            data: state.getContacts.data.map((item) => {
              if (item.id === payload.id) {
                return payload;
              } else {
                return item;
              }
            }),
            error: null,
          },
        };
      }
  
      case EDIT_CONTACT_FAIL: {
        return {
          ...state,
          createContact: {
            ...state.createContact,
            loading: false,
            error: null,
          },
        };
      }
  
      case DELETE_CONTACT_LOADING: {
        return {
          ...state,
          deleteContact: {
            ...state.deleteContact,
            loading: true,
            error: null,
          },
        };
      }
  
      case DELETE_CONTACT_SUCCESS: {
        return {
          ...state,
          deleteContact: {
            ...state.deleteContact,
            loading: false,
            error: null,
          },
  
          getContacts: {
            ...state.getContacts,
            loading: false,
            data: state.getContacts.data.filter((item) => item.id !== payload),
            error: null,
          },
        };
      }
  
      case CREATE_CONTACT_FAIL:
        return {
          ...state,
          createContact: {
            ...state.createContact,
            loading: false,
            error: null,
          },
        };
      case CREATE_CONTACT_LOADING:
        return {
          ...state,
          createContact: {
            ...state.createContact,
            loading: true,
            error: null,
          },
        };
      case CREATE_CONTACT_SUCCESS:
        return {
          ...state,
          createContact: {
            ...state.createContact,
            loading: false,
            error: null,
            data: payload,
          },
  
          getContacts: {
            ...state.getContacts,
            loading: false,
            data: [payload, ...state.getContacts.data],
            error: null,
          },
        };
  
      case CREATE_CONTACT_FAIL:
        return {
          ...state,
          createContact: {
            ...state.createContact,
            loading: false,
            error: payload,
          },
        };
  
      case ACTION_TYPES.GET_APPOINTMENTS_LOADING:
        return {
          ...state,
          getContacts: {
            ...state.getContacts,
            loading: true,
            error: null,
          },
        };
  
      case ACTION_TYPES.GET_APPOINTMENTS_SUCCESS:
        return {
          ...state,
          getContacts: {
            ...state.getContacts,
            loading: false,
            data: payload,
            error: null,
          },
        };
  
      case ACTION_TYPES.GET_APPOINTMENTS_SUCCESS:
        return {
          ...state,
          getContacts: {
            ...state.getContacts,
            loading: false,
            error: payload,
          },
        };
  
      default:
        return state;
    }
  };
  
  export default contacts;