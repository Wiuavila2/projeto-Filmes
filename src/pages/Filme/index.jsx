import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import api from '../../services/api';
import "./filme-info.css";

function Filme(){
    const{ id } = useParams();
    const navigate = useNavigate();
    const [filme,setFilme] = useState({});
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        async function loadFilme(){
        await api.get('/movie/${id}' , {
            params:{
                api_key:'',
                lenguage: 'pt-BR',
            }
        })
        .then((response)=>{
            setFilme(response.data);
            setLoading(false);
        })
        .catch(()=>{
            console.log("filme não encontrado!")
            navigate("/" ,{replace: true});
            return;
        })
        }
        loadFilme();
        return()=>{

        }
    }, [navigate , id])

    if(loading){
        return(
            <div className='filmes-info'>
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }
    return(
        <div className='filmes-info'>
            <h1>{filme.title}</h1>
            <img src={'https://image.tmdb.org/t/p/original/${filme.backdrop_path}'} alt={filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>  
            <strong>Avaliação: {filme.vote_average} /10</strong>
            <div className="area-buttons">
                <button>Salvar</button>
                <button>
                    <a target="_blank" rell="external" href={'https://youtube.com/results?search_query=${filme.title} Trailer'}>
                        Trailer
                    </a>
                </button>
            </div>

        </div>
    )
    
}

export default Filme;