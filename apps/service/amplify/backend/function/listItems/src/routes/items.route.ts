import { Router, Request, Response } from 'express'

const itemsRoute = Router()

itemsRoute.get('', function (req: Request, res: Response) {
  // Add your code here
  res.json({ success: 'get call succeed!', url: req.url })
})

itemsRoute.get('/*', function (req: Request, res: Response) {
  // Add your code here
  res.json({ success: 'get call succeed!', url: req.url })
})

/****************************
 * Example post method *
 ****************************/

itemsRoute.post('', function (req: Request, res: Response) {
  // Add your code here
  console.log({ headers: req.headers })
  res.json({ success: 'post call succeed!', url: req.url, body: req.body })
})

itemsRoute.post('/*', function (req: Request, res: Response) {
  // Add your code here
  res.json({ success: 'post call succeed!', url: req.url, body: req.body })
})

/****************************
 * Example put method *
 ****************************/

itemsRoute.put('', function (req: Request, res: Response) {
  // Add your code here
  res.json({ success: 'put call succeed!', url: req.url, body: req.body })
})

itemsRoute.put('/*', function (req: Request, res: Response) {
  // Add your code here
  res.json({ success: 'put call succeed!', url: req.url, body: req.body })
})

/****************************
 * Example delete method *
 ****************************/

itemsRoute.delete('', function (req: Request, res: Response) {
  // Add your code here
  res.json({ success: 'delete call succeed!', url: req.url })
})

itemsRoute.delete('/*', function (req: Request, res: Response) {
  // Add your code here
  res.json({ success: 'delete call succeed!', url: req.url })
})

export default itemsRoute
