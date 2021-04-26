import { firebaseAuth } from "./firebase"

const getUsers = async () => {
  const snapshot = firebaseAuth.collection("users").get()
  snapshot.docs.forEach(doc => console.log(`doc.data()`, doc.data()))
}

export { getUsers }
