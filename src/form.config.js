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
