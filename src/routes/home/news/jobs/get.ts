import {Request, Response, NextFunction} from "express"

export default function (req: Request, res: Response, _next: NextFunction){
    console.log(req.headers.user, req.headers.data)
    res.send("jobs")
}

export const test = () => {
    console.log('test')
}