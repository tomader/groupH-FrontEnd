import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button
} from "react-mdl";
const BSON = require("bson");

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = { CVs: [] };
    fetch('http://localhost:5000/api/items/')
      .then(resp => resp.json())
      .then(data => {
        this.setState({ CVs: data })
      });
  }

  toggleCategories() {
    return (
      <div className="projects-grid">
        {this.state.CVs.map(function (cv) {
          return (
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  height: "210px",
                  background:
                    "url(https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png) center / cover"
                }}
              >
              </CardTitle>
              <CardText>
                Name: {cv.name}

              </CardText>
              <CardText>
                University: {cv.University}
              </CardText>
              <CardText>Major: {cv.Major}</CardText>
              <Grid>
                <CardActions border>
                  <a href={BSON.deserialize(Buffer.from(cv.file.data)).name} download>Download</a>
                </CardActions>
              </Grid>
            </Card>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Preview;
