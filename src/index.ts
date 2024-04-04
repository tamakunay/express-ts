import express from "express"

const app = express()

const PORT = 4001 // get port from env

app.listen(PORT, () => console.log(`app listening on http://${PORT}`))