import ip from "ip";
import { merge } from "webpack-merge";
import HtmlPlugin from "html-webpack-plugin";
import commonConfig from "@arzyu/webpack-config-common";

const devMode = process.env.NODE_ENV !== "production";

const config = merge(commonConfig, {
  plugins: [
    new HtmlPlugin({
      template: "index.ejs",
      templateParameters: {
        reactDevtools: devMode ? `//${ip.address()}:8097` : false
      },
      inject: "body"
    })
  ]
});

export default config;
