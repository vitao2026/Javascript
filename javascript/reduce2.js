const lista = [
    {
        name: 'sabao em po',
        preco: 4
    },
    
    {
        name: 'cereal',
        preco: 12
    },

    {
        name: 'toalha',
        preco:22
    },

];
 const saldoDisponivel = 100;

 function calculaSaldo(saldoDisponivel,lista){
    return lista.reduce(function(prev,current,  index) {
       console.log("rodada",index + 1);
       console.log({prev});
       console.log({current});

    return prev - current.preco;
    },saldoDisponivel);
 }
 console.log(calculaSaldo(saldoDisponivel,lista));

