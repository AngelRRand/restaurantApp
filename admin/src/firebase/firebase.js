import firebase from 'firebase/compat/app' ;
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from './config';
 
class Firebase {
    constructor() {
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig)
 
 
        }
    }
}
 
 
const firebaseApp = new Firebase()
 
export default firebaseApp