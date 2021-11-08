import "./App.css";
import MovieInfo from "./movieInfo";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchFeature from "./searchFeature";

function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter>
      
        <Switch >
        <Route path="/" exact component={MovieInfo} />
        <Route path="/search"  component={SearchFeature} />
        
        </Switch>
    
      </BrowserRouter>
      
    </div>
  );
}

export default App;
