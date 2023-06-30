module.exports = {
  apps: [{
    script: 'pnpm start'
  }],

  deploy: {
    staging: {
      user: 'staging',
      host: '34.214.28.153',
      ref: 'origin/developer',
      repo: 'git@github.com:Jemisson/procstudio.git',
      path: '/home/staging',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env staging',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    },
    production: {
      user: 'production',
      host: '34.214.28.153',
      ref: 'origin/developer',
      repo: 'git@github.com:Jemisson/procstudio.git',
      path: '/home/production',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    },
  }
};
