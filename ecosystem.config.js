module.exports = {
  apps: [
    {
      name: 'procstudio',
      script: 'pnpm',
      args: 'start',
      cwd: '/home/staging/procstudio',
      env: {
        NODE_ENV: 'staging',
      },
    },
  ],
};
