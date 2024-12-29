import { useEffect,useState } from "react";
import {useParams} from 'react-router-dom'
import api from '../../services/api'
///movie/550?api_key=27624f879d253187eea297046959b50f

function Filme() {
    const {id} = useParams();
    const [filme,setFilme] = useState({});
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilme() {
            await api.get(`/movie/${id}`,{
                params:{
                    api_key:'27624f879d253187eea297046959b50f',
                    language:'pt-BR',
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{

            })
        }
        loadFilme();

        return ()=>{

        }
    },[])
    if (loading){
        return(
            <div>
                <h1 className="filme-info">Carregando detalhes</h1>
            </div>
        )
    }


    return (
        <div className="filme-info">
             <h1>{filme.title}</h1> 
             <img src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt="{filme.title}"></img> 
            
             <h3>Sinopse</h3>
            <span>{filme.overview}</span> 

            <strong>Avaliação: {filme.vote_average}/10</strong>
        </div>
    )
}

export default Filme;