import React, { Component } from 'react';
import './App.css';
import Data from './Data.js';
class App extends Component {
  constructor() {
    super();
    this.state = { url: "" }
  }
  newsTopic(url) {
    this.child.current.getAlert();
  }
  
  render() {
    return (
      <div className="App">
        <div><h4>RSS News Feeds</h4></div>
        <div className="topics">
          <ul>
            <li><button onClick={this.newsTopic.bind(this, 'http://feeds.reuters.com/reuters/INtopNews')}>Top News</button></li>
            <li><button onClick={this.newsTopic.bind(this, 'http://feeds.reuters.com/reuters/INbusinessNews')}>Business News</button></li>
            <li><button onClick={this.newsTopic.bind(this, 'http://feeds.reuters.com/reuters/INsouthAsiaNews')}>South Asia</button></li>
            <li><button onClick={this.newsTopic.bind(this, 'http://feeds.reuters.com/reuters/INworldNews')}>World</button></li>
            <li><button onClick={this.newsTopic.bind(this, 'http://feeds.reuters.com/reuters/INentertainmentNews')}>Entertainment</button></li>
            <li><button onClick={this.newsTopic.bind(this, 'http://feeds.reuters.com/reuters/INhollywood')}>Hollywood</button></li>
            <li><button onClick={this.newsTopic.bind(this, 'http://feeds.reuters.com/reuters/INsportsNews')}>Sports</button></li>
            <li><button onClick={this.newsTopic.bind(this, 'http://feeds.reuters.com/reuters/INcricketNews')}>Cricket</button></li>
            <li><button onClick={this.newsTopic.bind(this, 'http://feeds.reuters.com/reuters/INformulaOne')}>F1	</button></li>
            <li><button onClick={this.newsTopic.bind(this, 'http://feeds.reuters.com/reuters/INgolf')}>Golf</button></li>
            <li><button onClick={this.newsTopic.bind(this, 'http://feeds.reuters.com/reuters/INtechnologyNews')}>Technology</button></li>
            <li><button onClick={this.newsTopic.bind(this, 'http://feeds.reuters.com/reuters/INhealth')}>Health</button></li>
            <li><button onClick={this.newsTopic.bind(this, 'http://feeds.reuters.com/reuters/INlifestyle')}>Lifestyle</button></li>
            <li><button onClick={this.newsTopic.bind(this, 'http://feeds.reuters.com/reuters/INoddlyEnoughNews')}>Oddly Enough</button></li>
          </ul>
        </div>
        <div className="">
          <Data ref={this.child} />
        </div>
      </div>
    );
  }
}

export default App;
