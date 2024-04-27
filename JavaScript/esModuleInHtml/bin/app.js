const http = require('http')
const fs = require('fs')

// Read file path to return content，
// Path '/' targets to './index.html'
const server = http.createServer((req, res) => fs.readFile(`.${req.url === '/' ? '/index.html' : req.url}`, (_, content) => res.end(content)))

const PORT = process.env.PORT || 80
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))