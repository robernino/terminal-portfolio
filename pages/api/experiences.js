import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const experiences = [
      {
        name: "IT Technical Analyst at Cummins Inc.",
        description:
          "- CMES support (Cummins Manufacturing Execution System) and IT application support.<br />- Database analysis (Oracle SQL, SQL Server).<br />- Design and Development of the eTBWS (Team-Based Work System) Platform using Ignition software with the Python language.<br />- Analysis, reporting and data modeling with Cognos Analytics IBM.<br />- Provide technical guidance to users on IBM Maximo Platform.<br />- Development of Microsoft Business Intelligence (Data modeling, Power BI).<br />- Creation of web reports for CMES, Maximo and eTBWS users using ASP.NET with C# language.<br />- Project Organization with Waterfall Methodology.<br /><br />",
        stack: ["June 2022", "Present"],
      },
      // {
      //   name: "Analyst Developer at 101 Grados, S. de R.L. de C.V.",
      //   description:
      //     "- Design and development of e-commerce platform using Laravel with PHP language.<br />- Database analysis (MySQL, SQL Server).<br />- Application maintenance and support.<br />- Server and hosting administration.<br />- Design and development of ERP system in Odoo.<br /><br />",
      //   stack: ["November 2020", "may 2022"],       
      // },
      // {
      //   name: "Analyst Developer at Augecorp",
      //   description:
      //     "- Design and development of the organization’s proprietary ERP system, using ASP.NET with C# language, JavaScript and MDBootstrap.<br />- Database analysis (SQL Server).<br />- Application maintenance and support.<br />- Provide technical guidance to the user for troubleshooting.<br /><br />",
      //   stack: ["September 2019", "september 2020"],
      // },
      // {
      //   name: "Developer at Grupo Vencedor, S.A. de C.V.",
      //   description:
      //     "- Design and development of software for inventory control of computer equipment and electronic devices, using ASP.NET with C# language, JavaScript and Bootstrap.<br />- Database analysis (SQL Server).<br />- Technical support to platform users.<br />- Software development for tracking transport routes, using ASP.NET with C# language and Bootstrap.<br /><br />",
      //   stack: ["January 2019", "august 2019"],
      // },      
    ];

    return res.json(experiences);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
