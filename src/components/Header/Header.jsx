'use client'
import Link from 'next/link'
import s from './Header.module.css'
import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter, useSelectedLayoutSegment } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { startTransition } from 'react';


export default function Header() {
    const pathname = usePathname();
    let lang = useLocale();
    const segm = useSelectedLayoutSegment()
    const t = useTranslations();
    const router = useRouter();
    const notificationRef = useRef(null)
    

    const [headerFixed, setHeaderFixed] = useState(false);
    const isActive = (path) => segm === path;


    const burgerMenuHandler = () => {
        document.body.classList.toggle(s.active__burger)
        if (!document.body.classList.contains(s.active__burger)) {
            document.body.classList.add(s.deactive__burger)
        } else document.body.classList.remove(s.deactive__burger)
    }

    const scrollHandler = () => {
        if (window.scrollY > 0) setHeaderFixed(true)
        else setHeaderFixed(false)
    }


    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
    }, []);


    const changeLanguage = (lg) => {
        let language = lg;
        if (!pathname) return '/';
        const segment = pathname.split('/');
        segment[1] = language;
        const newUrl = segment.join('/');
        startTransition(() => {
            router.push(newUrl);
        });
    };

    

    return (
        <>
       <div className={s.notification} ref={notificationRef}>
                <p>{t('header.notification')}</p>
            </div>
        <header className={`${s.header} ${headerFixed ? s.fixed : ''}`} style={{top: notificationRef?.current?.clientHeight + 'px'}}>
        
            <nav>
                <Link href={`/${lang}`} className={s.logo}>
                    <img src="/assets/img/logo.svg" alt="" width={'120px'} />
                </Link>
                <ul>
                    <li><Link
                        className={isActive(null) ? s.active : ''}
                        href={`/${lang}`} onClick={() => burgerMenuHandler()}>{t('header.homePage')}</Link></li>
                    <li><Link
                        className={isActive('products') ? s.active : ''}
                        href={`/${lang}/products`} onClick={() => burgerMenuHandler()}>{t('header.productsPage')}</Link></li>
                    <li><Link
                        className={isActive('partners') ? s.active : ''}
                        href={`/${lang}/partners`} onClick={() => burgerMenuHandler()}>{t('header.partnersPage')}</Link></li>
                    <li><Link
                        className={isActive('contacts') ? s.active : ''}
                        href={`/${lang}/contacts`} onClick={() => burgerMenuHandler()}>{t('header.contactPage')}</Link></li>
                    <li><Link
                        className={isActive('aboutUs') ? s.active : ''}
                        href={`/${lang}/aboutUs`} onClick={() => burgerMenuHandler()}>{t('header.aboutPage')}</Link></li>
                    <li><a href='https://wa.me/994502016362' target='_blank' className='button' onClick={() => burgerMenuHandler()}>{t('header.contactUsBtn')}</a></li>
                    <li className={s.lang__switch}>
                        <button className={`${lang == 'az' ? s.az : lang == 'ru' ? s.ru : s.en}`}>
                            {lang == 'az' ? 'AZ' : lang == 'ru' ? 'RU' : 'EN'}
                        </button>
                        <ul className={s.langs}>
                            {
                                lang != 'az' &&
                                <li>
                                    <button className={s.az} onClick={() => changeLanguage('az')}>
                                        AZ
                                    </button>
                                </li>
                            }
                            {
                                lang != 'en' &&
                                <li>
                                    <button className={s.en} onClick={() => changeLanguage('en')}>
                                        EN
                                    </button>
                                </li>
                            }
                            {
                                lang != 'ru' &&
                                <li>
                                    <button className={s.ru} onClick={() => changeLanguage('ru')}>
                                        RU
                                    </button>
                                </li>
                            }
                        </ul>
                    </li>
                </ul>


                <div className={s.burger}>
                    <div className={s.burger__btn} onClick={() => burgerMenuHandler()}>
                        <hr className={s.stick} />
                        <hr className={s.stick} />
                        <hr className={s.stick} />
                    </div>
                </div>
            </nav>
         
        </header>
        </>
    )
}



