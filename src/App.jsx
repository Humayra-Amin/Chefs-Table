// import { useState } from 'react'

import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'
import Table from './components/Table/Table'

function App() {

  const [tables, setTables] = useState([])

  const handleAddToCook = card =>{
    // console.log(card)
    const newTables = [...tables, card];
    setTables(newTables);
  }

  return (
    <>

      <Header></Header>
      <Banner></Banner>


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

            <Table tables={tables}></Table>

          </div>

        </div>

      </div>

    </>
  )
}

export default App
