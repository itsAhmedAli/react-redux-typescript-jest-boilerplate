import config from "react-global-configuration";

const env = process.env.NODE_ENV || "development";
const configs = require(`configs/${env}.json`);
config.set({ ...configs });
