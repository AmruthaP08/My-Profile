import { List,ListItem,ListItemText,ListItemIcon } from '@mui/material'
import { MusicNoteSharp,MenuBookSharp,ElectricMopedSharp,TheatersSharp } from '@mui/icons-material'
import React from 'react'

const About = () => {
  return (
    <div>
    <div className='App' style={{paddingTop:'10px'}}>
        <h2>About Me</h2>
        <br />
        <p>I am Amrutha. BTech 3rd year Computer Science and Engineering student at collage of Engineering Trivandrum(CET).I completed my completed my polytechnic diploma in computer engineering.</p>
        <p>I seek challenging opportunities where I can fully use my skills for the success of the
organization and also for improving my skills itself.</p><br />
</div>
<div>
    <h3 style={{paddingLeft:'650px'}}>Hobbies..</h3>
    <List style={{paddingLeft:'600px'}}>
            <ListItem>
              <ListItemIcon><MenuBookSharp /></ListItemIcon>
              <ListItemText primary="Reading" />
            </ListItem>
            <ListItem>
              <ListItemIcon><MusicNoteSharp /></ListItemIcon>
              <ListItemText primary="Music" />
            </ListItem>
            <ListItem>
              <ListItemIcon><ElectricMopedSharp /></ListItemIcon>
              <ListItemText primary="Travel" />
            </ListItem>
            <ListItem>
              <ListItemIcon><TheatersSharp /></ListItemIcon>
              <ListItemText primary="Movie" />
            </ListItem>
          </List>
          </div>
    </div>
  )
}

export default About