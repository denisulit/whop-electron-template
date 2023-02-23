import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { Axios, AxiosError, AxiosResponse } from "axios";

dotenv.config();

const app: Express = express();
const axiosClient = new Axios();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/callback", (req: Request, res: Response) => {
  //Check required params
  if (req.query.code && req.query.scope && req.query.state) {
    const requestOptions = {
      method: "POST",
      url: "https://data.whop.com/oauth/token",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        grant_type: "authorization_code",
        code: req.query.code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
      },
    };
    axiosClient
      .request(requestOptions)
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          res.status(200).json({
            success: true,
            data: response.data,
          });
        } else {
          console.error(response.data);
          res.status(400).json({
            success: false,
            msg: "Whop Error",
          });
        }
      })
      .catch((error: AxiosError) => {
        console.error(error);
        res.status(500).json({
          success: false,
          msg: "Failed to fetch the token, please try again!",
        });
      });
  } else {
    res.status(400).json({
      success: false,
      msg: "Invalid Parameters",
    });
  }
});

app.listen(port, () => {
  console.log(`Express is running at http://localhost:${port}`);
});
