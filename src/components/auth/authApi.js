const apiKey = "AIzaSyANfHvO5qRGNX3ddo2jq_87sy7Pu50QULM"
const baseUrl = 'https://identitytoolkit.googleapis.com/v1/accounts'

export function authWithEmailAndPassword(email, password) {
  const options = {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(`${baseUrl}:signInWithPassword?key=${apiKey}`, options)
    .then(response => response.json())
    .then(data => {
      const message = data.error && data.error.message || "Authorization success! Welcome"
      const authorized = !data.error && true || false;
      return { message, authorized, email };
    })
}

export function registrationWithEmailAndPassword(email, password) {
  const options = {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(`${baseUrl}:signUp?key=${apiKey}`, options)
    .then(response => response.json())
    .then(data => {
      const message = data.error && data.error.message || "Registration success! Welcome"
      const registered = !data.error && true || false;
      return { message, registered, email };
    })
}

