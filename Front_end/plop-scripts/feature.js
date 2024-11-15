module.exports = {
  description:
    'Features are complex components, each of them must implement a feature, they use modules and elements.',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your feature name?'
    }
  ],
  actions: [
    {
      type: 'add',
      path: 'src/components/features/{{pascalCase name}}/{{pascalCase name}}.tsx',
      templateFile: 'plop-templates/feature/Feature.tsx.hbs'
    },
    {
      type: 'add',
      path: 'src/components/features/{{pascalCase name}}/{{pascalCase name}}Styled.tsx',
      templateFile: 'plop-templates/feature/FeatureStyle.tsx.hbs'
    },
    {
      type: 'add',
      path: 'src/components/features/{{pascalCase name}}/index.ts',
      templateFile: 'plop-templates/feature/indexOfFeature.tsx.hbs'
    },

    {
      type: 'add',
      path: 'src/components/features/index.ts',
      templateFile: 'plop-templates/feature/injectable-index.tsx.hbs',
      skipIfExists: true
    },
    {
      type: 'append',
      path: 'src/components/features/index.ts',
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import { {{pascalCase name}} } from './{{pascalCase name}}';`
    },
    {
      type: 'append',
      path: 'src/components/features/index.ts',
      pattern: `/* PLOP_INJECT_EXPORT */`,
      template: `\t{{pascalCase name}},`
    }
  ]
};
