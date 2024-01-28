import s from './Feedback.module.scss'

const Feedback = () => {
  return (
    <section className={s.feedback}>
      <div className='container'>
        <h2 className={s.title}>
          JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
        </h2>
        <p className={s.descr}>
          Type your email down below and be young wild generation
        </p>
        <div className={s.send}>
          <input type='email' placeholder='Add your email here' />
          <button>SEND</button>
        </div>
      </div>
    </section>
  )
}

export default Feedback
