const endpoint = {
    "pc": "PC AMD COM RTX DE 2000 reais",
    "cpu": "Ryzen 5 5500",
    "gpu": "RTX 4060",
    "preço": "2200",
    "placa mãe": "b550m"
}
const pcs = [endpoint]

//quando eu adicionar, o url do banco de dados eu tenho que desablitar o comentario do codigo abaixo
/*
const bcdata = "https://api.exemplo.com/data"

function fetchData() {
    return fetch(bcdata)
        .then(Response => {
            if (!Response.ok) {
                throw new Error("A resposta do servidor Não esta ok.");

            }
            return Response.json()
        })
        .then(data => {
            return data

        })
        .catch(error => {
            console.error("Fetch error:", error)
        });
        
}
*/

function findmatches(wordtomatch, pcs) {

    return pcs.filter(pc => {

        const regex = new RegExp(wordtomatch, "gi")

        // Verifica se algum valor no objeto corresponde ao regex
        return Object.values(pc).some(value => regex.test(value));

    })
}
console.log(findmatches("amd", pcs))

// esse tambem faz parte do fech do banco de dados do servidor
/*
    fetchData().then(pcs =>{
        if(pcs){
            console.log(findmatches("amd", pcs))
        }
})
*/