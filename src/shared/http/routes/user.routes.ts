import { Router } from "express"
import { CreateUserController } from "../../../modules/user/usecases/createUser/CreateUserController";
import { ListUsersController } from "../../../modules/user/usecases/listUsers/ListUsersController";
const router = Router();

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController();

router.post("/user", createUserController.handle)
router.get("/user", listUsersController.handle)

export { router }