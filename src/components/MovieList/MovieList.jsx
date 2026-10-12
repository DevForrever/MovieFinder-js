import s from './MovieList.module.css'
import { MovieItem } from '../MovieItem/MovieItem'
import { PagesNav } from '../PagesNav/PagesNav'
import { useSearchParams } from 'react-router-dom'
export const MovieList = ({ propdata, totalPages }) => {
    const [searchParams] = useSearchParams()
    const page = +searchParams.get('page') ?? 1

    return (
        <div className={s.container}>
            <ul className={s.list}>
                {propdata.map((item) => (
                    <MovieItem item={item} />
                ))}
            </ul>
            <PagesNav currentPage={page} totalPages={totalPages} />
        </div>
    )
}
