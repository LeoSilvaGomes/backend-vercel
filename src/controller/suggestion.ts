import {
  VercelRequest as Request,
  VercelResponse as Response,
} from "@vercel/node";

module.exports = (req: Request, res: Response) => {
  if (req.method === "GET") {
    res.json([{ message: "entrei caraio" }]);
  } else if (req.method === "POST") {
    res.json([{ message: "entrei caraio" }]);
  }
};
