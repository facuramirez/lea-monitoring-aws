import { configEnvs } from '../configs/config.env.js';
import { bulkApi, checkExistsIndexApi, createIndex, searchApi } from '../globals/services/transcriptor.service.js';

export class TranscriptorModel {
  constructor() {}

  static async createTranscriptorIndex() {
    return await createIndex();
  }

  static async checkExistsIndex() {
    return await checkExistsIndexApi();
  }

  static async search(body) {
    const { params, query } = body;

    await checkExistsIndexApi(params);

    return await searchApi(params, query);
  }

  static async bulk(body) {
    const { organizationId, projectId } = body;

    await checkExistsIndexApi(organizationId, projectId);

    return await bulkApi(body);
  }

  // static async getAllDocuments() {
  //   return await getAllDocuments();
  // }

  // static async getIndexInfo() {
  //   return await getIndexInfo();
  // }

  // static async getCompanyById(id) {
  //   return await getCompanyById(id);
  // }

  // static async createDocument() {
  //   return await createDocument();
  // }

  // static async updateCompany({ id, name }) {
  //   return await updateCompany({ id, name });
  // }

  // static async deleteTranscriptorIndex() {
  //   return await deleteIndex();
  // }
}
