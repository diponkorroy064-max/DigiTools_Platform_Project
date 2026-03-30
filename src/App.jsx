import Navbar from './components/Navbar/Navbar'
import './App.css'
import Bannar from './components/Bannar/Bannar'
import Rating from './components/Rating/Rating'
import Footer from './components/Footer/Footer'
import Workflow from './components/Workflow/Workflow'
import StepCard from './components/StepCard/StepCard'
import Pricing from './components/Pricing/Pricing'


function App() {

  return (
    <>
      <Navbar></Navbar>

      <Bannar></Bannar>

      <Rating></Rating>

      

      <StepCard></StepCard>

      <Pricing></Pricing>

      <Workflow></Workflow>

      <Footer></Footer>
    </>
  )
}

export default App
