import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthStore } from "./store/useAuthStore";
import PageLoader from "./components/PageLoader";
import { Toaster } from "react-hot-toast";
function App() {

  const { checkAuth, isCheckingAuth, authUser } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth])

  if(isCheckingAuth) return <PageLoader />

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-8">
      {/* Animated Background Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.2)_0%,transparent_50%),radial-gradient(circle_at_40%_40%,rgba(30,58,138,0.4)_0%,transparent_50%)] animate-[float_20s_ease-in-out_infinite] z-0" />
      
      {/* Sparkle Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(2px_2px_at_20px_30px,rgba(255,255,255,0.3),transparent),radial-gradient(2px_2px_at_40px_70px,rgba(59,130,246,0.4),transparent),radial-gradient(1px_1px_at_90px_40px,rgba(99,102,241,0.5),transparent),radial-gradient(1px_1px_at_130px_80px,rgba(147,51,234,0.3),transparent)] bg-repeat bg-[size:200px_100px] animate-[sparkle_25s_linear_infinite] opacity-15 z-10" />
      
      {/* Centered Content Container */}
      <div className="relative z-20 text-white">
        <Routes>
          <Route path="/" element={authUser ? <ChatPage /> : <Navigate to="/login" />} />
          <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
          <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        </Routes>

        <Toaster />
      </div>
    </div>
  );
}

export default App;
