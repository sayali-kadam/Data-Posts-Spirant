import AddPost from './AddPost';
import './App.css';
import EditPost from './EditPost';
import PostList from './PostList';
import {BrowserRouter, Route} from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1 style={{backgroundColor: 'Black', color: 'white', padding: '20px', width: '100vw'}}> Data Posts Spirant </h1>
      <BrowserRouter>
        <Route path='/' component={PostList} exact/>
        <Route path='/addpost' component={AddPost} exact/>
        <Route path='/editpost/:postid' component={EditPost} exact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
