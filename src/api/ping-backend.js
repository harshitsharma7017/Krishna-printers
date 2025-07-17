export default async function handler(req, res) {
  try {
    const response = await fetch("https://krishna-printers-backend.onrender.com");
    const text = await response.text();
    return res.status(200).send("✅ Backend pinged: " + text);
  } catch (err) {
    console.error("❌ Failed to ping backend:", err);
    return res.status(500).send("Ping failed: " + err.message);
  }
}
