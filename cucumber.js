let common = [
  "features/**/*.feature",
  "--require-module ts-node/register",
  "--require features/support/**/*.ts",
  "--publish-quiet",
].join(" ");

module.exports = {
  default: common,
};
