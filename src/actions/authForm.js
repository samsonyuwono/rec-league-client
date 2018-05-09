export const updateAuthFormData = authFormData => {
  return {
    type: 'UPDATED_AUTH_FORM',
    authFormData
  }
}

export const resetAuthForm = () => {
  return {
    type: 'RESET_AUTH_FORM'
  }
}
