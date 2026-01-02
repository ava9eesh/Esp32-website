let lastData = {
  time: "--:--:--",
  emergency: false,
  location: "Unknown"
};

export default function handler(req, res) {
  if (req.method === "POST") {
    lastData = req.body;
    return res.status(200).json({ ok: true });
  }
  res.status(200).json(lastData);
}
