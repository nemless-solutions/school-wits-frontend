module.exports = {
  apps: [
    {
      name: "student-portal",
      script: "node_modules/next/dist/bin/next",
      args: "start apps/student-portal",
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
};
