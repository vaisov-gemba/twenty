import { ASTNode, print } from 'graphql';
import request from 'supertest';

type GraphqlOperation = {
  query: ASTNode;
  variables?: Record<string, unknown>;
};

export const makeGraphqlAPIRequest = (graphqlOperation: GraphqlOperation) => {
  const client = request(`http://localhost:${APP_PORT}`);

  return client
    .post('/graphql')
    .set('Authorization', `Bearer ${ACCESS_TOKEN}`)
    .send({
      query: print(graphqlOperation.query),
      variables: graphqlOperation.variables || {},
    });
};