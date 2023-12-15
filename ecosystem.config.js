module.exports = {
  apps: [
    {
      name: 'MyIp',
      script: './dist/index.js',
      env: {
        PORT: 4265,
      },
    },
  ],
}
