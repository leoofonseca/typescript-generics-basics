import {
  Connection,
  DeepPartial,
  EntityManager,
  EntityTarget,
  Repository,
} from "typeorm";

interface BaseEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

interface Address extends BaseEntity {
  street: string;
  number: string;
  complement?: number;
}

interface UserEntity extends BaseEntity {
  name: string;
  email: string;
  address: Address;
}

let entityTarget: EntityTarget<UserEntity>;
let manager: EntityManager;

// type DeepPartial<T> = {
//   [K in keyof T]?: DeepPartial<T[K]>;
// };
const updateUser = async (user: DeepPartial<UserEntity>) => {
  const repo = new Repository(entityTarget, manager);
  return await repo.save(user);
};

updateUser({
  name: "Fleye",
  address: {
    number: "33",
  },
});
