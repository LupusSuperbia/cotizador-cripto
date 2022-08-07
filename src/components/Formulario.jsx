import {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';


const InputSubmit = styled.input`
background-color: #9497ff;
border: none;
width: 100%;
padding: 10px;
font-size: 20px;
font-weight: 700;
color: #fff;
text-transform: uppercase;
border-radius: 5px;
transition: background-color .3s ease; 

&:hover{
    background-color: #7a7dFE;
    cursor: pointer;

}


`


const Formulario = ({setMonedas}) => {
    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)
    
    const [moneda ,SelectMonedas ] = useSelectMonedas('Elige Tu Moneda', monedas);
    const [criptomoneda, SelectCriptoMoneda] = useSelectMonedas('Elige tu Criptomoneda', criptos)
    
    useEffect(() => {
        const consultarApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

            const respuesta = await fetch(url);
            const resultado = await respuesta.json()
            
            
            const arrayCriptos = resultado.Data.map( cripto => {
                const objeto = {
                    id : cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }

                return objeto;
            })
            setCriptos(arrayCriptos);
        }   
        consultarApi();
    }, [])
    
    
    const handleSubmit = e => {
        e.preventDefault();

        if([moneda, criptomoneda].includes('')){
            setError(true)
            return;
        }
        
        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    }


  return (
    <>
    {error && <Error>Todos Los Campos Son obligatorio</Error>}
    <form
        onSubmit={handleSubmit}>

        <SelectMonedas/>
        <SelectCriptoMoneda/>
        <InputSubmit
        type='submit'
        value='Cotizar'
        />
    </form>
    </>
  )
}

export default Formulario