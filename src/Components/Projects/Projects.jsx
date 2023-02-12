import "./Projects.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import amazon from "./amazon.jpeg";
import mymedia from "./mymedia.jpeg";
import chatgpt3 from "./chatgpt3.jpeg";
import bankapp from "./bankapp.jpeg";
import rlp from "./rlp.jpeg";

const projects = [
  {
    name: "Ecommerce (Amazon Clone)",
    description:
      "This project is a clone of the popular e-commerce platform, Amazon, built with ReactJS, Stripe, and Firebase. The project comes with features such as product listings, shopping cart, payment gateway, and user authentication.",
    img: amazon,
    demo_url: "https://clone-39de5.web.app/",
    github_url: "https://github.com/mahendra-init/Amazon_Clone",
  },
  {
    name: "MyMedia (YouTube Clone)",
    description:
      "YouTube Clone! This is a ReactJS based web application that replicates the functionality of the popular video-sharing platform - YouTube.",
    img: mymedia,
    demo_url: "https://my-media-page.netlify.app/",
    github_url: "https://github.com/mahendra-init/YouTube-Clone",
  },
  {
    name: "HooBank",
    description:
      "This modern UI/UX design website is designed to provide users with a seamless and intuitive experience while exploring the latest advancements in technology. With a focus on modern design principles and user-centered approach.",
    img: bankapp,
    demo_url: "https://modern-bank-app-ui.netlify.app/",
    github_url: "https://github.com/mahendra-init/HooBank-UI",
  },
  {
    name: "Restaurant Landing Page",
    description:
      "The website is designed to be responsive and adaptable, ensuring a smooth user experience across all devices and screen sizes. The website is packed with engaging and informative content, including articles, videos, and interactive elements.",
    img: rlp,
    demo_url: "https://modern-restaurant-landing-page.netlify.app/",
    github_url:
      "https://github.com/mahendra-init/Fully-Responsive-Modern-Restaurant-Application",
  },
  {
    name: "Chat GPT-3",
    description:
      "This modern UI/UX design website is built using technologies, including HTML, CSS, and React JS. We have utilized the power of React JS to create a dynamic and interactive user interface that is both responsive and easy to navigate.",
    img: chatgpt3,
    demo_url: "https://chatgpt3-uiux-design.netlify.app/",
    github_url: "https://github.com/mahendra-init/ChatGP3-Modern-UI-UX-Website",
  },
];

const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="projects" id="Projects">
      <span style={{ color: darkMode ? "white" : "" }}>
        Recent <span style={{ color: "var(--orange)" }}>Projects</span>
      </span>

      <div className="p-cards">
        {projects.map(({ name, description, img, demo_url, github_url }) => (
          <div className="p-card" key={name}>
            <div className="p-card-left">
              <img src={img} alt="img" />
            </div>
            <div className="p-card-right">
              <span>{name}</span>
              <span>{description}</span>
              <div className="p-buttons">
                <div
                  className="button"
                  onClick={() => window.open(demo_url, "_blank")}
                >
                  Demo
                </div>
                <div
                  className="button"
                  onClick={() => window.open(github_url, "_blank")}
                >
                  Code
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
