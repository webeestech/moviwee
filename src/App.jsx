import Navbar from "./components/Navbar"
import About from "./sections/About"
import Featured from "./sections/Featured"
import Feedback from "./sections/Feedback"
import Footer from "./sections/Footer"
import GetStarted from "./sections/GetStarted"
import Hero from "./sections/Hero"
import News from "./sections/News"
import WhatsNew from "./sections/WhatsNew"
import World from "./sections/World"



function App() {
  

  return (
    <div className="App bg-primary-100">
      <Navbar />
      <Hero />
      <About />
      <Featured />
      <GetStarted />
      <WhatsNew />
      <World />
      <News />
      <Feedback />
      <Footer />
    </div>
  )
}

export default App
