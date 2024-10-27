
import './App.css'
import Header from './component/Header/Header'
import Banner from './component/Banner/Banner'
import OurRecipies from './component/OurRecipie/OurRecipies'
import Recipies from './component/Recipie/Recipies'
import Sidebar from './component/sidebar/Sidebar'
import { useState } from 'react'

function App() {

  const [recipieQueue, setRecipieQueue] =useState([])

const addRecipieQueue = (recipie) =>{

const isExist = recipieQueue.find(
  prevoiusRecipe =>prevoiusRecipe.recipie_id === recipie.recipie_id
)
if(!isExist){
  const newRecipieQueue = [...recipieQueue, recipie];
  setRecipieQueue(newRecipieQueue);
}
else{
  alert('Recipe already exist in the queue')
}

}
const [preparedRecipie, setPreparedRecipie] = useState([])

const handleCurrentCooking= id =>{
// find which recipe to remove
const deleteRecipe = recipieQueue.find(recipe=> recipe.recipie_id === id)
// remove from want to cook table
const updatedQueue = recipieQueue.filter(recipe=> recipe.recipie_id!==id)
setRecipieQueue(updatedQueue)
setPreparedRecipie([...preparedRecipie, deleteRecipe])



}


  return (
    <>
<div className=''>
      
    {/* header section */}
<Header></Header>
    {/* banner section */}
<Banner></Banner>
    {/* our recipie section */}
    <OurRecipies></OurRecipies>

    <section className='mt-16 flex flex-col md:flex-row gap-6'>
      {/* --->cards section*/}
<Recipies addRecipieQueue={addRecipieQueue}></Recipies>


      {/* sidebar */}

<Sidebar recipieQueue={recipieQueue} handleCurrentCooking={handleCurrentCooking} 
preparedRecipie={preparedRecipie}></Sidebar>

    </section>
</div>

    </>
  )
}

export default App
