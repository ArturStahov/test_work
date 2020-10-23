
const apiKey = "AIzaSyANfHvO5qRGNX3ddo2jq_87sy7Pu50QULM"




export default function authWithEmailAndPassword(email, password) {
  console.log(email, password);
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
    .then(data => data.idToken)
}

