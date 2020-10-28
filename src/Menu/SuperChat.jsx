import React, {useState} from 'react';

export const SuperChat = ({
                              auth,
                              firebase,
                              firestore,
                              useAuthState,
                              useCollectionData,
                          }) => {

    const [user] = useAuthState(auth);
    return (<div>
        {user ? <ChatRoom auth={auth}
                          firebase={firebase}
                          firestore={firestore}
                          useCollectionData={useCollectionData}
        /> : <SignIn auth={auth} firebase={firebase}/>}
    </div>)
};

const SignIn = ({auth, firebase}) => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
};

const ChatRoom = ({
                      auth,
                      firebase,
                      firestore,
                      useCollectionData,
                  }) => {
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, {idField: 'id'});
    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();
        const {uid, photoURL} = auth.currentUser;
        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        });
    }

    return (<>
        <div>
            {messages && messages.map(msg => {
                return (<ChatMessage auth={auth} key={msg.id} message={msg}/>)
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
    const messageClass = uid === props.auth.currentUser.uid ? 'sent' : 'received';
    return (<div className={`message ${messageClass}`}>
        <img src={photoURL}/>
        <p>{text}</p>
    </div>)
}

const SignOut = () => {
    return auth.currentUser && (<button onClick={() => auth.signOut()}>Sign Out</button>)
}
