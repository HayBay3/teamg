import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as firebase from "firebase";
import "firebase/firestore";
import {Alert} from 'react-native';


//Sign up with email and password
export async function registration(email, password, lastName, firstName, userType) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);

    const currentUser = firebase.auth().currentUser;
    const falseArr= new Array(10).fill(false);
    let defaultImage = 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'

    const db = firebase.firestore();
    db.collection("users")
      .doc(currentUser.uid)
      .set({
        email: currentUser.email,
        lastName: lastName,
        firstName: firstName,
        userType: userType,
        mathScores:falseArr ,
        logicScores: falseArr,
        imageUrl: defaultImage,
        students:[],

      });
  } catch (err) {
    Alert.alert("There is something wrong!!!!", err.message);
  }
}

export async function signIn(email, password) {
  try {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}
export async function loggingOut() {
  await firebase.auth().signOut();
  navigation.navigate("WelcomePage");
}

export async function resetPassword(email) {
  try {
    const user = await firebase
      .auth()
      .sendPasswordResetEmail(email);
    Alert.alert("We are sending a password reset link to your email.")
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}

export const deleteUser = async() => {
  const user = firebase.auth().currentUser;
  const db = firebase.firestore();
  try{
   await user.delete();
   console.log(user.uid)
   await db.collection('users').doc(user.uid).delete();
    Alert.alert("Your account has been deleted permanently.")
  }catch(err){
    Alert.alert("There is an error." , err.message)
  }
}

export const updateImageUrl = async(selectedImage, userUID) => {
  let userDocument = await firebase.firestore()
  .collection('users')
  .doc(userUID)
  .get();
  userDocument.ref.update({
    imageUrl: selectedImage
  })
}