class AuthenticationConverter {

  mapperUserResponseToEntity(response) {
    const {
      id,
      nome,
      email,
    } = response

    const entity = {
      id,
      name: nome,
      email
    }

    return entity
  }

  mapperNewUserRequest(newUser) {
    const {
      email,
      password,
      name,
      phone,
      bloodType
    } = newUser

    const request = {
      "email": email,
      "senha": password,
      "nome": name,
      "telefone": phone,
      "tipo_sanguineo": bloodType
    }

    return request
  }
}


export default AuthenticationConverter