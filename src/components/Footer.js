import React from 'react'
import { Container,Box,Grid,Typography,Avatar,IconButton } from '@mui/material'
import { LinkedIn,Phone, Email, Room, WebAsset, Instagram } from '@mui/icons-material'
// import { makeStyles } from '@material-ui/core/styles'



const Footer = (props) => {

  // const classes = useStyles();

  const content = {
    'contact1': 'Address',
    'contact1-desc1': 'Amrutha P',
    'contact1-desc2': 'Pullanthodi(HO)',
    'contact1-desc3': 'Kottappuram(PO)',
    'contact1-desc4': 'Palakkad,Kerala',
    'contact1-desc5': 'Pin : 679513',
    'contact2': 'Email',
    'contact2-desc': 'amruthap995@gmail.com',
    'contact3': 'Social Media',
    'contact4': 'Phone',
    'contact4-desc': '8075484215',
    ...props.content
  };

  return (
    <div style={{paddingTop:'10px'}}>
      <Container maxWidth="lg">
        <Box py={10}>
          <Grid container spacing={6}>
            
            <Grid item xs={12} sm={1} md={3}>
              <div>
                <Box display="flex" mb={3}>
                  <div>
                    <Avatar>
                      <Room color="primary" fontSize="small" />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography variant="h6" gutterBottom={true}>{content['contact1']}</Typography>
                    <Typography variant="body2" color="textSecondary">{content['contact1-desc1']}</Typography>
                    <Typography variant="body2" color="textSecondary">{content['contact1-desc2']}</Typography>
                    <Typography variant="body2" color="textSecondary">{content['contact1-desc3']}</Typography>
                    <Typography variant="body2" color="textSecondary">{content['contact1-desc4']}</Typography>
                    <Typography variant="body2" color="textSecondary">{content['contact1-desc5']}</Typography>
                    
                  </Box>
                </Box>
                </div>
                </Grid>
                <Grid item xs={12} sm={1} md={3}>
              <div>
                <Box display="flex">
                  <div>
                    <Avatar>
                      <Email color="primary" fontSize="small" />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography variant="h6" gutterBottom={true}>{content['contact2']}</Typography>
                    <Typography variant="body2" color="textSecondary">{content['contact2-desc']}</Typography>
                  </Box>
                </Box>
                </div>
                </Grid>
              
            <Grid item xs={12} sm={1} md={3}>
              <div>
              <Box display="flex" mb={3}>
              <div>
                  <Avatar>
                    <WebAsset color="primary" fontSize="small" />
                  </Avatar>
                </div>
                <Box ml={2}>
                  <Typography variant="h6" gutterBottom={true}>{content['contact3']}</Typography>
                  <IconButton href="https://instagram.com/amruthap8?igshid=OTk0YzhjMDVlZA==" color="inherit">
                    <Instagram />
                  </IconButton>
                  <IconButton href="amruthap995@gmail.com" color="inherit">
                    <Email />
                  </IconButton>
                  <IconButton href="https://www.linkedin.com/in/amrutha-p-666930208?trk=contact-info" color="inherit">
                    <LinkedIn />
                  </IconButton>
                </Box>
              </Box>
              </div>
              </Grid>
              <Grid item xs={12} sm={1} md={3}>
              <div>
              
              <Box display="flex">
                <div>
                  <Avatar>
                    <Phone color="primary" fontSize="small" />
                  </Avatar>
                </div>
                <Box ml={2}>
                  <Typography variant="h6" gutterBottom={true}>{content['contact4']}</Typography>
                  <Typography variant="body2" color="textSecondary">{content['contact4-desc']}</Typography>
                </Box>
              </Box>
              </div>
            </Grid>
            </Grid>
          </Box>
      </Container>
    </div>
  )
}

export default Footer