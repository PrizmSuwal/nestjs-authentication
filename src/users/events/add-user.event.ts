import { usersDTO } from "../users.dto";

export class AddUserEvent {
    constructor(public readonly users: usersDTO) {}
}