export type CreateSquadDTO = {
	name: string;
	email: string;
	level: Level;
};

enum Level {
	JUNIOR,
	PLENO,
	SENIOR,
}
