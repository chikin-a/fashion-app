import Card from '../card/Card'
import s from './Favorite.module.scss'
import img1 from '../../img/images/012.jpg'
import img2 from '../../img/images/022.jpg'

const Favorite = () => {
  const cardArr = [
    {
      title: 'Trending on instagram',
      imgUrl: img1,
      width: 834,
      height: 575,
    },
    {
      title: 'All Under $40',
      imgUrl: img2,
      width: 834,
      height: 575,
    },
  ]

  return (
    <section className={s.favorite}>
      <div className='container'>
        <div className={s.header}>
          <h2 className='title'>
            <span>Young’s Favourite</span>
          </h2>
        </div>
        <div className={s.cards}>
          {cardArr.map(({ title, imgUrl, width, height }) => (
            <Card title={title} imgUrl={imgUrl} width={width} height={height} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Favorite
