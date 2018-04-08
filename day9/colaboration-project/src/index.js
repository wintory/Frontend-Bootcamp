import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CardStack from './card-stack/App'
import BitCoin from './bitcoin/App'
import Recipe from './recipeapp/App'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, HashRouter, Route, Link } from 'react-router-dom';
ReactDOM.render(


    <BrowserRouter>
        <div>
            <Route path="/" component={App} />
            <Route path="/about" component={() => (<h1>about</h1>)} />
            <Route path="/job" component={() => (<h3>job</h3>)} />
            <Route path="/portfolio" component={() => (<h3>portfolio</h3>)} />
            <Route path="/skill" component={() => (<h3>skill</h3>)} />
            <Route path="/cardstack" component={CardStack} />
            <Route exact path="/bitcoin" component={BitCoin} />
            <Route exact path="/bitcoin/:name" component={BitCoin} />
            <Route path="/recipe" component={Recipe} />

        </div>
    </BrowserRouter>


    , document.getElementById('root'));
registerServiceWorker();
