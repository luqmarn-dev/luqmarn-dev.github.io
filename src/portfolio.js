/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Luqman's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact to the world.",
  og: {
    title: "Luqman Fahrurrazi Portfolio",
    type: "website",
    url: "http://luqmarn.com/",
  },
};

//Home Page
const greeting = {
  title: "Luqman Fahrurrazi",
  logo_name: "Luqmarn",
  nickname: "look-marn",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact to the world.",
  resumeLink:
    "https://drive.google.com/file/d/14vyi0gyyeHR0UbeEG7UyIm4H2PZVzZQW/view?usp=sharing",
  portfolio_repository: "https://github.com/neverise/masterPortfolio",
  githubProfile: "https://github.com/neverise",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/luqmarn/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:namedluqman@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using ASP.NET, Flutter, and Angular",
        "⚡ Developing mobile applications using Flutter",
        "⚡ Creating application backend in .NET, and MSSQL",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Scss",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: ".NET",
          fontAwesomeClassname: "simple-icons:dot-net",
          style: {
            color: "#512BD4",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
    {
      title: "Software Engineer",
      fileName: "SweImg",
      skills: [
        "⚡ Developing highly scalable production ready digital products for various company use cases",
        "⚡ Experience of working with cross-timezone teams and startups",
        "⚡ Complex products that solves real world problems",
      ],
      softwareSkills: [
        {
          skillName: ".NET",
          fontAwesomeClassname: "simple-icons:dot-net",
          style: {
            color: "#512BD4",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "ant-design:console-sql-outlined",
          style: {
            color: "black",
          },
        },
        {
          skillName: "Sentry",
          fontAwesomeClassname: "simple-icons:sentry",
          style: {
            color: "#362D59",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#239120",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "MARA University of Technology (UiTM)",
      subtitle: "Diploma in Computer Science",
      logo_path: "uitm.png",
      alt_name: "Uitm",
      duration: "2017 - 2020",
      descriptions: [
        "⚡ Studied core subjects of being a programmer",
        "⚡ I was awarded a Dean's award for achieving higher than 3.5 GPA",
      ],
      website_link: "https://uitm.edu.my/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Freelance and Internship",
  description:
    "I have worked with many evolving startups as Full-Stack Developer, and Software Engineer. I have also worked with some well established companies as Software Engineer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer",
          company: "Sterling RISQ",
          company_url: "https://www.sterlingrisq.com/",
          logo_path: "sterlingrisq.png",
          duration: "Jan 2022 - PRESENT",
          location: "Remote",
          description:
            "I am working on maintaining and adding features to their main product. The projects involve integrating with third-parties and for satisfying stakeholder's needs. Our goal is to be the most well-known background checks service.",
          color: "#0879bf",
        },
        {
          title: "Senior Software Engineer",
          company: "Koejitech",
          company_url: "https://www.koejitech.com/",
          logo_path: "koejitech.jpeg",
          duration: "Feb 2021 - Jan 2022",
          location: "Puchong, Selangor",
          description:
            "I have created complete hotel self-check in kiosk application, and independently develop a robot automation application for restaurants both from scratch. I am also extensively involves in the project planning, conducting interviews, and software designing. I was involved in integrating third-party machine such as payment terminal, cash dispenser, cash acceptor, JAKA robotics, and card reader.",
          color: "#9b1578",
        },
        {
          title: "Full-Stack Developer",
          company: "Softinn Solutions",
          company_url: "https://www.mysoftinn.com/",
          logo_path: "softinn.png",
          duration: "Aug 2020 - Feb 2021",
          location: "Alor Gajah, Melaka",
          description:
            "Softinn Solutions is a Start up specialised in helping hoteliers and enable hotel automation. As a fresh graduate, I was able to learn a new programming language and start working tasks in one month period. I also work on the kiosk project where we make application for kiosk check-in, and report directly to the CEO.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Freelance",
      experiences: [
        {
          title: "Software Engineer",
          company: "Koejitech",
          company_url: "https://www.koejitech.com/",
          logo_path: "koejitech.jpeg",
          duration: "Feb 2022 - Present",
          location: "Remote",
          description:
            "Work with previous employer for a new project for a cross-platform application built with Flutter. Independently work on the project and reports directly to the CEO.",
          color: "#4285F4",
        },
        {
          title: "Graphic Designer",
          company: "Confidential",
          company_url: "",
          logo_path: "confidential.png",
          duration: "Jun 2019 - Nov 2020",
          location: "Remote",
          description:
            "Work closely with connections to design logos for their products. Learned about assets licensing and copyright delivery.",
          color: "#D83B01",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Graphic Designer",
          company: "Babymama Trading",
          company_url: "https://www.tateh.com.my/",
          logo_path: "tateh.png",
          duration: "Feb 2019 - April 2019",
          location: "Bangi, Selangor",
          description:
            "Work with the senior graphic designer in designing various products from logo, banners, and company profile.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Project Showcase",
  description:
    "I've been involved in varieties of projects, some even started from scratch. I have a track record of working on projects independently, and also learning as well as implementing never before use frameworks. ",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.png",
    description:
      "I am available to be contacted professionally by LinkedIn, Gmail, Phone, and Whatsapp. Preferably by email or LinkedIn. I am open to any opportunity to change the world and loves challenges.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Petaling Jaya, Selangor, Malaysia",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/FCHXguddQMSvF57Z8",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+60 196042706",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
