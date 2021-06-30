function generateNextPagePath({
  pathPrefix,
  totalItems,
  currOffset,
  pageSize,
}) {
  let skip = null;

  if (currOffset + pageSize <= totalItems) {
    skip = currOffset + pageSize;
  }

  if (skip !== null) return `${pathPrefix}?size=${pageSize}&offset=${skip}`;
  return null;
}

function generatePrevPagePath({ pathPrefix, currOffset, pageSize }) {
  let skip = null;

  if (currOffset - pageSize >= 0) {
    skip = currOffset - pageSize;
  } else if (Math.abs(currOffset - pageSize) < pageSize) {
    skip = 0;
  }

  if (skip !== null) return `${pathPrefix}?size=${pageSize}&offset=${skip}`;
  return null;
}

module.exports = {
  generateNextPagePath,
  generatePrevPagePath,
};
