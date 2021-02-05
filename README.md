# CLEAR Take Home

## Setup / View:

There are two options for testing out this application:
- View online at [airen.codes](https://www.airen.codes)
- Setup locally


### Overview
This project is primarily a React App generated from the standard create-react-app script and can be run like any standard react application as described below.

### Local Setup:
- run `git clone https://github.com/airensurzyn/clear_take_home.git` in the directory of your choice
- run `cd client`
- run `npm install`
- run `npm start`

This will start up the react project which can run on its own on your local machine.

The server folder is the backend necessary to run the project on Google Cloud. It serves the React index.html from a build folder created at deploy time.


### Goals and Features:
- Creates a simple SPA that features a table displaying results retrieved from CLEAR's mock api
- Opens a modal displaying detailed information about organizations
- Shows members affiliated with the organizations in the modal
- Creates a map of the US which uses long/lat-based markers fed from a JSON file
  - I tried to map the addresses/zip codes from the organization objects, but I don't think they are real and was unable to get real long/lat coordinates
