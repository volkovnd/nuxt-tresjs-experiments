// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    rules: {
      '@stylistic/object-curly-newline': [
        'error',
        {
          consistent: false,
          minProperties: 2,
          multiline: true
        }
      ],
      '@stylistic/object-property-newline': [
        'error',
        { allowAllPropertiesOnSameLine: false }
      ],
      '@stylistic/array-element-newline': [
        'error',
        {
          minItems: 2,
          consistent: false,
          multiline: true
        }
      ],
      '@stylistic/array-bracket-newline': [
        'error',
        {
          minItems: 2,
          multiline: true
        }
      ]
    }
  }
])
