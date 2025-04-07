import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';
function Home(){
    const [filmes ,setFilmes] = useState([]);
    const [loading ,setLoading] = useState(true);

    useEffect(()=>{
        
        
        async function loadFilmes(){
            const response = await api.get('/movie/now_playng',{
                params:{
                    api_key:'',
                    lenguage: 'pt-BR',
                    page: 1,
                }
            })
        }
        loadFilmes();
        setLoading(false);
            
    }, [])


    if(loading){
        return(
            <div className='loading'>
                <h2>Carregando Filmes...</h2>    
            </div>
        )
    }
    

    return(
        <div className='container'>
           <div className='lista-filmes'>
            {filmes.map((filme)=>{
                return(
                    <article key={filme.id}>
                        <strong>{filme.title}</strong>
                        <img src={'https://image.tmdb.org/t/p/original/${filme.poster_path}'} alt={filme.title} />
                        <link to={'/filme/${filme.id}'}>Acessar</link>
                    </article>
                )
            })}
           </div>
        </div>
    )
    
}

export default Home;