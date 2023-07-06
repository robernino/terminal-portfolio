const COMMANDS = [
    {
      command: "<br />about",
      description: "<br />About Me",
    },
    {
      command: "education",
      description: "My Education",
    },
    {
      command: "skills",
      description: "My Tech Skills",
    },
    // {
    //   command: "projects",
    //   description: "My Tech Projects",
    // },
    // {
    //   command: "experience",
    //   description: "My Work Experience",
    // },
    {
      command: "experience",
      description: "Work Experience",
    },
    {
      command: "contact",
      description: "Contact Me",
    },
    {
      command: "blog",
      description: "Visit My Blog",
    },
    {
      command:
        // 'clear <span style="color: var(--primary)">(Ctrl+L shortcut)</span>',
        "clear",
      description: "Clear Terminal",
    },
  ];
  
  // const getProjects = async () => {
  //   const projects = await (await fetch("/api/projects")).json();
  //   const projectHTML =
  //     `<br /><h3>My Projects (You can scroll)</h3>` +
  //     projects
  //       .map(
  //         (project) => `<div class="command">
  //         <a href="${project.link}" target="_blank"><b class="command">${
  //           project.name
  //         }</b></a> - <b>${project.stack.join(", ")}</b>
  //         <p class="meaning">${project.description}</p>
  //       </div>`
  //       )
  //       .join("");
  //   return projectHTML;
  // };
  
  const getExperiences = async () => {
    const experiences = await (await fetch("/api/experiences")).json();
    const projectHTML =
      `<br /><h3>Work Experience:</h3>` +
      experiences
        .map(
          (experience) => `<div class="command">
          <a><b class="command">${
            experience.name
          }</b></a> - <b>${experience.stack.join(" to ")}</b>
          <p class="meaning">${experience.description}</p>
        </div>`
        )
        .join("");
    return projectHTML;
  };
  
  const getContacts = async () => {
    const contactMediums = await (await fetch("/api/contacts")).json();
    return contactMediums
      .map(
        (contact) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${contact.medium}</p>
        <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
      </div>`
      )
      .join("");
  };
  
  export const CONTENTS = {
    help: () =>
      COMMANDS.map(
        (command) => `<div style="display: flex; justify-content: space-between;">
          <p style="font-size: 15px">${command.command}</p>
          <p>${command.description}</p>
        </div>`
      ).join("") +
      `<br />
        <div class="command">Type one of the above commands to view it. For eg. <span style="color: var(--secondary)">about</span></div><br />`,
    about: () => `<br/>Hi! My name is Roberto.
      <br/><br/>        
      I currently live in San Luis Potosí, Mexico, working as IT Technical Analyst at the company <a href="https://www.cummins.com/es/" target="_blank">Cummins Inc.</a>
      <br/><br/>        
      I'm an IT professional with experience as a Full Stack developer, database analysis, BI development and design, development and support of ERP systems and web applications.<br/><br/>
    `,
    education:
      () => `<br />I have an Engineering Degree in Computer Systems from the <a href="https://slp.tecnm.mx/" target="_blank">Instituto Tecnológico de San Luis Potosí.</a><br /><br />`,
    skills: () => `
    <br />I have experience with Java, C#, Python, PHP and JavaScript programming languages, as well as the following technologies:<br /><br />
    <div class="skill"><b>Databases:</b> MySQL, SQL Server, Oracle SQL, MongoDB.<br /></div>
    <div class="skill"><b>Microsoft Office:</b> Word, Excel, Power Point, Publisher, Project, Access.<br /></div>
    <div class="skill"><b>Servers:</b> Windows Server, Ubuntu Server.<br /></div>
    <div class="skill"><b>Operating Systems:</b> Windows, Linux (Ubuntu, Debian), Mac Os.<br /></div>
    <div class="skill"><b>Frameworks:</b> Django, .NET, React Native, Laravel, Bootstrap, MDBootstrap.<br /></div>
    <div class="skill"><b>Web Development:</b> HTML, CSS, Express.js, React.js, Node.js.<br /></div>
    <div class="skill"><b>Virtualization:</b> Oracle VM VirtualBox, VMware Workstation, Microsoft Hyper-V.<br /></div>
    <div class="skill"><b>Business Intelligence (BI):</b> Microsoft Power BI, Cognos Analytics IBM.<br /></div>
    <div class="skill"><b>Cloud Computing Services:</b> Google Cloud, AWS (EC2, S3, Lambda, SNS), Firebase, Heroku, DigitalOcean.<br /></div>  
    <div class="skill"><b>Version Control:</b> GitHub, GitLab, TFS (Team Foundation Server).<br /><br />
    `,
    // projects: getProjects,
    experience: getExperiences,
    contact: getContacts,
    error: (input) =>
      `<br /><div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \'help\' for info<br /><br />`,
    // experience: () => {
    //   window.open("https://drive.google.com/file/d/1OWQeHuhrGYHjhCOfEKHOBliAZPZ4LLef/view", "_blank");
    //   return "";
    // },
    blog: () => {
      window.open("https://geeknik.netlify.app/#/", "_blank");
      return "";
    },
  };
  
  // function getAge(dateString) {
  //   const today = new Date();
  //   const birthDate = new Date(dateString);
  
  //   let age = today.getFullYear() - birthDate.getFullYear();
  //   const m = today.getMonth() - birthDate.getMonth();
  //   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
  
  //   return age;
  // }
  