import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {
    Footer,
    Header,
} from './AppStyle';
import {Nav} from './Menu/Nav';
import {Blog} from './Menu/Blog';
import {Home} from './Menu/Home';
import {About} from './Menu/About';
import {SuperChat} from './Menu/SuperChat'

let mode = '';
location.hostname === 'localhost' ? mode = 'development' : mode = 'production';

const App = () => {

    return (<Router>
        <Header>
            <Nav/>
        </Header>
        <Switch>
            <Route exact path='/kswWebsite'
                   render={() => <Home mode={mode}/>}/>
            <Route path="/about" component={About}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/chat" component={SuperChat}/>
        </Switch>
        <Footer>
            <div>
                Copyright © 2020 Kim Sang Won. All right reserved.
            </div>
            <div>
                Contact to : ksw75811@gmail.com
            </div>
        </Footer>
    </Router>);
}

export default App;
