import { useEffect, useState } from 'react';
import api from '../../services/api';
function Home(){
    const [filmes ,setFilmes] = useState([]);

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
            
    }, [])

    return(
        <div>
            <h1>Bem vindo a Home</h1>
        </div>
    )
    
}

export default Home;