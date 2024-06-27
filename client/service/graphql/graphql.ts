/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Represents a date time object */
  DateTime: { input: any; output: any; }
};

export type Attributes = {
  __typename?: 'Attributes';
  description?: Maybe<Scalars['String']['output']>;
  hardiness?: Maybe<Scalars['String']['output']>;
  shape?: Maybe<Scalars['String']['output']>;
  taste?: Maybe<Scalars['String']['output']>;
};

export type AvoCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  hardiness?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  shape?: InputMaybe<Scalars['String']['input']>;
  sku: Scalars['String']['input'];
  taste?: InputMaybe<Scalars['String']['input']>;
};

export type AvoWhereInput = {
  name?: InputMaybe<StringFilterInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
};

export type Avocado = BaseModel & {
  __typename?: 'Avocado';
  attributes: Attributes;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  sku: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BaseModel = {
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAvo: Avocado;
};


export type MutationCreateAvoArgs = {
  data: AvoCreateInput;
};

export type Query = {
  __typename?: 'Query';
  avo?: Maybe<Avocado>;
  avos: Array<Maybe<Avocado>>;
};


export type QueryAvoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAvosArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AvoWhereInput>;
};

export type StringFilterInput = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllAvocadosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAvocadosQuery = { __typename?: 'Query', avos: Array<{ __typename?: 'Avocado', id: string, image: string, name: string, createdAt: any, sku: string, price: number, attributes: { __typename?: 'Attributes', description?: string | null, taste?: string | null, shape?: string | null, hardiness?: string | null } } | null> };


export const GetAllAvocadosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllAvocados"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"taste"}},{"kind":"Field","name":{"kind":"Name","value":"shape"}},{"kind":"Field","name":{"kind":"Name","value":"hardiness"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllAvocadosQuery, GetAllAvocadosQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Represents a date time object */
  DateTime: { input: any; output: any; }
};

export type Attributes = {
  __typename?: 'Attributes';
  description?: Maybe<Scalars['String']['output']>;
  hardiness?: Maybe<Scalars['String']['output']>;
  shape?: Maybe<Scalars['String']['output']>;
  taste?: Maybe<Scalars['String']['output']>;
};

export type AvoCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  hardiness?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  shape?: InputMaybe<Scalars['String']['input']>;
  sku: Scalars['String']['input'];
  taste?: InputMaybe<Scalars['String']['input']>;
};

export type AvoWhereInput = {
  name?: InputMaybe<StringFilterInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
};

export type Avocado = BaseModel & {
  __typename?: 'Avocado';
  attributes: Attributes;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  sku: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BaseModel = {
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAvo: Avocado;
};


export type MutationCreateAvoArgs = {
  data: AvoCreateInput;
};

export type Query = {
  __typename?: 'Query';
  avo?: Maybe<Avocado>;
  avos: Array<Maybe<Avocado>>;
};


export type QueryAvoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAvosArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AvoWhereInput>;
};

export type StringFilterInput = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllAvocadosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAvocadosQuery = { __typename?: 'Query', avos: Array<{ __typename?: 'Avocado', id: string, image: string, name: string, createdAt: any, sku: string, price: number, attributes: { __typename?: 'Attributes', description?: string | null, taste?: string | null, shape?: string | null, hardiness?: string | null } } | null> };


export const GetAllAvocadosDocument = gql`
    query GetAllAvocados {
  avos {
    id
    image
    name
    createdAt
    sku
    price
    attributes {
      description
      taste
      shape
      hardiness
    }
  }
}
    `;

/**
 * __useGetAllAvocadosQuery__
 *
 * To run a query within a React component, call `useGetAllAvocadosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAvocadosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAvocadosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllAvocadosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllAvocadosQuery, GetAllAvocadosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllAvocadosQuery, GetAllAvocadosQueryVariables>(GetAllAvocadosDocument, options);
      }
export function useGetAllAvocadosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAvocadosQuery, GetAllAvocadosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllAvocadosQuery, GetAllAvocadosQueryVariables>(GetAllAvocadosDocument, options);
        }
export function useGetAllAvocadosSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllAvocadosQuery, GetAllAvocadosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllAvocadosQuery, GetAllAvocadosQueryVariables>(GetAllAvocadosDocument, options);
        }
export type GetAllAvocadosQueryHookResult = ReturnType<typeof useGetAllAvocadosQuery>;
export type GetAllAvocadosLazyQueryHookResult = ReturnType<typeof useGetAllAvocadosLazyQuery>;
export type GetAllAvocadosSuspenseQueryHookResult = ReturnType<typeof useGetAllAvocadosSuspenseQuery>;
export type GetAllAvocadosQueryResult = Apollo.QueryResult<GetAllAvocadosQuery, GetAllAvocadosQueryVariables>;