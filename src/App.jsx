import Navbar from './components/Navbar/Navbar'
import './App.css'
import Bannar from './components/Bannar/Bannar'
import Rating from './components/Rating/Rating'
import Footer from './components/Footer/Footer'
import Workflow from './components/Workflow/Workflow'
import StepCard from './components/StepCard/StepCard'
import Pricing from './components/Pricing/Pricing'
import Tool from './components/Tool/Tool'
import { Suspense } from 'react'

const fetchTools = async () => {
  const res = await fetch('./json/data.json');
  return res.json();
}

function App() {
  const promiseTools = fetchTools();
  // console.log(promiseTools);

  return (
    <>
      <Navbar></Navbar>

      <Bannar></Bannar>

      <Rating></Rating>

      <Suspense fallback={<span>all tools loading...</span>}>
        <Tool promiseTools={promiseTools}></Tool>
      </Suspense>

      <StepCard></StepCard>

      <Pricing></Pricing>

      <Workflow></Workflow>

      <Footer></Footer>
    </>
  )
}

export default App
