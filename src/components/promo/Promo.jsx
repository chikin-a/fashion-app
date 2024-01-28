import './promo.scss'
import promoImg from '../../img/categories/header-img.jpg'

const Promo = () => {
  return (
    <section className='promo'>
      <div className='container'>
        <div className='promo__content'>
          <div className='promo__text'>
            <div className='promo__title'>
              <span className='highlight'>
                <span>LET’S</span>
              </span>
              EXPLORE
              <span className='highlight-yellow'>
                <span>UNIQUE</span>
              </span>
              CLOTHES.
            </div>
            <div className='promo__descr'>
              Live for Influential and Innovative fashion!
            </div>
            <div className='promo__button-wrapper'>
              <a className='promo__button'>Shop Now</a>
            </div>
          </div>
          <div className='promo__img'>
            <img src={promoImg} alt='promo' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promo
