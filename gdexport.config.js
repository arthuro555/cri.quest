module.exports = {
  project: "./game.json",
  output: "./dist",
  gdevelopVersion: "v5.0.124",
  plugins: [
  	require("@gdexporter/plugin-manifest"),
	require("@gdexporter/plugin-offline"),
  ],
};
