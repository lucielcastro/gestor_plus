export type JWTPayload = { id: string } & Pick<User, "email">;

export type User = {
	authId?: string;
	email: string;
	password: string;
	avatar: string;
	name: string;
};

export interface UserMetadata {
	browser: string;
	ip: string;
	os: string;
}
