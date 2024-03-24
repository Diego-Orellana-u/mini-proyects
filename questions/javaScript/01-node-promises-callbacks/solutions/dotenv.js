import fs from "node:fs";

const dotenv = {
  process: {
    env: {},
  },

  config: function (path = ".env") {
    const params = fs.readFileSync(path, "utf-8");

    const chumi = params.replace(/"/g, "").split("\n");
    const mingus = chumi.map((item) => item.split("="));
    for (let item of mingus) {
      process.env[item[0]] = item[1];
    }
  },
};

export default dotenv;
