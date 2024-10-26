
import './App.css'
import Header from './component/Header/Header'
import Banner from './component/Banner/Banner'
import OurRecipies from './component/OurRecipie/OurRecipies'
import Recipies from './component/Recipie/Recipies'
import Sidebar from './component/sidebar/Sidebar'

function App() {

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
<Recipies></Recipies>


      {/* sidebar */}

<Sidebar></Sidebar>

    </section>
</div>

    </>
  )
}

export default App
