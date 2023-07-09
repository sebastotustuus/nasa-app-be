import { Request, Response, NextFunction } from "express";

export class FlightController {
  public async statusFlight(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    res.status(200).json({});
  }
}
