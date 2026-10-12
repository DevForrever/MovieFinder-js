import { useEffect, useState } from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { MovieList } from '../components/MovieList/MovieList'
import s from '../pages/Styles.module.css'
import { Searchbar } from '../components/Searchbar/Searchbar'
import { useSearchParams } from 'react-router-dom'
export const Movies = () => {
    const [SearchParams] = useSearchParams()
    const [query, setQuery] = useState('')
    const page = +SearchParams.get('page') >= 1 ? +SearchParams.get('page') : 1
    useEffect(() => {
        const query = SearchParams.get('query') ?? ''
        if (query === '') return
        setQuery(query)
    }, [])

    const handleSearch = (finalQuery) => {
        setQuery(finalQuery)
    }
    const { data, loading, error } = useFetchData(
        `search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`
    )

    return (
        <section>
            <Searchbar title={'Search your Favorite Movies'} onhandleSearch={handleSearch} />
            <div className={s.container}>
                {data?.results.length > 0 && (
                    <>
                        <h2 className={s.down__title}>Featured Movies </h2>{' '}
                        <MovieList totalPages={data.total_pages || 1} propdata={data.results} />{' '}
                    </>
                )}
                {loading && <p>Loading...</p>}
                {error && <p>Error</p>}
            </div>
        </section>
    )
}
