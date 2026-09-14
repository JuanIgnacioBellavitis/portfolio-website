import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [".next/**", "out/**", "build/**", "node_modules/**"],
  },
  ...nextCoreWebVitals,
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];

export default config;
