import React, { Fragment } from "react";

import {
  ListItem,
  ListItemIcon,
  DashboardIcon,
  ListItemText,
  PeopleIcon
} from "../../includes";
import { Link } from "react-router-dom";
export const mainListItems = (
  <Fragment>

    <Link to="/dashboard" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>

    <Link to="/blank" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="2nd Page" />
      </ListItem>
    </Link>
    
  </Fragment>
);
