import expressRouter from "./router";
import express, { Express } from "express";
import config from "../config/constants";
import * as http from "http";

export default class AppServer {
  private readonly express: Express;
  private httpServer?: http.Server;
  constructor() {
    this.express = express();
  }
  public async start(): Promise<void> {
    this.express.use(expressRouter.registerRoutes());
    return new Promise((resolve) => {
      this.httpServer = this.express.listen(config.port, () => {
        console.log("Server on port: ", config.port);
        resolve();
      });
    });
  }

  public async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close((error) => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }
      return resolve();
    });
  }
}
