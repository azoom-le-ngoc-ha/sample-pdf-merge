import {Request, Response, NextFunction} from "express"

export default function (_req: Request, res: Response, _next: NextFunction){
    res.send("testttttttttt")
}

export const test = () => {
    console.log('test')
}