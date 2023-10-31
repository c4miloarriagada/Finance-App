import { Router, Route, Routes } from '@solidjs/router'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
  return (
    <div class="bg-slate-900 h-screen text-white">
    <Header/>
      <Router>
        <Routes>
          <Route path="/" component={() => <></>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
