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
import { BuyPage } from './Pages/BuyPage';
import { RechargePage } from './Pages/RechargePage';


import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './Provider/Auth'; 
import { AuthRoute } from './Provider/Auth';
import { TokenProvider } from './Provider/Token';
import { UserProvider } from './Provider/User';
import { CartProvider } from './Provider/Cart'; 

function App() {
  return ( 
    <BrowserRouter> 
      <div className="min-h-screen flex flex-col"> 
        <UserProvider>
          <TokenProvider>
            <CartProvider>
              <AuthProvider>
                <Header></Header>
                  <div className="flex-1 flex items-center justify-center mt-[125px]">
                    <Routes>
                      <Route path='/' element={ <HomePage/> }/>
                      <Route path='/Community' element={ <CommunityPage/> }/>
                      <Route path='/AboutUs' element={ <AboutUsPage/> }/>
                      <Route path='/Support' element={ <SupportPage/> }/>
                      <Route path='/detail' element={ <AuthRoute> <DetailPage/> </AuthRoute> }/>
                      <Route path='/LogIn' element={ <LogInPage/> }/>
                      <Route path='/CreateAnAccount' element={ <CreateProfilePage/> }/>
                      <Route path='/profile' element={ <AuthRoute> <ProfilePage/> </AuthRoute> }/>
                      <Route path='/buy' element={ <AuthRoute> <BuyPage/> </AuthRoute> }/>
                      <Route path='/Recharge' element={ <AuthRoute> <RechargePage/> </AuthRoute> }/>
                    </Routes>
                  </div>
                <Footer></Footer>
              </AuthProvider>  
            </CartProvider>
          </TokenProvider>  
        </UserProvider>
      </div>  
  </BrowserRouter> 
  )
}

export default App;
