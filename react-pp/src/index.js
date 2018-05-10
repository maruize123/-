import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import PrimaryLayout from './PrimaryLayout';
import Order from './order';
import My from './MyOwen';
import img1 from './assets/images/14.png';
import img2 from './assets/images/12.png';
import img3 from './assets/images/13.png';
import img4 from './assets/images/15.png';
import './assets/css/icon.css'

const OldSchoolMenuLink = ({ label, to, icon, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    console.log('match', match),
    <div className={match ? 'active' : 'qqq'} >
      <div className="daohang">
        <Link to={to}>
         <i className={icon}></i>
          <div>{label}</div>
        </Link>
      </div>
    </div>
  )} />
)

ReactDOM.render((
  <Router>
    <div>
      <div className='app_in'>
        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="外卖" icon={'icon-icon-test iconfont' } />
        <OldSchoolMenuLink to="/find" label="发现" icon={'icon-discover iconfont'}/>
        <OldSchoolMenuLink to="/order" label="订单" icon={'icon-dingdan iconfont'} />
        <OldSchoolMenuLink to="/my" label="我的" icon={'icon-shouye iconfont'}  />
      </div>
      <Route path="/" exact component={App} />
      <Route path="/find" component={PrimaryLayout} />
      <Route path="/order" component={Order} />
      <Route path="/my" component={My} />
    </div>
  </Router>
), document.getElementById('root'))


registerServiceWorker();
