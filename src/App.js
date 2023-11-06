import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { HomePage } from './Pages/HomePage';
import { DetailPage } from './Pages/DetailPage';
import { LogInPage } from './Pages/LogInPage';
import { ProfilePage } from './Pages/ProfilePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './Provider/Auth';
import { AuthRoute } from './Provider/Auth';

function App() {
  return ( 
    <BrowserRouter> 
        <div className="min-h-screen flex flex-col">
          <Header></Header>
          <div className="flex-1">
            <AuthProvider>
              <Routes>
                <Route path='/' element={ <HomePage/>}/>
                <Route path='/detail' element={ <AuthRoute>
                  <DetailPage/>
                </AuthRoute>}/>
                <Route path='/LogIn' element={ <LogInPage/>}/>
                <Route path='/profile' element={ <AuthRoute>
                  <ProfilePage/>
                </AuthRoute>}/>
              </Routes>
            </AuthProvider> 
          </div>
          <Footer></Footer> 
        </div>  
    </BrowserRouter> 
  )
}

export default App;
