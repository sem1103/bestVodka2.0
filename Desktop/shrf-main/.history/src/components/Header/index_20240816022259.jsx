
import s from './style.module.css'

export default function Header() {


    return (
        <header>
            <div className={s.top}>
                <div className={s.top__left}>
                    The Value of Human Capital
                </div>
                <div className="top__right">
                    <ul>
                        <li>
                            <a href="tel:+994554555645">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#ffffff"></path> </g></svg>    
                            +994554555645</a>
                        </li>
                        <li>
                            <a href="mailto:info@satgroup.az">
                                
                                info@satgroup.az</a>
                            </li>
                    </ul>
                </div>
            </div> 
            <div className={s.header__items}>
                <div className={s.logo}>
                    <a href="/"><img src="./public/assets/img/logo.webp" alt="Logo" /></a>
                </div>
                <nav> 
                    <ul>
                        <li><a href="">Haqqımızda</a></li>
                        <li><a href="">Spikerlər</a></li>
                        <li><a href="">Sponsorlar</a></li>
                        <li><a href="">Qalereya</a></li>
                        <li><a href="">Proqram</a></li>
                        <li><a href="">Əlaqə</a></li>
                    </ul>
                </nav>
                <button>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 16H12.01M12 12H12.01M12 8H12.01M21 14V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V14C4.10457 14 5 13.1046 5 12C5 10.8954 4.10457 10 3 10V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V10C19.8954 10 19 10.8954 19 12C19 13.1046 19.8954 14 21 14Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    Bilet al
                </button>
            </div>

        </header>
    )
}