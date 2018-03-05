const initialState = {
  username: '',
  password: '',
  token: null
}

export default (state= initialState, action) => {

  switch(action.type) {
    case 'UPDATED_AUTH_FORM':
      return action.authFormData;

      case 'RESET_AUTH_FORM':
        return initialState;

        default:
          return state;
  }
}
