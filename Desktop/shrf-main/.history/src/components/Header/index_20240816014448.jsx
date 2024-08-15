
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
                        <li><a href="tel:+994554555645">+994554555645</a></li>
                        <li><a href="mailto:info@satgroup.az">info@satgroup.az</a></li>
                    </ul>
                </div>
            </div>
            <nav>

            </nav>
        </header>
    )
}