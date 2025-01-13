'use client'
import { useTranslations } from 'next-intl'
import s from './AboutUs.module.css'

export default function AboutUs() {
    const t = useTranslations();
    return (
        <main>
            <div className={`container ${s.about__us}`}>
                <h2>
                    {t('header.aboutPage')}
                </h2>

                <div className={s.about__section}>
                    <div className={s.about__text}>
                        <p dangerouslySetInnerHTML={{__html: t('aboutUsPage.text1')}} />
                    </div>
                    <div className={s.about__img}>
                        <img src="/assets/img/aboutPage.png" alt="" />
                    </div>

                </div>

                <div className={s.about__section}>
                    <div className={s.about__img}>
                        <img src="/assets/img/nemiroff.svg" alt="" />
                    </div>
                    <div className={s.about__text}>
                    <p dangerouslySetInnerHTML={{__html: t('aboutUsPage.text2')}} />
                    </div>
                </div>
            </div>
        </main>
    )
}