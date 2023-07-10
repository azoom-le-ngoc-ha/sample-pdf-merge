import {Request, Response, NextFunction} from "express"

export default function (req: Request, _res: Response, next: NextFunction){
    req.headers.data = 'say hi'
    next()
}