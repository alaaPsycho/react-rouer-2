import {BrowserRouter,Route,Switch,Link } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Blog from './Blog';
import Details from './Details';

function App() {
  return (
    <>
    <h1 className='text-center'>gallery</h1>
    <BrowserRouter>
    <Link to='/Blog' className='mx-4'>Blog</Link>
    <Switch>
      <Route path='/Blog' exact children={<Blog/>}/>
               <Route path='/Details/:id' render={(props)=><Details {...props}/>}/>



    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
