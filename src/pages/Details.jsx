import s from './Details.module.css'
import { useFetchData } from '../hooks/useFetchData'
import { Link, useLocation, useParams, Outlet } from 'react-router-dom'
import { useRef } from 'react'

export const Details = () => {
    const { id, mediatype } = useParams()
    const location = useLocation()
    const backLinkLocation = useRef(location.state?.from ?? '/')
    const { data } = useFetchData(`/${mediatype}/${id}`)
    const backgroundURL = `https://image.tmdb.org/t/p/w1280/${data?.backdrop_path}`
    const poster = `https://image.tmdb.org/t/p/w500/${data?.poster_path}`

    return (
        <section style={{ background: `url(${backgroundURL}) no-repeat center/cover` }} className={s.details}>
            <div className={s.container}>
                <div className={s.container__header}>
                    <div className={s.text__box}>
                        <Link className={s.back} to={backLinkLocation.current}>
                            ←
                        </Link>
                        <h1 className={s.title}>{data?.name}</h1>
                        <h2 className={s.tagline}>{data?.tagline}</h2>
                        <p className={s.description}>{data?.overview}</p>
                        <div className={s.linkbox}>
                            <Link className={s.actors} to='cast'>
                                Actors
                            </Link>
                            <Link className={s.reviews} to='reviews'>
                                Reviews
                            </Link>
                        </div>
                    </div>
                    <img className={s.poster} src={poster} alt='' />
                </div>
                <Outlet />
            </div>
        </section>
    )
}
