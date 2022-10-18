import { initializeApp, cert, getApps } from "firebase-admin/app"
import {getFirestore} from "firebase-admin/firestore"

import serviceAccount from "../secrets.js" // in the folder above

export default function dbConnect() {
    //if(!alreadyConnected) {
        if(!getApps().length){
        initializeApp({
            credential: cert(serviceAccount)
        })
    }
    return getFirestore()
}
