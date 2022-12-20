import SettingsRepository from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  async create({ chat, username }: ISettingsCreate) {
    const userAlreadyExists = await SettingsRepository.findOne({
      select: ['username'],
      where: {
        username
      }
    })

    if (userAlreadyExists) {
      throw new Error("User already exists!")
    }

    const settings = SettingsRepository.create({
      chat,
      username
    })

    await SettingsRepository.save(settings);

    return settings;
  }
}

export { SettingsService }
