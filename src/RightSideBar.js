import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import Navbar from './Navbar';
const RightSideBar = () => {
  return (
    <Drawer variant="permanent" anchor="right">
      <Navbar />
      <List style={{ background: "rgb(2,3,33)", color: "white", fontWeight: "bold" }}>
        <ListItem button>
          <ListItemText primary="Menu Highlights"></ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Beverage Selection" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Upcoming Events" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Social Media Feed" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Menu Highlights"></ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Customer Reviews:" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Special Offers" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Chef's Corner" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Beverage Selection" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Upcoming Events" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Social Media Feed" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Menu Highlights"></ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Customer Reviews:" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Special Offers" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Chef's Corner" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Beverage Selection" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Upcoming Events" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Social Media Feed" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Menu Highlights"></ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default RightSideBar;