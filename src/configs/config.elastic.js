import { configEnvs } from './config.env.js';
import { Client } from '@elastic/elasticsearch';

// export const client = new Client({
//   node: configEnvs.NODE,
//   auth: {
//     apiKey: configEnvs.API_KEY
//   }
// });

export const client = new Client({
  node: 'https://lea-ecomart.es.eastus2.azure.elastic-cloud.com',
  auth: {
    apiKey: 'RTdDMXk0MEJfdEJOWEFHMUoyaVc6S3ktQzNmcldSVld2bzZBaEpuUDU1dw=='
  }
});
