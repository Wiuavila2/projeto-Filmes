import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './favoritos.css';


function favoritos(){

    const [ filmes , setFilmes ] = useState ([])

    useEffect(()=>{

        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])
    
    function excluirFilme(id){
        let filtroFilmes = filmes.filter((item) => {
            return(item.id !== id) 
        })
        setFilmes = filtroFilmes;
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))
        toast.success("Filme removido com sucesso!")
    }
    return(
        <div className='meus-filmes'>
            <H1>Meus Filmes</H1>
            <ul>
                {filmes.map((filme)=>{
                    return(
                        <li key={filme.id}>
                            <span>[filme.title]</span>
                            <div>
                            <Link to={'/filme/{filme.id}'}>Ver Detalhes</Link>
                            <button onClick={()=>excluirFilme(filme.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default favoritos;