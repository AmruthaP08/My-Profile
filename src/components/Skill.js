import React from 'react'
import { List,ListItem,ListItemIcon,ListItemText,Collapse } from '@mui/material'
  import { CodeSharp,HtmlSharp,CssSharp,JavascriptSharp,SyncProblemSharp,FunctionsSharp,Diversity1Sharp } from '@mui/icons-material'

const Skill = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div style={{paddingTop:'10px'}}>
      <br />
      <h2 className='App'>My Skills</h2>
      <br />

      <List sx={{ width: '100%', maxWidth: 400, paddingLeft:'80px' }} aria-label="contacts">
      <ListItem>
        
          <ListItemIcon>
            <CodeSharp />
          </ListItemIcon>
          <ListItemText onClick={handleClick} primary="Coding👉🏾" />
          <Collapse in={open} timeout="auto" unmountOnExit>
          <List>
            <ListItem>
              <ListItemIcon>
            <i class="devicon-c-line"></i>
          </ListItemIcon>
              <ListItemText primary="C" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
            <i class="devicon-cplusplus-line"></i>
          </ListItemIcon>
              <ListItemText primary="C++" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
              <i class="devicon-python-plain"></i>
          </ListItemIcon>
              <ListItemText primary="Python" />
            </ListItem>
            <ListItem>
              <ListItemIcon><HtmlSharp /></ListItemIcon>
              <ListItemText primary="HTML" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CssSharp /></ListItemIcon>
              <ListItemText primary="CSS" />
            </ListItem>
            <ListItem>
              <ListItemIcon><JavascriptSharp /></ListItemIcon>
              <ListItemText primary="JavaScript" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
            <i class="devicon-mysql-plain-wordmark"></i>
          </ListItemIcon>
              <ListItemText primary="SQL" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
            <i class="devicon-react-original"></i>
          </ListItemIcon>
              <ListItemText primary="React JS" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
            <i class="devicon-java-plain"></i>
          </ListItemIcon>
              <ListItemText primary="Java" />
            </ListItem>
            
          </List>
          </Collapse>
      
      </ListItem>
      <ListItem>
      <ListItemIcon><SyncProblemSharp /></ListItemIcon>
          <ListItemText inset primary="Problem Solving" />
      </ListItem>
      <ListItem>
      <ListItemIcon><FunctionsSharp /></ListItemIcon>
          <ListItemText inset primary="Mathematical Reasoning" />
      </ListItem>
      <ListItem>
      <ListItemIcon><Diversity1Sharp /></ListItemIcon>
          <ListItemText inset primary="Team Management" />
      </ListItem>
    </List>

     
    </div>
  )
}

export default Skill