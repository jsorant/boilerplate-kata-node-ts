module.exports = {
  default: {
    format: ["progress"],
    requireModule: ["ts-node/register"],
    require: ["features/support/*.ts"],
    publishQuiet: true,
  },
};
