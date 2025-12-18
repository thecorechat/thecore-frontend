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

# Structure

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
│   │   │   │   │   │   ├── MessageBar /   📅 7.12.2025 update
│   │   │   │   │   │   │   ├── MessageBar.styled.jsx
│   │   │   │   │   │   │   └── index.jsx
│   │   │   │   │   │   │
│   │   │   │   │   │   └── MessageContainer /   📅 7.12.2025 update
│   │   │   │   │   │       ├── MessageContainer.styled.jsx
│   │   │   │   │   │       └── index.jsx
│   │   │   │   │   │
│   │   │   │   │   ├── ChatContainer.styled.jsx
│   │   │   │   │   └── index.jsx
│   │   │   │   │
│   │   │   │   ├── ContactsContainer /
│   │   │   │   │   ├── components /
│   │   │   │   │   │   ├── Content /   📅 7.12.2025 update
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
│   │   │   │   ├── EmptyContainer /
│   │   │   │   ├── EditProfile /  📅 7.12.2025
│   │   │   │   │   ├── EditProfile.styled.jsx
│   │   │   │   │   └── index.jsx
│   │   │   │   │
│   │   │   │   ├── MyProfile /  📅 7.12.2025
│   │   │   │   │   ├── MyProfile.styled.jsx
│   │   │   │   │   └── index.jsx
│   │   │   │   │
│   │   │   │   ├── CreateChat /   📅 7.12.2025 update
│   │   │   │   │   ├── CreateChat.styled.jsx
│   │   │   │   │   └── index.jsx
│   │   │   │   │
│   │   │   │   └── UserProfile /   📅 7.12.2025
│   │   │   │       ├── UserProfile.styled.jsx
│   │   │   │       └── index.jsx
│   │   │   │
│   │   │   ├── Chat.styled.jsx
│   │   │   └── index.jsx
│   │   │
│   │   ├── MainSignIn/
│   │   │   ├── MainSignIn.styled.jsx 📅 16.12.2025
│   │   │   └── MainSignIn.jsx 📅 16.12.2025
│   │   │
│   │   ├── SignIn/
│   │   │   ├── SignIn.styled.jsx 📅 17.12.2025
│   │   │   └── SignIn.jsx 📅 17.12.2025
│   │   │
│   │   ├── ForgotPassword/
│   │   │   ├── ForgotPassword.styled.jsx 📅 17.12.2025
│   │   │   └── ForgotPassword.jsx 📅 17.12.2025
│   │   │
│   │   ├── VerifyCode/
│   │   │   ├── VerifyCode.styled.jsx 📅 17.12.2025
│   │   │   └── index.jsx 📅 17.12.2025
│   │   │
│   │   ├── ChangePassword/
│   │   │   ├── components/
│   │   │   │   └── SuccessMessage/
│   │   │   │       ├── SuccessMessage.styled.jsx 📅 17.12.2025
│   │   │   │       └── index.jsx 📅 17.12.2025
│   │   │   │
│   │   │   ├── ChangePassword.styled.jsx 📅 17.12.2025
│   │   │   └── ChangePassword.jsx 📅 17.12.2025
│   │   │
│   │   ├── SelectAccount/
│   │   │   ├── components/
│   │   │   │   ├── AccessCode/
│   │   │   │   │   ├── AccessCode.styled.jsx 📅 18.12.2025
│   │   │   │   │   └── index.jsx 📅 18.12.2025
│   │   │   │   │
│   │   │   │   └── RadioSelect/
│   │   │   │       ├── RadioSelect.styled.jsx 📅 18.12.2025
│   │   │   │       └── index.jsx 📅 18.12.2025
│   │   │   │
│   │   │   ├── SelectAccount.styled.jsx 📅 18.12.2025
│   │   │   └── index.jsx 📅 18.12.2025
│   │   │
│   │   ├── CreateAccount/
│   │   │   ├── components/
│   │   │   │   └── EmailPassword/
│   │   │   │       ├── EmailPassword.styled.jsx 📅 18.12.2025
│   │   │   │       └── index.jsx 📅 18.12.2025
│   │   │   │
│   │   │   ├── CreateAccount.styled.jsx 📅 18.12.2025
│   │   │   └── index.jsx 📅 18.12.2025
│   │   │
│   │   ├── Chat.jsx
│   │   ├── CreateAccount.jsx
│   │   └── Main.jsx
│   │
│   │
│   │
│   ├── ui /
│   │   ├── ArrowBack /  📅 7.12.2025
│   │   │   ├── ArrowBack.styled.jsx
│   │   │   └── index.jsx
│   │   │
│   │   ├── Avatar /  📅 7.12.2025
│   │   │   ├── Avatar.styled.jsx
│   │   │   └── index.jsx
│   │   │
│   │   ├── Button /  📅 7.12.2025
│   │   │   ├── Button.styled.jsx
│   │   │   └── index.jsx
│   │   │
│   │   ├── HeaderBack /  📅 7.12.2025
│   │   │   ├── HeaderBack.styled.jsx
│   │   │   └── index.jsx
│   │   │
│   │   └── ToggleSwitch /  📅 7.12.2025
│   │       ├── ToggleSwitch.styled.jsx
│   │       └── index.jsx
│   │
│   ├── App.jsx 📅 18.12.2025
│   ├── index.css 📅 18.12.2025
│   └── main.jsx

```

# Synchronization Process

1. Adding the Upstream Remote

```sh
git remote add upstream https://github.com/Vasyl24/school-chat.git
```

2. Viewing Remotes

```sh
git remote -v
```

3. Fetching Changes

```sh
git fetch upstream
```

4. Merging Changes

```sh
git merge upstream/main --allow-unrelated-histories
```

5. Pushing Changes

```sh
git push origin main
```

6. Checking Status

```sh
git status
```

7. Forced Conflict Resolution

```sh
git checkout --theirs .
```

8. Staging Changes

```sh
git add .
```
