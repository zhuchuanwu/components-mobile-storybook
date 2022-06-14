import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { DEFAULT_EXTENSIONS } from "@babel/core";

import pkg from "./package.json";

export default [
  {
    input: "./index.tsx",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "es",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve(),
      typescript(),
      json(),
      commonjs(),
      babel({
        babelrc: false,
        exclude: ["node_modules/**", "example/**"],
        extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
        presets: ["@babel/preset-react"],
      }),
    ],
    external: ["react", "react-native"],
  },
];
