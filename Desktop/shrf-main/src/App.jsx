import './App.css'
import Footer from './components/Footer'
import ForumInfo from './components/ForumInfo'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Intro from './components/Intro'
import Program from './components/Program'
import ProgressBar from './components/ProgressBar'
import Speakers from './components/Speakers'
import Sponsor from './components/Sponsors'

function App() {

  return (
    <div id='page'>
      <ProgressBar />
      <Header />
      <Intro />
      <ForumInfo />
      <Speakers />
      <Sponsor />
      <Gallery />
      <Program /> 
      <Footer />
    </div>
  )
}

export default App
