import { useEffect, useState } from 'react';
import {Container} from './styles'

export function Global() {
 
  const [dado, setDado] = useState({
    resultado: 0,
    conta: '',
    dadosRolados: [{
      dado: '',  
      resultados: []
    }]
  })


  function rolarDado(dado, isDano) {

    let conta = []
    let dadosRolados = []
     
    if (isDano) {
      



    } else {

      if (dado.includes('+')){
        const dados = dado.split('+')
        dados.forEach(dado => { 


          if (dado.includes('d')){
            let quantidade = dado.split('d')[0]
            const valorMax = dado.split('d')[1]
            let valoresGerados = []


            if (quantidade == null || quantidade == undefined) {
              quantidade = 1 }


            if (quantidade == -1) {
              for (let i = 0; i < 3; i++) {
                valoresGerados.push(Math.floor(Math.random() * valorMax + 1))
              }
              
              conta.push(Math.min(...valoresGerados))
              dadosRolados.push({dado: `d${valorMax}`, resultados: valoresGerados})

            } else if (quantidade == 0){

              for (let i = 0; i < 2; i++) {
                valoresGerados.push(Math.floor(Math.random() * valorMax + 1))
              }
              conta.push(Math.min(...valoresGerados))
              dadosRolados.push({dado: `d${valorMax}`, resultados: valoresGerados})

            } else if (quantidade > 0) {

              for (let i = 0; i < quantidade; i++) {
                valoresGerados.push(Math.floor(Math.random() * valorMax + 1))
              }
              conta.push(Math.max(...valoresGerados))
              dadosRolados.push({dado: `d${valorMax}`, resultados: valoresGerados})

            }

          } else {

            conta.push(dado)

          }
          
        });

      } else {

        let quantidade = dado.split('d')[0]
        const valorMax = dado.split('d')[1]

        let valoresGerados = []

        if (quantidade == null || quantidade == undefined) {
          quantidade = 1
        }

        if (quantidade == -1) {

          for (let i = 0; i < 3; i++) {
            valoresGerados.push(Math.floor(Math.random() * valorMax + 1))
          }
          conta.push(Math.min(...valoresGerados))
          dadosRolados.push({dado: `d${valorMax}`, resultados: valoresGerados})

        } else if (quantidade == 0){

          for (let i = 0; i < 2; i++) {
            valoresGerados.push(Math.floor(Math.random() * valorMax + 1))
          }
          conta.push(Math.min(...valoresGerados))
          dadosRolados.push({dado: `d${valorMax}`, resultados: valoresGerados})

        } else if (quantidade > 0) {

          for (let i = 0; i < quantidade; i++) {
            valoresGerados.push(Math.floor(Math.random() * valorMax + 1))
          }
          conta.push(Math.max(...valoresGerados))
          dadosRolados.push({dado: `d${valorMax}`, resultados: valoresGerados})

        }

      }
      
    }

    return {conta: conta.join('+'), dadosRolados, resultado: eval(conta.join('+'))}
  } 

  useEffect(() => {

    setDado(rolarDado('3d20', false))

  }, [])
  
  return (
    <Container>
      <span>{dado.conta}={dado.resultado}</span>
      {dado.dadosRolados.map(dado => <p>{dado.dado}: {dado.resultados.join(', ')}</p>)}
    </Container>
  );
}