import './styles.css';
import authWithEmailAndPassword from './components/Auth/Auth'


const email = 'test@email.com';
const password = 'testemail';


authWithEmailAndPassword(email, password)
         .then(token => {

            console.log(token);
      })
