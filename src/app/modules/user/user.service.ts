
import { IUser } from "./user.inerface";
import { User } from "./user.model";

const createUser = async (payload: Partial<IUser>) => {
  const { name, email } = payload;

  const user = await User.create({
    name,
    email,
  });

  return user;
};

export const UserServices = {
  createUser,
};
