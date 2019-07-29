const ALLOWED_IN_DEAL_TYPE = {
};
const DISABLED_IN_DEAL_TYPE = {
};

const ALLOWED_IN_RUBRIC = {
  type: {
    commercial: true
  }
};
const DISABLED_IN_RUBRIC = {
  rooms_type: {
    commercial: true
  }
};
// Глеб: В целом, идея понятна, но разобраться довольно сложно куда что добавлять.
// Мы можем сделать этот код более декларативным?
// При добавлении новых фильтров будет довольно сложно разобраться какой из фильтров в какой рубрике доступен 
export function isAllowed(field, dealType, rubric) {
  if (field in ALLOWED_IN_DEAL_TYPE) {
    return ALLOWED_IN_DEAL_TYPE[field][dealType];
  }

  if (field in DISABLED_IN_DEAL_TYPE) {
    return !DISABLED_IN_DEAL_TYPE[field][dealType];
  }

  if (field in ALLOWED_IN_RUBRIC) {
    return ALLOWED_IN_RUBRIC[field][rubric];
  }

  if (field in DISABLED_IN_RUBRIC) {
    return !DISABLED_IN_RUBRIC[field][rubric];
  }

  return true;
}
