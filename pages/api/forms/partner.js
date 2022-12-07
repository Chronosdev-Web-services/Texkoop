import { API_URL } from "../../../utils/data";

const contactUsApi = async (req, res) => {
  if (req.method === "POST") {
    const body = JSON.stringify(req.body);
    try {
      const apiRes = await fetch(`${API_URL}/api/partner/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: body,
      });
      const data = await apiRes.json();
      if (apiRes.status === 201) {
        return res.status(201).json({ success: data.success });
      } else {
        return res.status(apiRes.status).json({ error: data.error });
      }
    } catch {
      return res.status(500).json({ error: "something went wrong " });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};
export default contactUsApi;
