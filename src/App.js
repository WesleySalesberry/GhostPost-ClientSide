import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { NavBar } from './components/Nav/NavBar';
import { AllPost } from './pages/AllPost/AllPost';
import { CreatePost } from './pages/Post/CreatePost';
import { Display } from './pages/DisplayBoastRoast/Display';
import { Sorted } from './pages/SortedPost/Sorted'
import { Remove } from './pages/RemovePost/Remove';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={AllPost} />
        <Route exact path="/post" component={CreatePost}/>
        <Route exact path="/display" component={Display}/>
        <Route exact path="/sorted" component={Sorted} />
        <Route exact path="/remove/:magicstring" component={Remove}/>
      </Switch>
    </Router>
  );
}

export default App;
