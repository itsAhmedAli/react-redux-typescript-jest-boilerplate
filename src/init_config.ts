import config from "react-global-configuration";

const initializeConfig = async () => {
  const env = process.env.NODE_ENV || "development";

  let envConfig = {};

  if (env === "production") {
    envConfig = await import("../configs/production.json");
  } else {
    envConfig = await import("../configs/development.json");
  }
  config.set(envConfig);
};

export default initializeConfig;
