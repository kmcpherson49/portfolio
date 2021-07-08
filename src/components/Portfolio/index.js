import React, { useState } from "react";
import { Card } from "react-bootstrap";


function Portfolio() {
  
  const [project] = useState([
    {
      image: "../../6.jpg",
      name: "FATE",
      description:
        "This project is a Full Stack MERN application that allows users to explore the world of astrology. Explore your fate by getting a Tarot Readings and Daily Horoscopes.",
      deployed: "https://fate-readings.herokuapp.com/",
      repo: "https://github.com/sstevens22/Interactive-Project",
    },
    {
      image: "https://raw.githubusercontent.com/kmcpherson49/portfolio/main/public/screenshots/0.jpg",
      name: "Planetarium Party",
      description:
        "This project is an app that allows users to search for their favorite planet and in return they'll get an image from the NASA API and a portion of the Wikipedia article about that planet. It features continuous dark mode to enhance the feel of being in space.",
      deployed: "https://emistew14.github.io/Planetarium-Party/",
      repo: "https://github.com/kmcpherson49/Planetarium-Party",
    },
    {
      image: "https://raw.githubusercontent.com/kmcpherson49/portfolio/main/public/screenshots/1.jpg",
      name: "Weather Dashboard",
      description:
        "This project is a weather app that will give users the forecast for the day plus a 5-day forecast",
      deployed: "https://kmcpherson49.github.io/weather-dashboard/",
      repo: "https://github.com/kmcpherson49/weather-dashboard",
    },
    {
      image: "https://raw.githubusercontent.com/kmcpherson49/portfolio/main/public/screenshots/2.jpg",
      name: "Day Planner",
      description:
        "This project is an electronic day planner used to add tasks to time slots in order to stay organized.",
      deployed: "https://kmcpherson49.github.io/work-scheduler/",
      repo: "https://github.com/kmcpherson49/work-scheduler",
    },
    {
      image: "https://raw.githubusercontent.com/kmcpherson49/portfolio/main/public/screenshots/3.jpg",
      name: "Password Generator",
      description:
        "This project is a password generator that will give users a secure, random password after a series of prompts.",
      deployed: "https://kmcpherson49.github.io/password-generator/",
      repo: "https://github.com/kmcpherson49/password-generator",
    },
    {
      image: "https://raw.githubusercontent.com/kmcpherson49/portfolio/main/public/screenshots/4.jpg",
      name: "Food Truck App",
      description:
        "This project is an app that allows users to search for a local food truck to read reviews, leave ratings, post about the food trucks, and find contact information for the trucks.",
      deployed: "https://local-food-truck-finder.herokuapp.com/",
      repo: "https://github.com/kmcpherson49/food-truck-rating",
    },
    {
      image: "https://raw.githubusercontent.com/kmcpherson49/portfolio/main/public/screenshots/5.jpg",
      name: "Budget Tracker",
      description:
        "This project is an app that allows users to track their spending while traveling or in everyday life. This app showcases the features of a Progessive Web Applications with a cache and offline capabilites.",
      deployed: "https://frozen-sierra-56639.herokuapp.com/",
      repo: "https://github.com/kmcpherson49/budget-tracker",
    },
  ]);

  return (
    <div>
      {project.map((project) => (
        <Card>
          <Card.Img variant="top" src={project.image} />
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href={project.deployed} target="_blank">Deployed</Card.Link>
            <Card.Link href={project.repo} target="_blank">Repo</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Portfolio;
