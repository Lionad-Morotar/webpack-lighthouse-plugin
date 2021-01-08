module.exports = config => ({
  ...config,
  ...(config.settings || {}),
})
