import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './Component/Loginform';
import RegisterForm from './Component/RegisterForm';
import Dashboard from './Component/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
