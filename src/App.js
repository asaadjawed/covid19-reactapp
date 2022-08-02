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
          <Route exact path="/" element={<WorldData />} />
          <Route path="/bitbucketApi" element={<BitbucketApi />} />
            
          </Routes>
      </Router>
    </div>
  );
}

export default App;
