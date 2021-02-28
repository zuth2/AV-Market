import { User } from "../entities/User";
import { MyContext } from "../types";
import { PaginatedUsers } from "../util/type-graphql/PaginatedUsers";
import {
  Arg,
  Ctx,
  Int,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { getConnection } from "typeorm";
import { isAdmin } from "../middleware/authMiddleware";

@Resolver(User)
export class UserAdministrationResolver {
  @UseMiddleware(isAdmin)
  @Query(() => PaginatedUsers)
  async getUsers(
    @Arg("limit", () => Int, { defaultValue: 50 }) limit: number,
    @Arg("offset", () => Int, { defaultValue: 0 }) offset: number
  ): Promise<PaginatedUsers> {
    const limitPlusOne = limit + 1;

    const users = await getConnection()
      .getRepository(User)
      .createQueryBuilder()
      .orderBy("id")
      .skip(offset)
      .take(limitPlusOne)
      .getMany();

    return {
      users: users.slice(0, limit),
      hasMore: users.length === limitPlusOne,
    };
  }

  @UseMiddleware(isAdmin)
  @Mutation(() => Boolean)
  async banUser(@Arg("id", () => Int) id: number) {
    await User.update(id, { banned: true });
    return true;
  }

  @UseMiddleware(isAdmin)
  @Mutation(() => Boolean)
  async unbanUser(@Arg("id", () => Int) id: number) {
    await User.update(id, { banned: false });
    return true;
  }
}