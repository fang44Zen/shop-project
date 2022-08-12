import {Route, Routes} from 'react-router-dom';
import Navigation from './components/routes/navigation/navigation.component';
import Home from './components/routes/home/home.component';
import SignIn from './components/routes/sign-in/sign-in.component';


const App= () => {


  const Shop = () =>{
    return(
      <h1>I am in the shop page</h1>
    )
  }

  return (
      
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home/>}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path='/sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
  
};

export default App;
