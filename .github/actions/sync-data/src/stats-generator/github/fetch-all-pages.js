const log = require('../lib/log');

// Generic GraphQL paginator
async function fetchAllPages(
  github,
  {
    // query to paginate, a function of arity of 1 with all params bound
    // accepts endCursor
    createQuery,
    // selector is a function used to pull data from query results
    // it takes query results and returns array
    resultSelector,
    // eslint-disable-next-line no-unused-vars
    onPageFetchComplete = (nodesFetched) => {},
  }
) {
  let endCursor = null; // used to track pagination through the results
  let hasNextPage = true;
  let results = [];
  let apiResponse;

  // log.json(createQuery.query)
  while (hasNextPage) {
    console.log("++++createQUERY++++", createQuery)
    const query = createQuery(endCursor);
    console.log("++++QUERY++++", query)
    // log.json(query)
    // append new results to the collection array
    apiResponse = await github.rest.query(query);
    const { nodes, pageInfo } = resultSelector(apiResponse) || {};

    if (!nodes || !pageInfo) {
      throw new Error(
        `Can't paginate using provided resultSelector. It didn't select ` +
          `result from GraphQl query that contains "nodes" and "pageInfo" objects. ` +
          `Selected object was ${resultSelector(apiResponse)}.`
      );
    }

    onPageFetchComplete(nodes.length);

    log.debug(nodes.map((d) => `id: ${d.id} ${d.nameWithOwner}`).join('\n '));

    results = [...results, ...nodes];
    // log.json(results)
    ({ hasNextPage, endCursor } = pageInfo);
  }

  return {
    // last page results could be handy to fetch properties that are located
    // at different path than provided by results selector
    // lastPageProps: apiResponse,
    results,
  };
}

module.exports = fetchAllPages;
