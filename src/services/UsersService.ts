import UsersRepository from "../repositories/UsersRepository"

class UsersService {
  async create(email: string) {
    const userExists = await UsersRepository.findOne({
      select: ['email'],
      where: {
        email
      }
    })

    if (userExists) {
      return userExists;
    }

    const user = UsersRepository.create({
      email
    })

    await UsersRepository.save(user);

    return user;
  }
}

export { UsersService }
