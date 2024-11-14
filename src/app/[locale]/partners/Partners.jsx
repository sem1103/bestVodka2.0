
import s from './Partners.module.css'

export default function Partners(){
    return(
        <main>
            <div className='container'>
                <h2>Партнеры</h2>

                <div className={s.photo__wrapper}>
                    <div className={s.photo__item}>
                        <img src="/assets/img/nemiroff.svg" alt="" />
                        <h3>Компания "Nemiroff"</h3>
                        <a href="https://nemiroff.vodka/en/" target='_blank'></a>
                    </div>

                    <div className={s.photo__item}>
                        <img src="/assets/img/nemiroff.svg" alt="" />
                        <h3>Компания "Nemiroff"</h3>
                        <a href="https://nemiroff.vodka/en/" target='_blank'></a>
                    </div>
                </div>
            </div>
        </main>
    )
}