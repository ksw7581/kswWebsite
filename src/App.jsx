import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
    Footer,
    Header,
} from './AppStyle';
import {Nav} from './Menu/Nav';
import {Home} from './Menu/Home';
import {About} from './Menu/About';
import {Blog} from './Menu/Blog';
import {Board} from './Menu/Board';

const App = () => {

    return (<Router>
        <Header>
            <Nav />
        </Header>
        <Switch>
            <Route exact path='/kswWebsite' component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/board" component={Board} />
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