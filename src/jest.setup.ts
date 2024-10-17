import "@testing-library/jest-dom";
import config from "react-global-configuration";

const fs = require("fs");
const envConfig = JSON.parse(fs.readFileSync("configs/development.json"));
config.set(envConfig, { freeze: false, assign: false });
console.error = jest.fn();
