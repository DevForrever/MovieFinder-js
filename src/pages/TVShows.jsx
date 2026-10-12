import s from '../pages/Styles.module.css'
import { Searchbar } from '../components/Searchbar/Searchbar'
import { useEffect, useState } from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { MovieList } from '../components/MovieList/MovieList'
import { useSearchParams } from 'react-router-dom'

export const TVShows = () => {
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
        `search/tv?query=${query}&include_adult=false&language=en-US&page=${page}`
    )

    return (
        <section>
            <Searchbar onhandleSearch={handleSearch} title={'Search your Favorite TV Shows'} />
            <div className={s.container}>
                {loading && <p>Loading...</p>}
                {error && <p>Error</p>}
                {data?.results.length > 0 && (
                    <>
                        <h2 className={s.down__title}>Featured TV Shows</h2>
                        <MovieList propdata={data?.results} />
                    </>
                )}
            </div>
        </section>
    )
}
