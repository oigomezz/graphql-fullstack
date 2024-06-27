import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: `${process.env.NEXT_PUBLIC_SERVICE_URL}/graphql`,
  documents: './service/queries.graphql',
  generates: {
    'service/graphql/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
      config: {
        avoidOptionals: true,
        maybeValue: 'T | null',
      },
    },
  },
}

export default config
