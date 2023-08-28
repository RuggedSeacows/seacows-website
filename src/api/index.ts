import client from '@utils/apollo'
import gql from 'graphql-tag';


function getOrder(str: any) {
  if (typeof str === 'string') {
    return {
      [str.replace('-', '')]: str.indexOf('-') > -1 ? 'desc' : 'asc'
    }
  }
  return str
}

export function nftsByCollection(
    collection: string,
    after?: string,
    orderBy: any = {eth_roi: 'desc' },
    query?: string,
    min?: string,
    max?: string,
    first: number = 20,
  ): Promise<any> {
    let current_eth_price: any = {}
    if (max) current_eth_price.lt = parseFloat(max as string)
    if (min) current_eth_price.gt = parseFloat(min as string)
  return client.query({
    query: gql`
      query queryNftsByCollection(
        $after: String
        $collection: String!
        $first: Int
        $skip: Int
        $query: NftQueryInput
        $orderBy: catalog_cardOrderByWithAggregationInput = { eth_roi:desc}
      ) {
        queryNftsByCollection(
          collection: $collection,
          after: $after,
          first: $first,
          orderBy: $orderBy,
          skip: $skip
          query: $query
        ) {
          edges {
            cursor
            node {
              predictPrice
              name
              address
              collection
              created_time
              current_eth_price
              current_usdt_price
              eth_roi
              id
              image
              is_deleted
              opensea_link
              rank
              rarity_score
              token_id
              updated_time
              usd_roi
              __typename
            }
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
          totalCount
        }
      }`,
    variables: {
      query: {
        name: {
          contains: query
        },
        current_eth_price
      },
      after,
      collection,
      first: first,
      skip: 0,
      orderBy: getOrder(orderBy)
    },
  });
}

export function onlogin(email: string, password: string) {
  return client.mutate({
    mutation: gql`
      mutation login(
        $email: String!
        $password: String!
      ) {
        login(
          data: {
            email: $email,
            password: $password
          }
        ) {
          user {
            createdAt
            email
            firstname
            id
            lastname
            role
            updatedAt
          }
        }
      }
    `,
    variables: {
      email,
      password
    }
  })
}


export function queryCollections() {
  return client.query({
    query: gql`
      query queryCollections(
        $first: Int = 20
        $after: String
        $skip: Int
      ) {
        queryCollections(first: $first, after: $after, skip: $skip) {
          totalCount
          edges {
            node {
              display_name
              brief_description
              is_coming_soon
              collection
              created_time
              name
              image_url
            }
          }
        }
      }
    `,
    variables : {
      after: '',
      first: 20,
      skip: 0,
    }
  })
}


export function queryPredictPrices(query: any = {}) {
  return client.query({
    query: gql`
      query queryPredictPrices(
        $after: String
        $first: Int
        $skip: Int
        $query: PredictQueryInput!
        $orderBy: PredictPriceOrder = {direction: desc, field: time}
      ) {
        queryPredictPrices(
          after: $after,
          first: $first,
          orderBy: $orderBy,
          skip: $skip
          query: $query
        ) {
          edges {
            cursor
            node {
              address
              time
              token_id
              usd
            }
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
          totalCount
        }
      }`,
    variables: {
      query,
      after: '',
      first: 20,
      skip: 0,
      orderBy: {direction: 'desc', field: 'time' }
    },
  });
}