import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login/Login";
import Apply from "./components/pages/Apply/Apply";
import Step1 from "./components/pages/Apply/Step1/Step1";
import Step2 from "./components/pages/Apply/Step2/Step2";
import Step3 from "./components/pages/Apply/Step3/Step3";
import FindEmail from "./components/pages/FindEmail/FindEmail";
import FindPassword from "./components/pages/FindPassword/FindPassword";
import Notice from "./components/pages/Notice/Notice";
import Ask from "./components/pages/Ask/Ask";
import Faq from "./components/pages/Faq/Faq";
import MyInfo from "./components/pages/MyInfo/MyInfo";
import Donate from "./components/pages/Donate/Donate";
import BizInfo from "./components/pages/BizInfo/BizInfo";
import Introduction from "./components/pages/Introduction/Introduction";
import Terms from "./components/pages/Policy/Terms/Terms";
import Email from "./components/pages/Policy/Email/Email";
import Privacy from "./components/pages/Policy/Privacy/Privacy";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => setIsLoggedIn(true); // 로그인 상태 true로 업데이트
  const handleLogout = () => setIsLoggedIn(false); // 로그아웃 시 false로 업데이트

  return (
    <MainLayout isLoggedIn={isLoggedIn} onLogout={handleLogout}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/store">
          <Route path="auth" element={<Login onLogin={handleLogin} />} />
          <Route path="findEmail" element={<FindEmail />} />
          <Route path="findPwd" element={<FindPassword />} />
          <Route path="myinfo" element={<MyInfo />} />
        </Route>

        <Route path="/intro" element={<Introduction />} />

        <Route path="/bizinfo" element={<BizInfo />} />

        <Route path="/apply">
          <Route index element={<Apply />} />
          <Route path="step1" element={<Step1 />} />
          <Route path="step2" element={<Step2 />} />
          <Route path="step3" element={<Step3 />} />
        </Route>

        <Route path="/community">
          <Route path="notice" element={<Notice />} />
          <Route path="ask" element={<Ask />} />
          <Route path="faq" element={<Faq />} />
        </Route>

        <Route path="/donate" element={<Donate />} />

        <Route path="/policy">
          <Route path="terms" element={<Terms />} />
          <Route path="email" element={<Email />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
