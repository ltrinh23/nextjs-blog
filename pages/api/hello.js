// req = HTTP incoming message, res = HTTP server response
// export default function handler(req, res) {
//     // ...
//   }

export default function handler(req, res) {
    res.status(200).json({ text: 'my brother smells...a lot' });
    const email = req.body.email;
  // Then save email to your database, etc...
}