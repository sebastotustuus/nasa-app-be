import cors from "cors";
import express, { Router } from "express";
import helmet from "helmet";
import compression from "compression";
// import { buildContainer as container } from "../infrastructure/di/container";
import roverPhotos from "./modules/photos";

class ExpressRouter {
  private readonly app: Router;

  constructor() {
    this.app = express.Router();
  }

  public registerRoutes(): Router {
    this.app
      .use(express.json())
      .use(express.urlencoded({ extended: false }))
      .use(cors())
      .use(helmet.xssFilter())
      .use(helmet.noSniff())
      .use(helmet.hidePoweredBy())
      .use(helmet.frameguard({ action: "deny" }))
      .use(compression());
    this.configIoC();
    this.injectRoutes();
    return this.app;
  }

  private injectRoutes() {
    this.app.use("/api/v1/photos", roverPhotos.register(this.app));
    // Other routes...
  }

  private configIoC() {
    // this.app.set("container", container());
  }
}

export default new ExpressRouter();
