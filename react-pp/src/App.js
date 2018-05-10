import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Carousel } from 'antd';
import Swiper from './assets/plugin/swiper-4.2.0.min.js'
import './assets/plugin/swiper-4.2.0.min.css';
import PrimaryLayout from './PrimaryLayout';
import { getSwiper,getSwiperTwo } from './assets/js/ajax.js';
import './assets/css/icon.css';
import { Anchor,Rate,BackTop   } from 'antd';
import 'antd/dist/antd.css';
import zzz from './assets/images/zzzz.png';
//组件es6Class
class HelloMessage extends React.Component {
  
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
};
//js函数组件
function Welcome(props) {
  return <h1>hello,{props.name}</h1>
};
//
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
//
const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    console.log('match', match),
    <div className={match ? 'active' : ''}>
      <Link to={to}>{label}</Link>
    </div>
  )} />
)

const Home = () => (
  <div>
HOME
  </div>
)

const About = () => (
  <div>
    <Clock/>
  </div>
)
const isD = false;
var current = 0


class Sliders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {listM: [],listMTwo: []};
  }
  componentDidMount() {
    getSwiper().then(res=>{
      console.log(res.data)
      setTimeout(() => {
        this.setState({
          listM: res.data
        });
      });
    })
    getSwiperTwo().then(res=>{
      console.log(res.data)
      setTimeout(() => {
        this.setState({
          listMTwo: res.data
        });
      });
    })
    var swiperItem = document.getElementsByClassName("name");
    var windowW = window.innerWidth;
    var circle = document.getElementById("circle");
    var swiperSlide = document.getElementsByClassName("swiper-slide");
    console.log('swiperItem',swiperItem,swiperItem.length);
    console.log('swiperSlide',swiperSlide)
    var windowW = window.innerWidth;
    var wid = (windowW - 60) / 5 + 'px';
    // for (let i = 0; i < swiperItem.length; i++) {
    //   swiperItem[i].style.width = (windowW - 60) / 5 + 'px';
    //   console.log('swiperItem',swiperItem[i].width)
    // }
   
    // swiperItem.style.width = (windowW - 60) / 5 + 'px';
    var swiper = new Swiper('.swiper-container', {
      pagination: {                                 
        el: '.swiper-pagination',
        type: 'custom', 

      },
    });

  } 
  handleClick(val) {
    console.log('aaa', val)
  }


  render() {
    var that = this;
    var windowW = window.innerWidth;
    var wid = (windowW - 60) / 5 + 'px';
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
          {
            this.state.listM.map(function(item){
              return <div className="name" style={{width: wid}}  key={item.id} id="name" onClick={that.handleClick.bind(this, 'q')}>
              <img className="foot_img" src={require('./assets/images/chicken.png')} alt="a" />
              <div>{item.name}</div>
            </div>
            })
          }
          </div>
          <div className="swiper-slide">
          {
            this.state.listMTwo.map(function(item){
              return <div className="name" style={{width: wid}}  key={item.id} id="name" onClick={that.handleClick.bind(this, 'q')}>
              <img className="foot_img" src={require('./assets/images/chicken.png')} alt="a" />
              <div>{item.name}</div>
            </div>
            })
          }
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
};

let names = ['肯德基', '仟吉', '仟吉', '肯德基', '肯德基'];

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className='search_top'>
          <div className="adress">
            <div>街道口</div>
            <div>30° 晴天</div>
          </div>
          <Anchor className="Anchor">
          <div className="search_input">
            <input className="input" placeholder='搜索商家、商品名称' type="text" />
          </div>
          </Anchor>
          <div className="history_eat">
            {
              names.map(function (name, index) {
                return <div key={index}>{name}</div>
              })
            }
          </div>
        </div>
        <div className='swiper'>
          <Sliders />

        </div>
        <div className="o_title">品质优选</div>
        <div className="optimization">
          <div className="optimization_in">
            <img src={zzz} alt=""/>
            <div>二十五块半</div>
          </div>
          <div className="optimization_in">
            <img src={zzz} alt=""/>
            <div>二十五块半</div>
          </div>
          <div className="optimization_in">
            <img src={zzz} alt=""/>
            <div>二十五块半</div>
          </div>
          <div className="optimization_in">
            <img src={zzz} alt=""/>
            <div>二十五块半</div>
          </div>
        </div>
        <div className="line"></div>
        <div className="storeList">
          <div className="recommend">推荐商家</div>
          <div className="storeList_in">
            <img src={require('./assets/images/fan.png')} alt=""/>
            <div className="info">
              <div className="storeName">儒汉</div>
              <div>
                <Rate disabled defaultValue={5}/>
                <span>4.9</span>
                <span>月售273</span>
              </div>
              <div>
                起送20￥|配送费3.5
              </div>
              <div>
                川湘菜
              </div>
              <div>
                超级会员
              </div>
            </div>
          </div>

          <div className="storeList_in">
            <img src={require('./assets/images/fan.png')} alt=""/>
            <div className="info">
              <div className="storeName">儒汉</div>
              <div>
                <Rate disabled defaultValue={5}/>
                <span>4.9</span>
                <span>月售273</span>
              </div>
              <div>
                起送20￥|配送费3.5
              </div>
              <div>
                川湘菜
              </div>
              <div>
                超级会员
              </div>
            </div>
          </div>

          <div className="storeList_in">
            <img src={require('./assets/images/fan.png')} alt=""/>
            <div className="info">
              <div className="storeName">儒汉</div>
              <div>
                <Rate disabled defaultValue={5}/>
                <span>4.9</span>
                <span>月售273</span>
              </div>
              <div>
                起送20￥|配送费3.5
              </div>
              <div>
                川湘菜
              </div>
              <div>
                超级会员
              </div>
            </div>
          </div>

                  <div className="storeList_in">
            <img src={require('./assets/images/fan.png')} alt=""/>
            <div className="info">
              <div className="storeName">儒汉</div>
              <div>
                <Rate disabled defaultValue={5}/>
                <span>4.9</span>
                <span>月售273</span>
              </div>
              <div>
                起送20￥|配送费3.5
              </div>
              <div>
                川湘菜
              </div>
              <div>
                超级会员
              </div>
            </div>
          </div>

        </div>
        
    <BackTop visibilityHeight="100"/>
        {/* <Router>
          <div>
            <div className='aa'>
              <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
              <OldSchoolMenuLink to="/about" label="About" />
            </div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Router> */}
      </div>
    );
  }
}

export default App;
