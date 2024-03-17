import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'
import Table from './components/Table/Table'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [tables, setTables] = useState([])

  const [currentCook, setCurrentCook] = useState([])


  const handleAddToCook = card => {
    // console.log(card)

    const isExist = tables.find(item => item.recipe_id == card.recipe_id);
    if (!isExist) {
      const newTables = [...tables, card];
      setTables(newTables);
    }
    else {
      toast("already exist")
    }
  }

  const handleAddToCurrentCook = idx =>{

    const prepareBtn = tables[idx];

    const newCurrentCook = [...currentCook, prepareBtn];

    setCurrentCook(newCurrentCook);

    const newTables = tables.filter((item, index) => index !== idx);

    setTables(newTables);
  }


  return (
    <>

      <Header></Header>
      <Banner></Banner>
      <ToastContainer></ToastContainer>

      <div className='container mx-auto my-5'>

        <div className="text-center my-24">
          <h2 className="text-2xl lg:text-4xl font-manrope font-extrabold mt-8 lg:mt-6 font-mulish">Our Recipes</h2>
          <p className="text-[#13131899] lg:mt-4 font-inter">Indulge in a symphony of flavors as you explore our curated collection of recipes, <br></br> each bearing the signature touch of our esteemed culinary artisans.</p>
        </div>

        <div className='grid grid-cols-3 gap-5'>

          <div className='col-span-2'>

            <Recipes handleAddToCook={handleAddToCook}></Recipes>

            <div className='grid grid-cols-2 gap-5'>

              <Card></Card>

            </div>

          </div>

          <div className='col-span-1'>

            <Table tables={tables} currentCook={currentCook} handleAddToCurrentCook={handleAddToCurrentCook}></Table>

          </div>

        </div>

      </div>

    </>
  )
}

export default App
