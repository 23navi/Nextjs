const handler = (req, res) => {
  if (req.method === "POST") {
    console.log({ email: req.body.email });
    res.status(200).json({ email: req.body.email });
  }
};

export default handler;
