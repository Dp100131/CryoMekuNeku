import { Header } from './Components/Header';
import { Footer } from './Components/Footer';

import { HomePage } from './Pages/HomePage';
import { DetailPage } from './Pages/DetailPage';
import { LogInPage } from './Pages/LogInPage';
import { ProfilePage } from './Pages/ProfilePage';
import { CreateProfilePage } from './Pages/CreateProfilePage';
import { CommunityPage } from './Pages/CommunityPage';
import { AboutUsPage } from './Pages/AboutUsPage';
import { SupportPage } from './Pages/SupportPage';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './Provider/Auth';
import { UsersProvider } from './Provider/Users';
import { AuthRoute } from './Provider/Auth';

function App() {
  return ( 
    <BrowserRouter> 
        <div className="min-h-screen flex flex-col">
          <Header></Header>
          <div className="flex-1 flex items-center justify-center mt-[50px]">
            <UsersProvider>
              <AuthProvider>
                <Routes>
                  <Route path='/' element={ <HomePage/>}/>
                  <Route path='/Community' element={ <CommunityPage/>}/>
                  <Route path='/AboutUs' element={ <AboutUsPage/>}/>
                  <Route path='/Support' element={ <SupportPage/>}/>
                  <Route path='/detail' element={ <AuthRoute>
                    <DetailPage/>
                  </AuthRoute>}/>
                  <Route path='/LogIn' element={ <LogInPage/>}/>
                  <Route path='/CreateAnAccount' element={ <CreateProfilePage/>}/>
                  <Route path='/profile' element={ <AuthRoute>
                    <ProfilePage/>
                  </AuthRoute>}/>
                </Routes>
              </AuthProvider>
            </UsersProvider> 
          </div>
          <Footer></Footer> 
        </div>  
    </BrowserRouter> 
  )
}

export default App;
