const path = require("path");

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? process.env.BASE_URL : "/",

  configureWebpack: {
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components/")
      },
      extensions: [".js", ".vue", ".json"]
    }
  }
};
