import jwt from "jsonwebtoken";

// export const SECRET_KEY = "1993";
// export const auth = (req: any, res: any, next: any) => {
//   let authorization = req.headers.authorization;
//   if (authorization) {
//     let accessToken = authorization.split(" ")[1];
//     if (!accessToken) {
//       res.status(401).json({
//         messege: "you are anonymous",
//       });
//     } else {
//       jwt.verify(accessToken, SECRET_KEY, (err: any, data: any) => {
//         if (err) {
//           res.status(401).json({
//             error: err.message,
//             message: "you are anonymous",
//           });
//         } else {
//           req.decoded = data;
//           next();
//         }
//       });

export const SECRET_KEY = '1993';
export const auth = (req: any, res: any, next: any) => {
  let authorization = req.headers.authorization;
  if (authorization) {
    let accessToken = authorization.split(' ')[1];
    if (!accessToken) {
      res.status(401).json({
        messege: 'you are anonymous'
      });
    } else {
      jwt.verify(accessToken, SECRET_KEY, (err: any, data: any) => {
        if (err) {
          res.status(401).json({
            error: err.message,
            message: 'you are anonymous'
          })
        } else {
          req.decoded = data;
          next()
        }
      })
    }
  } else {
    res.status(401).json({
      message: 'you are anonymous'
    })
  }
}



export default { auth };

