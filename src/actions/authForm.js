export const updateAuthFormData = authFormData => {
  return {
    type: 'UPDATED_AUTH_FORM',
    authFormData
  }
}

export const resetPlayerForm = () => {
  return {
    type: 'RESET_AUTH_FORM'
  }
}
