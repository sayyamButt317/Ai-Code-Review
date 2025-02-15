import aiservice from "../services/ai.service.js";

async function AiCodeReview(req, res) {
  try {
    const code = req.body.code;
    if (!code) {
      return res.status(400).json({ error: "Please provide a prompt." });
    }

    const response = await aiservice(code);
    res.status(200).send({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export default AiCodeReview;
