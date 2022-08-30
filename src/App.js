import {Route, Routes} from 'react-router-dom';
import Navigation from './components/routes/navigation/navigation.component';
import Home from './components/routes/home/home.component';
import Authentification from './components/authentification/authentification.component';


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
        <Route path='/auth' element={<Authentification />} />
      </Route>
    </Routes>
  );
  
};

export default App;
