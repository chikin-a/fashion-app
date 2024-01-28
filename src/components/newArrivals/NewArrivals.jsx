import Card from '../card/Card'
import './newArrivals.scss'
import img1 from '../../img/images/01.jpg'
import img2 from '../../img/images/02.jpg'
import img3 from '../../img/images/03.jpg'

const NewArrivals = () => {
  const cardArr = [
    {
      title: 'Hoodies & Sweetshirt',
      imgUrl: img1,
      width: 484,
      height: 704,
    },
    {
      title: 'Coats & Parkas',
      imgUrl: img2,
      width: 484,
      height: 704,
    },
    {
      title: 'Tees & T-Shirt',
      imgUrl: img3,
      width: 484,
      height: 704,
    },
  ]

  return (
    <section className='new_arrivals'>
      <div className='container'>
        <div className='new_arrivals__header'>
          <h2 className='title'>
            <span>NEW ARRIVALS</span>
          </h2>
        </div>
        <div className='new_arrivals__cards'>
          {cardArr.map(({ title, imgUrl }) => (
            <Card title={title} imgUrl={imgUrl} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewArrivals
