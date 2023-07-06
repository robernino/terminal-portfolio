import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const contactMediums = [
      {
        medium: "<br />github",
        username: "<br />robernino",
        link: "https://github.com/robernino",
      },
      {
        medium: "email",
        username: "robert_niru@hotmail.com",
        link: "mailto:robert_niru@hotmail.com",
      },
      // {
      //   medium: "linkedin",
      //   username: "LinkedIn",
      //   link: "https://www.linkedin.com/",
      // },
      // {
      //   medium: "twitter",
      //   username: "Twitter",
      //   link: "https://twitter.com/",
      // },
    ];

    res.json(contactMediums);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
