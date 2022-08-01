import logo from './logo.svg';
import './App.css';
import { Counter } from "../../reduxapp/src/features/Counter"
import { BitbucketApi } from './component/api';
import {WorldData} from './component/worldData'
import { BrowserRouter as Router, Switch, 
  Route, Redirect, Routes,} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<BitbucketApi />} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/worldData" element={<WorldData />} />
            
          </Routes>
      </Router>
    </div>
  );
}

export default App;
