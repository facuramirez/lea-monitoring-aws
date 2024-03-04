import { TranscriptorModel } from '../models/transcriptor.model.js';
import HTTP_STATUS_CODE from 'http-status-codes';

class TranscriptorController {
  constructor() {}

  async createIndex(req, res) {
    try {
      const response = await TranscriptorModel.createTranscriptorIndex();
      return res.status(HTTP_STATUS_CODE.OK).json({ ok: true, response });
    } catch (error) {
      return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error });
    }
  }

  async search(req, res, next) {
    const { body } = req;
    try {
      const response = await TranscriptorModel.search(body);
      res.status(HTTP_STATUS_CODE.OK).json({ ok: true, response });
      next();
    } catch (error) {
      next(error);
    }
  }

  async bulk(req, res, next) {
    const { body } = req;
    try {
      const response = await TranscriptorModel.bulk(body);
      res.status(HTTP_STATUS_CODE.OK).json({ ok: true, response });
      next();
    } catch (error) {
      next(error);
    }
  }

  // async getAllDocuments(_req, res) {
  //   try {
  //     const response = await TranscriptorModel.getAllDocuments();
  //     // const data = response.hits.hits;
  //     // const companies = new CompaniesListMapping().execute(data);
  //     return res.status(HTTP_STATUS_CODE.OK).json({ ok: true, response });
  //   } catch (error) {
  //     return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error });
  //   }
  // }

  // async getIndexInfo(_req, res) {
  //   try {
  //     const response = await TranscriptorModel.getIndexInfo();
  //     return res.status(HTTP_STATUS_CODE.OK).json({ ok: true, response });
  //   } catch (error) {
  //     return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error });
  //   }
  // }

  // async getCompanyById(req, res) {
  //   try {
  //     const { id } = req.params;

  //     const response = await TranscriptorModel.getCompanyById(id);
  //     return res.status(HTTP_STATUS_CODE.OK).json({ ok: true, response });
  //   } catch (error) {
  //     return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error });
  //   }
  // }

  // async createDocument(req, res) {
  //   try {
  //     const response = await TranscriptorModel.createDocument();
  //     return res.status(HTTP_STATUS_CODE.OK).json({ ok: true, response });
  //   } catch (error) {
  //     return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error });
  //   }
  // }

  // async updateCompany(req, res) {
  //   const { id } = req.params;
  //   const { name } = req.body;

  //   try {
  //     const response = await TranscriptorModel.updateCompany({ id, name });
  //     return res.status(HTTP_STATUS_CODE.OK).json({ ok: true, response });
  //   } catch (error) {
  //     return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error });
  //   }
  // }

  // async deleteIndex(req, res) {
  //   try {
  //     const response = await TranscriptorModel.deleteTranscriptorIndex();
  //     return res.status(HTTP_STATUS_CODE.OK).json({ ok: true, response });
  //   } catch (error) {
  //     return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error });
  //   }
  // }
}

export const transcriptorController = new TranscriptorController();
