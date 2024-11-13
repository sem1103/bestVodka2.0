'use client'
import Link from 'next/link'
import s from './Header.module.css'
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';


export default function Header() {
    const pathname = usePathname(); 

    const [headerFixed, setHeaderFixed] = useState(false);
    const isActive = (path) => pathname === path;

    
    const burgerMenuHandler = () =>{
        document.body.classList.toggle(s.active__burger)
        if(!document.body.classList.contains(s.active__burger)){
            document.body.classList.add(s.deactive__burger)
        } else  document.body.classList.remove(s.deactive__burger)
    }

    const scrollHandler = () => {
        if (window.scrollY > 0) setHeaderFixed(true)
        else setHeaderFixed(false)
      }
    

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
    }, []);


    return (
        <header className={`${s.header} ${headerFixed ? s.fixed : ''}`} >

            <nav>
                <Link href='/' className={s.logo}>
                    <img src="./assets/img/logo.svg" alt="" width={'120px'} />
                </Link>
                <ul>
                    <li><Link
                    className={isActive('/') ? s.active : ''}
                     href='/' onClick={() => burgerMenuHandler()}>Главная</Link></li>
                    <li><Link
                    className={isActive('/products') ? s.active : ''}
                    href='/products' onClick={() => burgerMenuHandler()}>Продукция</Link></li>
                    <li><Link
                    className={isActive('/partners') ? s.active : ''}
                    href='/partners' onClick={() => burgerMenuHandler()}>Партнеры</Link></li>
                    <li><Link 
                    className={isActive('/contacts') ? s.active : ''}
                    href='/contacts' onClick={() => burgerMenuHandler()}>Контакты</Link></li>
                    <li><Link
                    className={isActive('/aboutUs') ? s.active : ''}
                    href='/aboutUs' onClick={() => burgerMenuHandler()}>О нас</Link></li>
                    <li><button className='button' onClick={() => burgerMenuHandler()}>Связаться с нами!</button></li>
                    <li className={s.lang__switch}>
                        <button className={s.ru}>
                            RU
                        </button>
                        <ul className={s.langs}>
                            <li>
                                <button className={s.az}>
                                    AZ
                                </button>
                            </li>
                            <li>
                                <button className={s.en}>
                                    EN
                                </button>
                            </li>
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
    )
}



