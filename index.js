import fetch  from 'node-fetch'

async function getDados(){
 let response = await fetch ('https://jsonplaceholder.typicode.com/users')
 let dados = await response.json()
 console.log('-- getDados', dados.length)
   return dados
}

     console.log('----------- Começou');

     let dados = await getDados()
     console.log(dados)

    console.log('----------- Finalizou');



    