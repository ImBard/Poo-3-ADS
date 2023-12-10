import Navbar from './components/Navbar'
import Router from './routes/routes'

function App() {

  return (
    <div className="h-full relative">
      <main>
        <Navbar />
        <Router />
      </main>
    </div>
  )
}

export default App
