# 원티드 프리온보딩 Assignment #1 (TodoList) Reconstruction

> 프로젝트 기간 : 2022년 12월 1일 ~ 2022년 12월 9일
>
> #### [배포링크](https://wanted-dnc-3.herokuapp.com/)

</br>

## ⌨️ 실행 방법

```zsh
$ git clone https://github.com/dltkdals224/pre-onboarding-todo-list-reconstruction.git
$ npm install
$ npm run dev
```

</br>

## Best Practice 및 채택 근거

router 권한 처리
react-hook-form
react-query
custom-hook 처리
메모이제이션

### 1. TypeScript

- [ ]

<br/>

### 2. router 권한 처리

- [ ]

<br/>

### 3. react-hook-form

- [ ]

<br/>

### 4. react-query

- [ ]

<br/>

### 5. custom-hook 처리

- [ ]

<br/>

### 6. optimization

- [ ]

<br/>

## 🔨 사용 기술

<img alt="HTML5" src ="https://img.shields.io/badge/HTML5-E34F26?&style=flat&logo=HTML5&logoColor=white"/> 
<img alt="CSS3" src ="https://img.shields.io/badge/CSS3-1572B6?&style=flat&logo=CSS3&logoColor=white"/> 
<img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E?&style=flat&logo=JavaScript&logoColor=white"/> 
<img alt="React" src ="https://img.shields.io/badge/React-61DAFB?&style=flat&logo=React&logoColor=white"/> 
<img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-blue?style=flat&logo=TypeScript&logoColor=white"/> ![](https://img.shields.io/badge/-react--query-%23FF4154) ![](https://img.shields.io/badge/axios-551a8b?style=flat-square&logo=axios&logoColor=white) ![](https://img.shields.io/badge/-json--server-%237c007c)
![](https://img.shields.io/badge/-universal--cookie-%23e0b077) 
<img alt="styled-components" src ="https://img.shields.io/badge/styled components-DB7093?&style=flat&logo=styled-components&logoColor=white"/> 
<img alt="recoil" src ="https://img.shields.io/badge/recoil-4082bc?&style=flat&logo=Recoils&logoColor=white"/> <img alt="Notion" src ="https://img.shields.io/badge/Notion-green?&style=flat&logo=Notion&logoColor=white"/>![badge](https://img.shields.io/badge/MUI-397cf9?style=flat-square&logo=MUI&logoColor=white) ![badge](https://img.shields.io/badge/Heroku-430098?style=flat-square&logo=Heroku&logoColor=white)

</br>

## 📦 폴더 구조

```
📂 src
│  ├─ App.tsx
│  ├─ index.tsx
│  ├─ apis
│  │  ├─ auth.ts
│  │  ├─ client.ts
│  │  └─ todo.ts
│  ├─ components
│  │  ├─ Auth
│  │  │  ├─ Overlay.tsx
│  │  │  ├─ SignIn.tsx
│  │  │  └─ SignUp.tsx
│  │  ├─ common
│  │  │  ├─ Loader.tsx
│  │  │  └─ NotFound.tsx
│  │  └─ TodoList
│  │     ├─ Logout.tsx
│  │     ├─ TodoInput.tsx
│  │     └─ TodoItem.tsx
│  ├─ constants
│  │  ├─ Authentication.ts
│  │  ├─ Paragraph.ts
│  │  ├─ Route.ts
│  │  └─ Types.ts
│  ├─ hooks
│  │  ├─ shared
│  │  │  ├─ useCreateTodoListQuery.ts
│  │  │  ├─ useDeleteTodoListQuery.ts
│  │  │  ├─ useEditTodoListQuery.ts
│  │  │  └─ useGetTodoListQuery.ts
│  │  ├─ useFocus.ts
│  │  ├─ useFormShown.ts
│  │  └─ useInput.ts
│  ├─ pages
│  │  ├─ auth
│  │  │  ├─ index.tsx
│  │  │  └─ style.ts
│  │  └─ todoList
│  │     ├─ index.tsx
│  │     └─ style.ts
│  ├─ routers
│  │  └─ index.tsx
│  ├─ styles
│  │  ├─ GlobalStyle.tsx
│  │  └─ Theme.tsx
│  └─ utils
│     ├─ HandleAccessToken.ts
│     ├─ ReportError.tsx
│     └─ RequireAuth.tsx
└─ tsconfig.json
```

</br>
