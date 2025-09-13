import { ErrorCodes } from "./codes";

export const ErrorMessages: Record<ErrorCodes, string> = {
	[ErrorCodes.InternalServerError]: "Internal Server Error",
	[ErrorCodes.Unauthorized]: "Unauthorized",
	[ErrorCodes.InvalidEmail]: "Invalid email",
	[ErrorCodes.InvalidPassword]: "Invalid password",
	[ErrorCodes.UnknownUser]: "Unknown user",
};
