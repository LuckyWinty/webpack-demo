
const path = require('path');

module.exports = {
    // The Webpack config to use when compiling your react app for development or production.
    webpack: function(config, env) {
      // ...add your webpack config
      return config;
    },
    devServer: function(configFunction) {
        return function(proxy, allowedHost) {
            // Create the default config by calling configFunction with the proxy/allowedHost parameters
            const config = configFunction(proxy, allowedHost);
      
            // Change the https certificate options to match your certificate, using the .env file to
            // set the file paths & passphrase.
            config.hot = true
            console.log('---',config)
            // Return your customised Webpack Development Server config.
            return config;
          };
    }
}