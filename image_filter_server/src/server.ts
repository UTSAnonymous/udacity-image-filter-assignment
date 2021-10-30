import express from 'express';
import { Request, Response } from "express";
import bodyParser from 'body-parser';

import  {requireAuth} from "./auth";
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // Root Endpoint
  // Displays a simple message to the user
  app.get("/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );

  // filteredimage Endpoint
  // Filter image and return filtered image to user
  app.get("/filteredimage/",
    requireAuth,
    async(req: Request, res: Response) => {
    let { image_url } = req.query;
    console.log(image_url)

    if (!image_url) {
        res.status(400).send('No image_url provided')
    };

    try {
      const img_path = await filterImageFromURL(image_url);      
      res.status(200).sendFile(img_path, err => {
        if (!err) {
          deleteLocalFiles([img_path]);
        }
        });
    }
    catch {
      res.status(500).send("Unable to process image")
    }
  });

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();