

import { SignOutModalProvider } from "./context/SignOutModalContext";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import LandingPage from "./components/LandingPage/LandingPage";
import Profile from "./components/Profile/Profile";
import DashboardProfile from "./components/DashboardProfile/DashboardProfile";
import TradingProfile from "./components/TradingProfile/TradingProfile";
import Portfolio from "./components/Portfolio/Portfolio";
import PortfolioMomentaneo from "./components/PortfolioMomentaneo/PortfolioMomentaneo";
import AcademyProfile from "./components/AcademyProfile/AcademyProfile";
import ArticleDetail from "./components/ArticleDetail/ArticleDetail";
import Membership from "./components/Membership/Membership";
import UserProfile from "./components/UserProfile/UserProfile";
import Setting from "./components/Setting/Setting";
import SignOut from "./components/SignOut/SignOut";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  console.log
  return (
        <>
            <BrowserRouter>
              <SignOutModalProvider>
                  <Routes>
                    <Route path="/" element={<LandingPage />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="/dashboardProfile" element={<DashboardProfile />}/>
                    <Route path="/tradingProfile" element={<TradingProfile />}/>
                    <Route path="/portfolio" element={<Portfolio />}/>
                    <Route path="/portfolioMomentaneo" element={<PortfolioMomentaneo />}/>
                    <Route path="/academyProfile" element={<AcademyProfile />}/>
                    <Route path="/article/:title" element={<ArticleDetail />} />
                    <Route path="/membership" element={<Membership />}/>
                    <Route path="/userProfile" element={<UserProfile />}/>
                    <Route path="/setting" element={<Setting />}/>
                    <Route path="/signOut" element={<SignOut />}/>
                  </Routes>
                </SignOutModalProvider>
            </BrowserRouter>
        </>
    )
}

export default App
