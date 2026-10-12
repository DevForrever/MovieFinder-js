import s from '../Header/Header.module.css'
import MovieFinder from '../../assets/MovieFinder.svg'
import { Link } from 'react-router-dom'
export const Header = () => {
    return (
        <header>
            <div className={s.container}>
                <div className={s.logo__box}>
                    <img className={s.tv} src={MovieFinder} alt='' />
                    <p className={s.moviefinder}>MovieFinder</p>
                </div>
                <nav className={s.nav}>
                    <ul className={s.nav__list}>
                        <li className={s.nav__item}>
                            <Link className={s.item} to='/'>
                                Home
                            </Link>
                        </li>
                        <li className={s.nav__item}>
                            <Link className={s.item} to='/movies'>
                                Movies
                            </Link>
                        </li>
                        <li className={s.nav__item}>
                            <Link className={s.item} to='/tvshows'>
                                TV Shows
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
