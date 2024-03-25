import fs from "node:fs";

export function config({ path = ".env" } = {}) {
  try {
    const params = fs.readFileSync(path, "utf-8");

    const chumi = params.replace(/"/g, "").split("\n");
    const mingus = chumi.map((item) => {
      const [key, ...value] = item.split("=");
      const joinedValue = value.join("=");
      process.env[key] = joinedValue;
    });
  } catch (error) {
    console.log(error);
  }
}

const dotenv = {
  config,
};

export default dotenv;
