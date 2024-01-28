import Header from './components/header/Header'
import Promo from './components/promo/Promo'
import Brads from './components/brands/Brands'
import NewArrivals from './components/newArrivals/NewArrivals'
import Favorite from './components/favorite/Favorite'
import Feedback from './components/feedback/Feedback'

function App() {
  return (
    <div className='App'>
      <Header />
      <Promo />
      <Brads />
      <NewArrivals />
      <Favorite />
      <Feedback />
    </div>
  )
}

export default App
