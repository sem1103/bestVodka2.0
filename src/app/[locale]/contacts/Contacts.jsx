'use client'
import { useTranslations } from 'next-intl'
import s from './Contacts.module.css'

export default function Contacts(){
    const t = useTranslations();
    return(
        <main>
            <h2 className='container'>
                {t('header.contactPage')}
            </h2>
            <div className={s.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.2981405424794!2d49.938945675444245!3d40.444678471435076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030633f5e78fd9d%3A0x19543bc0b888f021!2zQmVzdCAtIGbJmXJkaSDFn8mZeHNpIGZpcm1hc8Sx!5e1!3m2!1sru!2saz!4v1730885562116!5m2!1sru!2saz" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </main>
    )
}