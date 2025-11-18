# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```diff
├── lib/
│   ├── utils.js
├── src/
│   ├── mock/
│   │   ├── data.js # Тестова база данних
│   ├── pages/
│   │   ├── ChatPage /
│   │   │   ├── components /
│   │   │   │   ├── ChatContainer /
│   │   │   │   │   ├── components /
│   │   │   │   │   │   ├── ChatHeader /
│   │   │   │   │   │   │   ├── components /
│   │   │   │   │   │   │   │   ├── DeleteDialog /
│   │   │   │   │   │   │   │   │   ├── DeleteDialog.styled.jsx
│   │   │   │   │   │   │   │   │   └── index.jsx
│   │   │   │   │   │   │   │   │
│   │   │   │   │   │   │   │   ├── DropDownMenu /
│   │   │   │   │   │   │   │   │   ├── DropDownMenu.styled.jsx
│   │   │   │   │   │   │   │   │   └── index.jsx
│   │   │   │   │   │   │   │   │
│   │   │   │   │   │   │   │   ├── MainChatHeader /
│   │   │   │   │   │   │   │   │   ├── MainChatHeader.styled.jsx
│   │   │   │   │   │   │   │   │   └── index.jsx
│   │   │   │   │   │   │   │   │
│   │   │   │   │   │   │   │   └── SearchInputHeader /
│   │   │   │   │   │   │   │       ├── SearchInputHeader.styled.jsx
│   │   │   │   │   │   │   │       └── index.jsx
│   │   │   │   │   │   │   │
│   │   │   │   │   │   │   ├── ChatHeader.styled.jsx
│   │   │   │   │   │   │   └── index.jsx
│   │   │   │   │   │   │
│   │   │   │   │   │   ├── MessageBar /
│   │   │   │   │   │   │   ├── MessageBar.styled.jsx
│   │   │   │   │   │   │   └── index.jsx
│   │   │   │   │   │   │
│   │   │   │   │   │   └── MessageContainer /
│   │   │   │   │   │       ├── MessageContainer.styled.jsx
│   │   │   │   │   │       └── index.jsx
│   │   │   │   │   │
│   │   │   │   │   ├── ChatContainer.styled.jsx
│   │   │   │   │   └── index.jsx
│   │   │   │   │
│   │   │   │   ├── ContactsContainer /
│   │   │   │   │   ├── components /
│   │   │   │   │   │   ├── Content /
│   │   │   │   │   │   │   ├── Content.styled.jsx
│   │   │   │   │   │   │   └── index.jsx
│   │   │   │   │   │   │
│   │   │   │   │   │   ├── InputSearch /
│   │   │   │   │   │   │   ├── InputSearch.styled.jsx
│   │   │   │   │   │   │   └── index.jsx
│   │   │   │   │   │   │
│   │   │   │   │   │   └── SidebarRail /
│   │   │   │   │   │       ├── SidebarContext.jsx
│   │   │   │   │   │       ├── SidebarRail.styled.jsx
│   │   │   │   │   │       └── index.jsx
│   │   │   │   │   │
│   │   │   │   │   ├── ContactsContainer.styled.jsx
│   │   │   │   │   └── index.jsx
│   │   │   │   │
│   │   │   │   └── EmptyContainer /
│   │   │   │
│   │   │   ├── Chat.styled.jsx
│   │   │   └── index.jsx
│   │   │
│   │   ├── MainSignIn/
│   │   ├── SignIn /
│   │   ├── Chat.jsx
│   │   ├── CreateAccount.jsx
│   │   └── Main.jsx.
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx

```
