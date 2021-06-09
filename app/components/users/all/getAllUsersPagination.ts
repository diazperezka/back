import { Request } from "express";
import { GetAllUsersPaginationResponse } from "../types";

const getAllUsersPagination = (req: Request): GetAllUsersPaginationResponse => {
  const page = Number(req.params.page);
  const recordsPerPage = Number(req.params.recordsPerPage);

  const limit = recordsPerPage;
  const offset = page === 1 ? 0 : (page - 1) * recordsPerPage;

  return {
    limit,
    offset,
  };
};

export { getAllUsersPagination };
