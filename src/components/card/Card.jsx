import s from './Card.module.scss'
import arrowIcon from '../../img/icons/arrow.svg'

const Card = (props) => {
  const { title, imgUrl } = props
  const width = props.width || 484
  const height = props.height || 704

  const imgSize = {
    width,
    height,
  }

  return (
    <div className={s.card}>
      <a href='#!'>
        <img style={imgSize} className={s.img} src={imgUrl} alt={title} />
      </a>
      <div className={s.text}>
        <a href='#!'>
          <h3 className={s.title}>{title}</h3>
        </a>
        <div>Explore Now!</div>
        <a href='#!'>
          <img className={s.arrow} src={arrowIcon} alt='arrow' />
        </a>
      </div>
    </div>
  )
}

export default Card
