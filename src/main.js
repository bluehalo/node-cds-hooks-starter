const { initialize } = require('./server');
const container = require('./lib/winston.js');
const config = require('./config');

const exampleService = require('./hooks/get-risk.hook');

/**
 * @name exports
 * @static
 * @summary Setup server and start the application
 * @function main
 */
module.exports = async function main() {
  let logger = container.get('application');

  // Build our server
  logger.info('Initializing CDS Server');

  const app = initialize(config).registerService(exampleService);

  const { server: serverConfig } = config;

  // Start the application
  app.listen(serverConfig, () => {
    logger.info('Application listening on port: ' + serverConfig.port);
  });
};
