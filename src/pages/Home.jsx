import s from './Styles.module.css'
import { useFetchData } from '../hooks/useFetchData'
import { MovieList } from '../components/MovieList/MovieList'
import { Searchbar } from '../components/Searchbar/Searchbar'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
export const Home = () => {
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

    let endpoint
    if (query.length > 0) {
        endpoint = `search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`
    } else {
        endpoint = `trending/all/day?language=en-US&page=${page}`
    }

    const { data, loading, error } = useFetchData(endpoint)

    return (
        <section className={s.section}>
            <Searchbar onhandleSearch={handleSearch} title={'Welcome to MovieFinder'} />

            <div className={s.container}>
                {loading && <p>Loading...</p>}
                {error && error.message}
                {data?.results.length > 0 && (
                    <>
                        <h2 className={s.down__title}>Featured Movies</h2>{' '}
                        <MovieList totalPages={data.total_pages || 1} propdata={data?.results} />
                    </>
                )}
            </div>
        </section>
    )
}
