import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class AboutUs extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <img
              src="http://simpleicon.com/wp-content/uploads/multy-user.png"
              alt="avatar"
              className="avatar-img"
            />
            <h2>Team H</h2>

            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              We, Tomader, Lina, and Ghaliah, have developed this site using
              React.
            </p>
            {/* <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              This team has 3 members, Tomader as a leader, Lina Alhuri, and
              Ghaliah.
            </p>
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              In this project we tried to make a web site using React.
            </p> */}
          </Cell>
          <Cell col={6}>
            <h2>Contact Us</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-fax" aria-hidden="true" />
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    someone@example.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    MySkypeID
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default AboutUs;
