import React, {useState}from 'react';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import {
//     Footer,
//     Header,
// } from './AppStyle';
// import {Nav} from './Menu/Nav';
// import {Blog} from './Menu/Blog';
// import {Home} from './Menu/Home';
// import {About} from './Menu/About';
// import {SuperChat} from './Menu/SuperChat'
// import {BlogContent} from "./Menu/BlogContent";
//
// import firebase from "firebase/app";
// import 'firebase/firestore';
// import 'firebase/auth';
//
// import {useAuthState} from "react-firebase-hooks/auth";
// import {useCollectionData} from "react-firebase-hooks/firestore";
//
// firebase.initializeApp({
//     apiKey: "AIzaSyCPrbWsdj2I5inDtPP43v9yfDxSFdwOH5w",
//     authDomain: "kswwebsite-47f2d.firebaseapp.com",
//     databaseURL: "https://kswwebsite-47f2d.firebaseio.com",
//     projectId: "kswwebsite-47f2d",
//     storageBucket: "kswwebsite-47f2d.appspot.com",
//     messagingSenderId: "785027672767",
//     appId: "1:785027672767:web:32b8487bada87479a4f40a",
//     measurementId: "G-WKC6EC5JRV"
// });
//
// const auth = firebase.auth();
// const firestore = firebase.firestore();
//
// let mode = '';
// location.hostname === 'localhost' ? mode = 'development' : mode = 'production';

const App = () => {

    // const [blogContent, setBlogContent] = useState({});

    // return (<Router basename={'/kswWebsite'}>
    //     <Header>
    //         <Nav/>
    //     </Header>
    //     <Switch>
    //         <Route exact path='/'
    //                render={() => <Home mode={mode}/>}/>
    //         <Route path="/about"
    //                render={() => <About mode={mode}/>}
    //         />
    //         <Route path="/blogs"
    //                render={() => <Blog
    //                    firestore={firestore}
    //                    useCollectionData={useCollectionData}
    //                    setBlogContent={setBlogContent}
    //                />}
    //         />
    //         <Route path="/blog/:id"
    //                render={() => <BlogContent
    //                    firestore={firestore}
    //                    useCollectionData={useCollectionData}
    //                    Blog={blogContent}
    //                />}
    //         />
    //         <Route path="/chat"
    //                render={() => <SuperChat
    //                    auth={auth}
    //                    firebase={firebase}
    //                    firestore={firestore}
    //                    useAuthState={useAuthState}
    //                    useCollectionData={useCollectionData}
    //                />}/>
    //     </Switch>
    //     <Footer>
    //         <div>
    //             Copyright © 2020 Kim Sang Won. All right reserved.
    //         </div>
    //         <div>
    //             Contact to : ksw75811@gmail.com
    //         </div>
    //     </Footer>
    // </Router>);

    return <div>Hello World</div>

}

export default App;
