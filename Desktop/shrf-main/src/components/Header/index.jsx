
import { useState } from 'react'
import NavItems from './navItems'
import s from './style.module.css'

export default function Header() {

    const [showBurgerMenu, setShowBurgerMenu] = useState(false);

    const menuHandler = () => {
        document.documentElement.classList.toggle('show__burger');
        setShowBurgerMenu(!showBurgerMenu)
    }

    return (
        <>
            <div className={`${s.burger__menu} ${showBurgerMenu ? s.show__menu : ''}`}>
                <div className={s.menu}>
                    <NavItems />
                </div>

                <button className={`${s.close__btn} ${s.burger__btn}`} >
                    <label className={s.bar} htmlFor="check" >
                        <input type="checkbox" checked id="check" onChange={(e) => {
                            menuHandler()
                        }} />

                        <span className={s.top}></span>
                        <span className={s.middle}></span>
                        <span className={s.bottom}></span>
                    </label>
                </button>
            </div>
            <header >



                <div className={s.top}>
                    <div className="container">
                        <div className={s.top__left}>
                            The Value of Human Capital
                        </div>
                        <div className={s.top__right}>
                            <ul>
                                <li>
                                    <a href="tel:+994554555645">
                                        <svg width={18} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#ffffff"></path> </g></svg>
                                        +994554555645</a>
                                </li>
                                <li>
                                    <a href="mailto:info@satgroup.az">
                                        <svg width={18} viewBox="0 -4 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mail</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-412.000000, -259.000000)" fill="#ffffff"> <path d="M442,279 C442,279.203 441.961,279.395 441.905,279.578 L433,270 L442,263 L442,279 L442,279 Z M415.556,280.946 L424.58,271.33 L428,273.915 L431.272,271.314 L440.444,280.946 C440.301,280.979 415.699,280.979 415.556,280.946 L415.556,280.946 Z M414,279 L414,263 L423,270 L414.095,279.578 C414.039,279.395 414,279.203 414,279 L414,279 Z M441,261 L428,271 L415,261 L441,261 L441,261 Z M440,259 L416,259 C413.791,259 412,260.791 412,263 L412,279 C412,281.209 413.791,283 416,283 L440,283 C442.209,283 444,281.209 444,279 L444,263 C444,260.791 442.209,259 440,259 L440,259 Z" id="mail" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                                        info@satgroup.az</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">

                    <div className={s.header__items}>
                        <div className={s.logo}>
                            <a href="/"><img src="/assets/img/logo.webp" alt="Logo" /></a>
                        </div>

                        <NavItems />
                        <div className={`${s.burger__btn} ${showBurgerMenu ? s.show__menu : ''}`}>
                            <label className={s.bar} htmlFor="check" >
                                <input type="checkbox" id="check" onChange={(e) => {
                                    menuHandler()
                                }} />

                                <span className={s.top}></span>
                                <span className={s.middle}></span>
                                <span className={s.bottom}></span>
                            </label>
                        </div>
                    </div>
                </div>

            </header>

        </>
    )
}