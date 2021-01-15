module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path:
          "src/components/templates/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: "plop-templates/Component/Component.jsx.hbs",
      },
      {
        type: "add",
        path:
          "src/components/templates/{{pascalCase name}}/{{pascalCase name}}.test.js",
        templateFile: "plop-templates/Component/Component.test.js.hbs",
      },
      {
        type: "add",
        path:
          "src/components/templates/{{pascalCase name}}/{{pascalCase name}}.module.scss",
        templateFile: "plop-templates/Component/Component.scss.hbs",
      },
      {
        type: "add",
        path: "src/components/templates/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/Component/index.js.hbs",
      },
      {
        type: "add",
        path: "src/components/index.js",
        templateFile: "plop-templates/injectable-index.js.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/components/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './templates/{{pascalCase name}}';`,
      },
      {
        type: "append",
        path: "src/components/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
    ],
  });

  plop.setGenerator("page", {
    description: "Create a page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: "plop-templates/Page/Page.jsx.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.test.js",
        templateFile: "plop-templates/Page/Page.test.js.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.module.scss",
        templateFile: "plop-templates/Page/Page.scss.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/Page/index.js.hbs",
      },
      {
        type: "add",
        path: "src/pages/index.js",
        templateFile: "plop-templates/injectable-index.js.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/pages/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
      },
      {
        type: "append",
        path: "src/pages/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
    ],
  });

  plop.setGenerator("service", {
    description: "Create service",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your service name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/services/{{camelCase name}}.js",
        templateFile: "plop-templates/service.js.hbs",
      },
      {
        type: "add",
        path: "src/services/index.js",
        templateFile: "plop-templates/injectable-index.js.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/services/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{camelCase name}} from './{{camelCase name}}';`,
      },
      {
        type: "append",
        path: "src/services/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{camelCase name}},`,
      },
    ],
  });

  plop.setGenerator("hook", {
    description: "Create a custom react hook",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your hook name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/hooks/{{camelCase name}}.js",
        templateFile: "plop-templates/hook.js.hbs",
      },
      {
        type: "add",
        path: "src/hooks/index.js",
        templateFile: "plop-templates/injectable-index.js.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/hooks/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{camelCase name}} from './{{camelCase name}}';`,
      },
      {
        type: "append",
        path: "src/hooks/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{camelCase name}},`,
      },
    ],
  });

  plop.setGenerator("store-sagas", {
    description: "Create a reusable redux module with sagas",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your redux module name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/store/modules/{{camelCase name}}/actions.js",
        templateFile: "plop-templates/store/modulesWithSagas/actions.js.hbs",
      },
      {
        type: "add",
        path: "src/store/modules/{{camelCase name}}/index.js",
        templateFile: "plop-templates/store/modulesWithSagas/index.js.hbs",
      },
      {
        type: "add",
        path: "src/store/modules/{{camelCase name}}/reducer.js",
        templateFile: "plop-templates/store/modulesWithSagas/reducer.js.hbs",
      },
      {
        type: "add",
        path: "src/store/modules/{{camelCase name}}/sagas.js",
        templateFile: "plop-templates/store/modulesWithSagas/sagas.js.hbs",
      },
      {
        type: "add",
        path: "src/store/modules/{{camelCase name}}/types.js",
        templateFile: "plop-templates/store/modulesWithSagas/types.js.hbs",
      },
      {
        type: "add",
        path: "src/store/rootReducer.js",
        templateFile: "plop-templates/store/injectable-rootReducer.js.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/store/rootReducer.js",
        pattern: `/* INJECT_IMPORT_REDUCER */`,
        template: `import {{camelCase name}} from './modules/{{camelCase name}}';`,
      },
      {
        type: "append",
        path: "src/store/rootReducer.js",
        pattern: `/* INJECT_REDUCER */`,
        template: `\t{{camelCase name}},`,
      },
      {
        type: "add",
        path: "src/store/rootSaga.js",
        templateFile: "plop-templates/store/injectable-rootSaga.js.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/store/rootSaga.js",
        pattern: `/* INJECT_IMPORT_SAGA */`,
        template: `import { sagas as {{camelCase name}}Sagas } from './modules/{{camelCase name}}';`,
      },
      {
        type: "append",
        path: "src/store/rootSaga.js",
        pattern: `/* INJECT_SAGA */`,
        template: `\t...{{camelCase name}}Sagas,`,
      },
    ],
  });

  plop.setGenerator("store-thunk", {
    description: "Create a reusable redux module with thunk",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your redux module name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/store/modules/{{camelCase name}}/actions.js",
        templateFile: "plop-templates/store/modulesWithThunk/actions.js.hbs",
      },
      {
        type: "add",
        path: "src/store/modules/{{camelCase name}}/index.js",
        templateFile: "plop-templates/store/modulesWithThunk/index.js.hbs",
      },
      {
        type: "add",
        path: "src/store/modules/{{camelCase name}}/reducer.js",
        templateFile: "plop-templates/store/modulesWithThunk/reducer.js.hbs",
      },
      {
        type: "add",
        path: "src/store/modules/{{camelCase name}}/operations.js",
        templateFile: "plop-templates/store/modulesWithThunk/operations.js.hbs",
      },
      {
        type: "add",
        path: "src/store/modules/{{camelCase name}}/types.js",
        templateFile: "plop-templates/store/modulesWithThunk/types.js.hbs",
      },
      {
        type: "add",
        path: "src/store/rootReducer.js",
        templateFile: "plop-templates/store/injectable-rootReducer.js.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/store/rootReducer.js",
        pattern: `/* INJECT_IMPORT_REDUCER */`,
        template: `import {{camelCase name}} from './modules/{{camelCase name}}';`,
      },
      {
        type: "append",
        path: "src/store/rootReducer.js",
        pattern: `/* INJECT_REDUCER */`,
        template: `\t{{camelCase name}},`,
      },
    ],
  });
};
