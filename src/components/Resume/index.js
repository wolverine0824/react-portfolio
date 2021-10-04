import React from 'react';

function Resume() {

  return (
    <div>

      <div class="row">
      <h2 class="font-weight-bold">Contact</h2>
                <div>230 Lakemont Dr</div>
                <div>Fayetteville, GA 30215</div>
                <div>470-277-9467</div>
                <div>Logonpierce@icloud.com</div>
                <div>Github Wolverine0824</div>
                
                <h2 class="font-weight-bold">Logon pierce</h2>
                <div>Full Stack Developer experienced in building scalable web applications
                    and tools that improve efficiency and customer engagement.
                    Experienced in both entrepreneurial
                    and corporate environments, Matthew is a proud team player focused on
                    achieving project goals accurately and efficiently.</div>
         
            </div>

        <div className="row font-weight-bold">
            <h4 className="title">Experience</h4>
          </div>
            <h4 className="title">Technologies</h4>

        <div className="row">
          <div className="col-lg-7 offset-lg-1 col-md-7 offset-md-1 col-sm-8 offset-sm-1">

            <h5>
              <span className="font-weight-bold">Georgia Institute of Technology</span>
              <span className="font-italic">— Full-stack Developer</span>
            </h5>
            <div>04/2021 - PRESENT </div>
            <ol className="tittle">
              <li>Developed an e-commerce site based on Materialize CSS,
                Handlebars and Node.js expanding revenue streams and customer engagement (deployed on Heroku)</li>
              <li>Organized weekly meetings to review any ongoing team issues and get updates on development progression.</li>
              <li>Learned new emerging technologies and took initiative to offer technical direction and creative solutions.</li>
              <li>Built, tested and deployed a variety of web applications using the MERN stack.</li>
            </ol>

          </div>
          <div className=" col-lg-3 col-lg-3 col-lg-1 ">
            <div>HTML, CSS, JavaScript, Git, APIs, NPM, Jest, Node.js, Express, Sequelize,
              MySQL, Handlebars, OOP, ORM, MVC, MongoDB, and React</div>

            <h4 className="title">Skills</h4>
            <div>Leadership, Relationship Building, Communication, Teamwork, Time Management, Client Relations,
              Coaching/Teaching, Multitasking,
              Prioritization, Process Review, Strategic Planning, Research, Business Process</div>

          </div>

        </div>

        <div className="row   offset-lg-1  offset-md-1  offset-sm-1 mt-4">
          <div className="font-weight-bold">
            <h4 className="title">Education</h4>
          </div>
        </div>

        <div className="row offset-lg-1  offset-md-1  offset-sm-1 mb-5">
          <h5 className="font-weight-bold">Georgia Institute of Technology,</h5>
          <div>04/ 2021 - 10/2021</div>
          <div>Full Stack Development Program (MERN Stack)</div>
        </div>
      </div>
      );
  }


      export default Resume;