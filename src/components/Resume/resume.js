import React from "react";
import{ Container, Card } from 'react-bootstrap'

function Resume() {
  return (
    <section>
        <Container>
            <Card>
      <div>
        <h1>Krista McPherson</h1>
        <Card.Body>
        <Card.Text>Scottsdale, AZ 85250</Card.Text>
        <Card.Text>602.478.0038</Card.Text>
        <Card.Text>kmcpherson49@gmail.com</Card.Text>
        <Card.Link href="https://www.linkedin.com/in/kristamcpherson">LinkedIn</Card.Link>
        <Card.Link href="https://github.com/kmcpherson49">Github</Card.Link>
        <Card.Link href="https://docs.google.com/document/d/1OV7mQpOCNDQKPGSOmb33fNhzGmDh09cAG6Q8X97SVlk/edit?usp=sharing" target="_blank">Download my Resume</Card.Link>
        </Card.Body>
      </div>
      <div>
      {/* <a href="./public/resume/Krista McPherson Resume.jpg" download="Krista McPherson Resume">Download A Copy of My Resume</a> */}
      
      </div>
      <div>
        <Card.Title>Summary</Card.Title>
        <p>
        Full Stack Web Developer with a background in social media marketing. Life-long learner recognized for delivering quality services and products and conceiving innovative and resourceful solutions. Self-starter and effective interpersonal communicator that thrives in collaborative team environments. Proven problem solver passionate about creating engaging and user-centric experiences. 
        </p>
      </div>
      <div>
        <Card.Title>Technical Skills</Card.Title>
        <p>
          Node.Js | Express | JavaScript | jQuery | React.js | React | JSX | GIT
          | GitHub | MongoDB | MySQL | Mongoose | Handlebars | HTML5 | CSS3 |
          Bootstrap | Materialize | APIs | Heroku | Terminal | AJAX | Restful
          API | ES6 | React Hooks | JSON | Sequelize
        </p>
      </div>
      <div>
        <Card.Title>Education</Card.Title>
        <Card.Title>Full Stack Web Development Certificate</Card.Title>
        <Card.Text>University of Arizona</Card.Text> <Card.Text>2021</Card.Text>
        <Card.Title>
          Bachelor of Science in Communication (Minor in Digital Audiences)
        </Card.Title>
        <Card.Text>Arizona State University</Card.Text> <Card.Text>2020</Card.Text>
        <Card.Title>Certificate in Social Media Marketing </Card.Title>
        <Card.Text>Scottsdale Community College</Card.Text> <Card.Text>2019</Card.Text>
      </div>
      <div>
        <Card.Title>Experience</Card.Title>
        <Card.Title>Marketing Associate </Card.Title>
        <Card.Title>Emerald Wealth</Card.Title>
        <Card.Text>2020 - Present</Card.Text>
        <Card.Text>
          Redesigned and maintain current website for a user-friendly
          experience. Create content for Facebook and Linkedin. Serve as a FINRA
          approved manager of account records. Edit and film marketing videos
          and prepare scripts, and create copy and assets for email newsletters
          and invitations.
          <ol>
            <li>-Improved efficiency by identifying weak points in workflow and implemented automated platforms.</li>
            <li>-Expanded the client base through the acquisition of 12 new clients in less than a year by cultivating strategic relationships and delivering effective interpersonal communication to ensure transparency. </li>
          </ol>
        </Card.Text>
        <Card.Title>Social Media Marketing Specialist</Card.Title>
        <Card.Title>Scottsdale Pavilion Entertainment Complex</Card.Title>
        <Card.Text>2018 - 2020</Card.Text>
        <Card.Text>
          Managed all social platforms. Created content for instagram, email
          newsletters, and Facebook. Enhanced sales growth by planning and
          executing social media campaigns and cultivating client relations.
          <ol>
            <li>-Boosted sales by planning and executing social media campaigns and cultivating client relations. </li>
            <li>-Spiked Instagram engagement and follower base 70% by implementing a “Takeover Thursdays” collaborative event, providing artists the opportunity to create content and showcase their skills. </li>
          </ol>
          </Card.Text>
      </div>
      </Card>
      </Container>
    </section>
  );
}

export default Resume;
