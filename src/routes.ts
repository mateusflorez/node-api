import { response, Router } from "express";
import { getCustomRepository } from "typeorm";
import SettingsRepository from "./repositories/SettingsRepository";

const routes = Router();

routes.post("/settings", async (req, res) => {
  const { chat, username } = req.body;

  const settings = SettingsRepository.create({
    chat,
    username
  })

  await SettingsRepository.save(settings);

  return res.json(settings);
})

export { routes };
