import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from "./pages/LandingPage"

import './assets/scss/style.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
