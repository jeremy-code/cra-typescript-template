[![Netlify Status](https://api.netlify.com/api/v1/badges/ee070873-5365-4bb3-b9c7-6d16938aacc9/deploy-status)](https://app.netlify.com/sites/cra-typescript-template/deploys)

My template for a new project

Built with Create React App, it's a template for a Typescript React project with some basic features.

```shell
├── src
│ ├── App.tsx
│ ├── components
│ │ ├── Head
│ │ │ ├── Head.tsx
│ │ │ └── index.ts
│ │ └── Layout
│ │ ├── Footer.tsx
│ │ ├── Layout.tsx
│ │ ├── Navbar.tsx
│ │ └── index.js
│ ├── features
│ │ └── misc
│ │ ├── 404.tsx
│ │ ├── Landing.tsx
│ │ └── index.ts
│ ├── index.css
│ ├── index.tsx
│ ├── providers
│ │ └── AppProvider.tsx
│ └── routes
│ └── AppRoutes.tsx
└── tsconfig.json
```

It has routing through ReactRouter. It uses the Chakra UI library for styling with the option for emotion styling. It has a Navbar, a React helmet head, a footer, and a general layout. It also has the ability to add more proiders, and routes. Ideally, it's scalable and would be a good start for a new project.

It also has some linting and formatting rules through `.eslintrc.js` and `.prettierrc.` I need to work on testing and other stuff, but I feel like that would add too much complexity. It does have husky though.

Also it's using React 18. I'm looking to update this readme eventually because it's a bit all over theplace right now.
