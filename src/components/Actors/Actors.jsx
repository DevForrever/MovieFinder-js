import s from '../Actors/Actors.module.css'
import { useParams } from 'react-router-dom'
import { useFetchData } from '../../hooks/useFetchData'
import Fallback from '../../assets/Fallback.png'
export const Actors = () => {
    const { id, mediatype } = useParams()
    const { data, loading, error } = useFetchData(`/${mediatype}/${id}/credits`)

    const createImgURL = (url) => {
        if (url) {
            return `https://image.tmdb.org/t/p/w500/${url}`
        } else {
            return Fallback
        }
    }
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>error</p>}
            {data && (
                <ul className={s.list}>
                    {data?.cast.map((item) => (
                        <li>
                            <img className={s.img} src={createImgURL(item.profile_path)} alt='' />
                            <h2 className={s.name}>{item.name}</h2>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
