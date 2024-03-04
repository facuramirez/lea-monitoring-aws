import { client } from '../../configs/config.elastic.js';
import { configEnvs } from '../../configs/config.env.js';

export const createIndex = async () => {
  try {
    return await client.indices.create({
      index: configEnvs.CURRENTINDEX,
      body: {
        mappings: {
          properties: {
            '@timestamp': { type: 'date', coerce: false },
            levelname: { type: 'keyword' },
            name: { type: 'keyword' },
            hostname: { type: 'keyword' },
            message: { type: 'text' },
            traceback: { type: 'text' },
            environment: { type: 'keyword' },
            module: { type: 'keyword' },
            request: { type: 'keyword' },
            state: { type: 'keyword' },
            organization: { type: 'keyword' },
            project: { type: 'keyword' }
          }
        }
      }
    });
  } catch (error) {
    throw error;
  }
};

export const checkExistsIndexApi = async ({ organizationId, projectId }) => {
  try {
    const indexExists = await client.indices.exists({
      index: `lea_status_log_${organizationId}_${projectId}`
    });
    if (!indexExists) throw `Index lea_status_log_${organizationId}_${projectId} do not exist`;
    return indexExists;
  } catch (error) {
    throw error;
  }
};

export const searchApi = async (params, query) => {
  const { organizationId, projectId } = params;

  try {
    return await client.search({ index: `lea_status_log_${organizationId}_${projectId}`, body: { query } });
  } catch (error) {
    throw error;
  }
};

export const bulkApi = async body => {
  const { organizationId, projectId } = body;

  try {
    return await client.bulk({ index: `lea_status_log_${organizationId}_${projectId}`, body: { query } });
  } catch (error) {
    throw error;
  }
};

// export const getAllDocuments = async () => {
//   try {
//     return await client.search({ index: configEnvs.CURRENTINDEX });
//   } catch (error) {
//     throw error;
//   }
// };

// export const getIndexInfo = async () => {
//   try {
//     return await client.index.mappings({ index: configEnvs.CURRENTINDEX });
//   } catch (error) {
//     throw error;
//   }
// };

// export const getCompanyById = async id => {
//   try {
//     return await client.search({ index: configEnvs.CURRENTINDEX, query: { match: { _id: id } } });
//   } catch (error) {
//     throw error;
//   }
// };

// export const createDocument = async () => {
//   try {
//     return await client.create({
//       id: crypto.randomUUID(),
//       index: configEnvs.CURRENTINDEX,
//       body: {
//         '@timestamp': new Date().toISOString(),
//         levelname: 'levelname asd',
//         name: 'name sda',
//         hostname: 'hostname asd',
//         message: 'message asd',
//         traceback: 344545,
//         environment: 'envi',
//         module: 'modulee',
//         request: 'request',
//         state: 'state asdsa',
//         organization: 'asdasdasfsdfsdf',
//         project: 'edsfdsfsdfsdf'
//       }
//     });
//   } catch (error) {
//     throw error;
//   }
// };

// export const updateCompany = async ({ id, name }) => {
//   try {
//     return await client.update({
//       id,
//       index: configEnvs.CURRENTINDEX,
//       body: {
//         doc: {
//           name: ''
//         }
//       }
//     });
//   } catch (error) {
//     throw error;
//   }
// };

// export const deleteIndex = async () => {
//   try {
//     return await client.indices.delete({
//       index: configEnvs.CURRENTINDEX
//     });
//   } catch (error) {
//     throw error;
//   }
// };
