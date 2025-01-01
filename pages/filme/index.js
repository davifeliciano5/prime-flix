import { useEffect,useState } from "react";
import {useParams, useNavigate} from 'react-router-dom'
import api from '../../services/api'
import './filme-info.css'
import {toast} from 'react-toastify'

///movie/550?api_key=27624f879d253187eea297046959b50f

function Filme() {
    const {id} = useParams();
    const navigation = useNavigate();

    const [filme,setFilme] = useState({});
    const [loading,setLoading] = useState(true);

    function salvarFilme(){
       const minhalista = localStorage.getItem("@filme");

       let filmesSalvos = JSON.parse(minhalista) || [];

       const hasFilmne = filmesSalvos.some((fs)=>fs.id === filme.id);

       if(hasFilmne){
        toast.warn("Esse filme já está na sua lista!");
        return
        }
        filmesSalvos.push(filme);
        localStorage.setItem("@filme",JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso")
    }

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
                navigation("/",{ replace:true }
                ) 
                return
            })
        }
        loadFilme();

        return ()=>{

        }
    },[navigation,id])
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
        
            <div className="area-buttons">
                <button onClick={salvarFilme} >Salvar</button>
                <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
            </div>
        </div>
    )
}

export default Filme;