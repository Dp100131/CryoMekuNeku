import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { HomePage } from './Pages/HomePage';
import { DetailPage } from './Pages/DetailPage';
import { LogInPage } from './Pages/LogInPage';
import { ProfilePage } from './Pages/ProfilePage';
import {HashRouter, Routes, Route} from 'react-router-dom'

function App() {
  return ( 
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Header></Header>
        <div className='flex-1'>
            <Routes>
              <Route path='/' element={ <HomePage/>}/>
              <Route path='/detail' element={ <DetailPage/>}/>
              <Route path='/LogIn' element={ <LogInPage/>}/>
              <Route path='/profile' element={ <ProfilePage/>}/>
            </Routes> 
        </div>
        <Footer></Footer>
      </div> 
    </HashRouter> 
  )
}

export default App;
