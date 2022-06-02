const aliases = require("module-alias-jest/register")

/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	moduleNameMapper: aliases.jest,
	modulePathIgnorePatterns: ["<rootDir>/build/"],
	verbose: true,
}