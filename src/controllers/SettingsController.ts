import SettingsRepository from "../repositories/SettingsRepository";
import { Request, Response } from "express";

class SettingsController {
  async create(req: Request, res: Response) {
    const { chat, username } = req.body;

    const settings = SettingsRepository.create({
      chat,
      username
    })

    await SettingsRepository.save(settings);

    return res.json(settings);
  }
}

export { SettingsController };
