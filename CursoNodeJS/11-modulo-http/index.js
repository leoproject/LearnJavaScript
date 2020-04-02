const http = require('http')

http.createServer((request,response) => {
    response.end("Hi, I'm server and you ?")

})

.listen(5000, () => console.log('o servidor esta rodando')
)