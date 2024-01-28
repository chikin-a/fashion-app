import './brands.scss'
import hm from '../../img/brands/HM.png'
import obey from '../../img/brands/Obey.png'
import shopify from '../../img/brands/Shopify.png'
import lacoste from '../../img/brands/Lacoste.png'
import levis from '../../img/brands/Levis.png'
import amazon from '../../img/brands/Amazon.png'

const Brads = () => {
  return (
    <section className='brands'>
      <div className='container'>
        <div className='brands__row'>
          <a href='#!'>
            <img src={hm} alt='hm' />
          </a>
          <a href='#!'>
            <img src={obey} alt='obey' />
          </a>
          <a href='#!'>
            <img src={shopify} alt='shopify' />
          </a>
          <a href='#!'>
            <img src={lacoste} alt='lacoste' />
          </a>
          <a href='#!'>
            <img src={levis} alt='levis' />
          </a>
          <a href='#!'>
            <img src={amazon} alt='amazon' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Brads
