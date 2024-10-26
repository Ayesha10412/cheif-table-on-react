
import './App.css'
import Header from './component/Header/Header'
import Banner from './component/Banner/Banner'
import OurRecipie from './component/OurRecipie/OurRecipie'

function App() {

  return (
    <>
<div className=''>
      
    {/* header section */}
<Header></Header>
    {/* banner section */}
<Banner></Banner>
    {/* our recipie section */}
    <OurRecipie></OurRecipie>
</div>

    </>
  )
}

export default App
