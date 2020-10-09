import React, {useState} from 'react';
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyCPrbWsdj2I5inDtPP43v9yfDxSFdwOH5w",
    authDomain: "kswwebsite-47f2d.firebaseapp.com",
    databaseURL: "https://kswwebsite-47f2d.firebaseio.com",
    projectId: "kswwebsite-47f2d",
    storageBucket: "kswwebsite-47f2d.appspot.com",
    messagingSenderId: "785027672767",
    appId: "1:785027672767:web:32b8487bada87479a4f40a",
    measurementId: "G-WKC6EC5JRV"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export const SuperChat = () => {
    const [user] = useAuthState(auth);

    return (<div>
        {user ? <ChatRoom/> : <SignIn/>}
    </div>)
};

const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
};

const ChatRoom = () => {
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, {idField: 'id'});
    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();
        const {uid, photoURL} = auth.currentUser;
        await messagesRef.add({
            text : formValue,
            createdAt : firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        });
    }

    return (<>
        <div>
            {messages && messages.map(msg => {
                return(<ChatMessage key={msg.id} message={msg}/>)
            })}
        </div>
        <form onSubmit={sendMessage}>
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
            <button type={"submit"}>전송</button>
        </form>
    </>);
};

const ChatMessage = (props) => {
    console.log(props);
    const {text, uid, photoURL} = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (<div className={`message ${messageClass}`}>
        <img src={photoURL}/>
        <p>{text}</p>
    </div>)
}

const SignOut = () => {
    return auth.currentUser && (<button onClick={() => auth.signOut()}>Sign Out</button>)
}