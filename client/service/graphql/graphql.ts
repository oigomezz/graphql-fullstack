/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** Represents a date time object */
  DateTime: { input: any; output: any }
}

export type Attributes = {
  __typename?: 'Attributes'
  description: Maybe<Scalars['String']['output']>
  hardiness: Maybe<Scalars['String']['output']>
  shape: Maybe<Scalars['String']['output']>
  taste: Maybe<Scalars['String']['output']>
}

export type AvoCreateInput = {
  description: InputMaybe<Scalars['String']['input']>
  hardiness: InputMaybe<Scalars['String']['input']>
  image: Scalars['String']['input']
  name: Scalars['String']['input']
  price: Scalars['Float']['input']
  shape: InputMaybe<Scalars['String']['input']>
  sku: Scalars['String']['input']
  taste: InputMaybe<Scalars['String']['input']>
}

export type AvoWhereInput = {
  name: InputMaybe<StringFilterInput>
  price: InputMaybe<Scalars['Float']['input']>
}

export type Avocado = BaseModel & {
  __typename?: 'Avocado'
  attributes: Attributes
  createdAt: Scalars['DateTime']['output']
  deletedAt: Maybe<Scalars['DateTime']['output']>
  id: Scalars['ID']['output']
  image: Scalars['String']['output']
  name: Scalars['String']['output']
  price: Scalars['Float']['output']
  sku: Scalars['String']['output']
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type BaseModel = {
  createdAt: Scalars['DateTime']['output']
  deletedAt: Maybe<Scalars['DateTime']['output']>
  id: Scalars['ID']['output']
  updatedAt: Maybe<Scalars['DateTime']['output']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createAvo: Avocado
}

export type MutationCreateAvoArgs = {
  data: AvoCreateInput
}

export type Query = {
  __typename?: 'Query'
  avo: Maybe<Avocado>
  avos: Array<Maybe<Avocado>>
}

export type QueryAvoArgs = {
  id: Scalars['ID']['input']
}

export type QueryAvosArgs = {
  skip: InputMaybe<Scalars['Int']['input']>
  take: InputMaybe<Scalars['Int']['input']>
  where: InputMaybe<AvoWhereInput>
}

export type StringFilterInput = {
  contains: InputMaybe<Scalars['String']['input']>
  endsWith: InputMaybe<Scalars['String']['input']>
  equals: InputMaybe<Scalars['String']['input']>
  gt: InputMaybe<Scalars['String']['input']>
  gte: InputMaybe<Scalars['String']['input']>
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  lt: InputMaybe<Scalars['String']['input']>
  lte: InputMaybe<Scalars['String']['input']>
  not: InputMaybe<Scalars['String']['input']>
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  startsWith: InputMaybe<Scalars['String']['input']>
}

export type AvocadoFragment = {
  __typename?: 'Avocado'
  id: string
  image: string
  name: string
  createdAt: any
  sku: string
  price: number
  attributes: {
    __typename?: 'Attributes'
    description: string | null
    taste: string | null
    shape: string | null
    hardiness: string | null
  }
} & { ' $fragmentName'?: 'AvocadoFragment' }

export type GetAllAvocadosQueryVariables = Exact<{ [key: string]: never }>

export type GetAllAvocadosQuery = {
  __typename?: 'Query'
  avos: Array<
    | ({ __typename?: 'Avocado' } & {
        ' $fragmentRefs'?: { AvocadoFragment: AvocadoFragment }
      })
    | null
  >
}

export type GetAvocadoQueryVariables = Exact<{
  avoId: Scalars['ID']['input']
}>

export type GetAvocadoQuery = {
  __typename?: 'Query'
  avo:
    | ({ __typename?: 'Avocado' } & {
        ' $fragmentRefs'?: { AvocadoFragment: AvocadoFragment }
      })
    | null
}

export type AddAvocadoMutationVariables = Exact<{
  data: AvoCreateInput
}>

export type AddAvocadoMutation = {
  __typename?: 'Mutation'
  createAvo: { __typename?: 'Avocado' } & {
    ' $fragmentRefs'?: { AvocadoFragment: AvocadoFragment }
  }
}

export const AvocadoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Avocado' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Avocado' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sku' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attributes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'taste' } },
                { kind: 'Field', name: { kind: 'Name', value: 'shape' } },
                { kind: 'Field', name: { kind: 'Name', value: 'hardiness' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AvocadoFragment, unknown>
export const GetAllAvocadosDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAllAvocados' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avos' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'Avocado' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Avocado' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Avocado' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sku' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attributes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'taste' } },
                { kind: 'Field', name: { kind: 'Name', value: 'shape' } },
                { kind: 'Field', name: { kind: 'Name', value: 'hardiness' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllAvocadosQuery, GetAllAvocadosQueryVariables>
export const GetAvocadoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAvocado' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'avoId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'avo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'avoId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'Avocado' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Avocado' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Avocado' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sku' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attributes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'taste' } },
                { kind: 'Field', name: { kind: 'Name', value: 'shape' } },
                { kind: 'Field', name: { kind: 'Name', value: 'hardiness' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAvocadoQuery, GetAvocadoQueryVariables>
export const AddAvocadoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddAvocado' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AvoCreateInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createAvo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'data' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'Avocado' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Avocado' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Avocado' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sku' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attributes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'taste' } },
                { kind: 'Field', name: { kind: 'Name', value: 'shape' } },
                { kind: 'Field', name: { kind: 'Name', value: 'hardiness' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddAvocadoMutation, AddAvocadoMutationVariables>
