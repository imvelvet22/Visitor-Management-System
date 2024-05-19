import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element = {<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </BrowserRouter>

    </div>
  )
}