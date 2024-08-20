import React from 'react'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import { Avatar, Container, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/index.css'


const drawerWidth = 230

export default function Layout({ children }) {
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    {
      text: 'About Me',
      icon: <PersonOutlineOutlinedIcon color="secondary" />,
      path: '/'
    },
    {
      text: 'Resume',
      icon: <InsertDriveFileOutlinedIcon color="secondary" />,
      path: '/resume'
    },
    {
      text: 'Projects',
      icon: <CodeOutlinedIcon color="secondary" />,
      path: '/projects'
    },
    {
      text: 'Teaching',
      icon: <SchoolOutlinedIcon color="secondary" />,
      path: '/teaching'
    },
    {
      text: 'Contact',
      icon: <ConnectWithoutContactOutlinedIcon color="secondary" />,
      path: '/contact'
    }
  ]

  return (
    <Container
      maxWidth={false}
      style={{
        paddingLeft: 0,
        paddingRight: 0
      }}
      sx={{
        display: 'flex',
      }}
    >
      {/* Left Drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center'
          }
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography 
          variant="h5"
          sx={{
            marginTop: 3,
            marginBottom: 2,
            textAlign: 'center',
            width: '100%',
            fontWeight: 'bold'
          }}
        >
          Jonathan Coulter
        </Typography>

        <Avatar 
          src="/images/pfp.png"
          sx={{
            width: 180,
            height: 180,
            marginBottom: 2
          }}
        />

        {/* List/Links */}
        <List>
          {menuItems.map(item => (
            <ListItemButton
              key={item.text}
              onClick={() => navigate(item.path)}
              style={location.pathname === item.path ? { backgroundColor: '#f9f9f9' } : {}}
              sx={{
                width: drawerWidth,
                paddingLeft: 2.5
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}/>
            </ListItemButton>
          ))}
        </List>

      </Drawer>

      {/* Children */}
      <div
        style={{
          background: "#f9f9f9",
          width: "100%",
          padding: 20,
          maxWidth: null
        }}
      >
        {children}
      </div>
    </Container>
  )
}