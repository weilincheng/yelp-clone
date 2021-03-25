import React from 'react';
import Home from './routes/Home';
import RestaurantDetailPage from './routes/RestaurantDetailPage';
import UpdatePage from './routes/UpdatePage';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

const App = () => {
    return <div>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/restaurant/:id/update" component={UpdatePage}/>
                <Route exact path="/restaurant/:id" component={RestaurantDetailPage}/>
            </Switch>
        </Router>
    </div>;
};

export default App;