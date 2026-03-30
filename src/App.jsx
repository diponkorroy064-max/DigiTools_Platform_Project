import Navbar from './components/Navbar/Navbar'
import './App.css'
import Bannar from './components/Bannar/Bannar'
import Rating from './components/Rating/Rating'
import Footer from './components/Footer/Footer'
import Workflow from './components/Workflow/Workflow'
import StepCard from './components/StepCard/StepCard'
import Pricing from './components/Pricing/Pricing'
import Tool from './components/Tool/Tool'
import { Suspense, useState } from 'react'
import { ToastContainer} from 'react-toastify';

const fetchTools = async () => {
  const res = await fetch('./json/data.json');
  return res.json();
}

function App() {
  const promiseTools = fetchTools();
  // console.log(promiseTools);

  const [addingCart, setAddingCart] = useState([]);
  // console.log(addingCart);

  return (
    <>
      <Navbar addingCart={addingCart}></Navbar>

      <Bannar></Bannar>

      <Rating></Rating>

      <Suspense fallback={<span>all tools loading...</span>}>
        <Tool promiseTools={promiseTools} addingCart={addingCart} setAddingCart={setAddingCart}></Tool>
      </Suspense>

      <StepCard></StepCard>

      <Pricing></Pricing>

      <Workflow></Workflow>

      <Footer></Footer>

      <ToastContainer />
    </>
  )
}

export default App
