
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';

import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Wayfarers&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=PastelGreen&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
               
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Ritik Singh </h2>
            <h4 style={{color: 'grey'}}>IT Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p> I'm  a web developer 
              I have recently started working with machine learning and very enthusiast about all concept related to data science and all that stuff.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>410218, kalamboli, Navi Mumbai</p>
            <h5>Phone</h5>
            <p>9321714905</p>
            <h5>Email</h5>
            <p>ritiksingh2615@gmail.com</p>
            <h5>Web</h5>
            <p>ritiksingh.netlify.app</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
                 
                 schoolName="SSC"
                 schoolDescription="Completed my SSC that is  secondary education with affiliation to maharashtra State board with distinction (93%) "
                  />
            <Education
                 
                 schoolName="HSC"
                 schoolDescription="Completed my HSC that is higher secondary education with affiliation to maharashtra State board with distinction (89.08%)"
                  />

            <Education
              
              schoolName="Government College of Engineering Amravati"
              schoolDescription=" Now currently studying in Second year in GCOEA as IT engineer. 
             "
               />

             
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={90}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={35}
                    />
                    <Skills
                      skill="React"
                      progress={65}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;