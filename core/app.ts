import dotenv from 'dotenv'
import express, { Request, Response } from 'express'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello World!")
})

app.listen(PORT, () => {
    console.log("Server running at PORT: ", PORT)
}).on("error", (err) => {
    throw new Error(err.message)
})
