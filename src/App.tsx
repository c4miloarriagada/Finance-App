import { Router, Route, Routes } from '@solidjs/router'
import { Header } from './components/Header'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'

function App() {
  return (
    <div class="bg-slate-900  text-white">
    <main class='h-[100vh]'>
      <Router>
        <Routes>
          <Route path="/login" component={Login}/>
          <Route path="/home" component={Home} />
          <Route path="/*" component={Login}/>
        </Routes>
      </Router>
    </main>
    </div>
  )
}

export default App
