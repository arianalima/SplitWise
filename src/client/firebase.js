import { initializeApp } from 'firebase/app';
import config from '../config.js'

const firebase = initializeApp(config.connections.firebase);

export default firebase;