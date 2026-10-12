import s from './MovieItem.module.css'
import IMDb from '../../assets/IMDb.png'
import Fallback from '../../assets/Fallback.png'
import { TV_GENRES_MAP } from '../../MovieId/TVGenres'
import { MOVIE_GENRES_MAP } from '../../MovieId/MovieGenres'
import { Link, useLocation } from 'react-router-dom'

export const MovieItem = ({ item }) => {
    const location = useLocation()
    let media_type = ''

    switch (location.pathname) {
        case '/movies':
            media_type = 'movie'
            break
        case '/tvshows':
            media_type = 'tv'
            break
        case '':
            media_type = false
    }

    let imgurl = ''
    if (item?.poster_path) {
        imgurl = `https://image.tmdb.org/t/p/w500/${item.poster_path}`
    } else {
        imgurl = Fallback
    }
    const convertGenre = (mediatype, id) => {
        if (mediatype === 'tv') {
            return TV_GENRES_MAP[id]
        } else {
            return MOVIE_GENRES_MAP[id]
        }
    }
    return (
        <li className={s.item}>
            <Link state={{ from: location }} to={`/${item.media_type ? item.media_type : media_type}/${item.id}`}>
                <div className={s.item__image__wrapper}>
                    <img className={s.img} src={imgurl} alt='' />

                    <h4 className={s.title}>{item?.title || item?.name}</h4>
                    <div className={s.item__rating__wrapper}>
                        <img className={s.item__rating__img} src={IMDb} alt='IMDb' />
                        <p className={s.item__rating__text}>
                            {item?.vote_average ? Math.floor(item?.vote_average * 10) / 10 : 'N/A'}
                        </p>
                    </div>
                    <ul className={s.ul}>
                        {item.genre_ids.map((id) => {
                            return <li className={s.li}>{convertGenre(item.media_type, id)}</li>
                        })}
                    </ul>
                </div>
            </Link>
        </li>
    )
}
