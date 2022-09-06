module.exports = {
  description:
    'Modules can use elements to create more complex components, they can have a state and should be easy to reuse.',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your module name?'
    }
  ],
  actions: [
    {
      type: 'add',
      path: 'src/components/modules/{{pascalCase name}}/{{pascalCase name}}.tsx',
      templateFile: 'plop-templates/module/Module.tsx.hbs'
    },
    {
      type: 'add',
      path: 'src/components/modules/{{pascalCase name}}/{{pascalCase name}}Styled.tsx',
      templateFile: 'plop-templates/module/ModuleStyled.tsx.hbs'
    },
    {
      type: 'add',
      path: 'src/components/modules/{{pascalCase name}}/index.ts',
      templateFile: 'plop-templates/module/indexOfModule.tsx.hbs'
    },

    {
      type: 'add',
      path: 'src/components/modules/index.ts',
      templateFile: 'plop-templates/module/injectable-index.tsx.hbs',
      skipIfExists: true
    },
    {
      type: 'append',
      path: 'src/components/modules/index.ts',
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import { {{pascalCase name}} } from './{{pascalCase name}}';`
    },
    {
      type: 'append',
      path: 'src/components/modules/index.ts',
      pattern: `/* PLOP_INJECT_EXPORT */`,
      template: `\t{{pascalCase name}},`
    }
  ]
};
