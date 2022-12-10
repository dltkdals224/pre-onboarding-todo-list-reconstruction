# 프리온보딩 Assignment - TodoList Reconstruction

> 프로젝트 기간 : 2022년 12월 1일 ~ 2022년 12월 9일
>
> 진행 인원 : 1인 (개인)
>
> #### [배포링크](https://famous-lily-b50252.netlify.app/)

</br>

## ⌨️ 실행 방법

```zsh
$ git clone https://github.com/dltkdals224/pre-onboarding-todo-list-reconstruction.git
$ npm install
$ npm run dev
```

</br>

## 🧚🏻‍♂️ 적용 기술 및 채택 근거

### 1. TypeScript

- 타입 안정성 제공

TypeScript는 정적타입을 지원하여 컴파일 단계에서 오류를 포착할 수 있게 한다.  
명시적인 정적 타입 지정은 개발자의 의도를 명확하게 코드로 기술할 수 있게 한다.  
이는 코드의 가독성을 높이고 디버깅을 쉽게 한다.

<br/>

### 2. router 권한 처리

https://github.com/dltkdals224/pre-onboarding-todo-list-reconstruction/blob/3b3e7f2ead02a621d1491a6e1f4a9e03c708835e/src/routers/index.tsx#L1-L43

https://github.com/dltkdals224/pre-onboarding-todo-list-reconstruction/blob/3b3e7f2ead02a621d1491a6e1f4a9e03c708835e/src/utils/RequireAuth.tsx#L1-L22

- Route as RoutePermission

기본 라우팅에 대해 접근 권한에 따른 리다이렉트 처리를 목적으로 한다.  
RequireAuth.tsx에 권한 필요여부와 리다이렉트 url을 넘겨 해당 컴포넌트 내부에서 동작하도록 함.

- RequireAuth.tsx

권한 필요 여부와 ACCESS_TOKEN 소유 여부에 따라 페이지 접근을 허가하거나, redirectUrl로 추방하는 역할을 한다.  
ACCESS_TOKEN은 BE와 소통이 불가능한 상태에서, 만료 시간을 지키기위해 cookie storage에서 관리.  

<br/>

### 3. react-hook-form

https://github.com/dltkdals224/pre-onboarding-todo-list-reconstruction/blob/3b3e7f2ead02a621d1491a6e1f4a9e03c708835e/src/components/Auth/SignIn.tsx#L1-L58

https://github.com/dltkdals224/pre-onboarding-todo-list-reconstruction/blob/3b3e7f2ead02a621d1491a6e1f4a9e03c708835e/src/constants/Authentication.ts#L1-L42

react-hook-form은 기본적으로 비제어 컴포넌트 방식으로 구현되어있기에 렌더링 이슈를 해결하면서도,  
form의 데이터와 상태를 Provider 아래라면 어느 곳에서든지 props drilling 없이 사용할 수 있다.

<br/>

- formState

isSubmitting을 button의 disabled에 걸어 중복제출을 막으며,  
isDirty를 통해 form이 제출된 이후 input의 변화에 대해서도 errors(부적절한 제출 형태)를 감지할 수 있도록 처리.

- INPUT_VALIDATION

input의 입력에 대해 필요한 옵션과 error message를 constants에서 관리하여 수정이 용이하도록 처리.

<br/>

### 4. react-query

https://github.com/dltkdals224/pre-onboarding-todo-list-reconstruction/blob/3b3e7f2ead02a621d1491a6e1f4a9e03c708835e/src/hooks/shared/useGetTodoListQuery.ts#L1-L14

- queryKey

queryKey를 통해 여타 useMutation의 onSuccess에서 refetch요청 두어 비동기 통신 관련 상태를 처리할 수 있게 함.

react-query를 사용하지 않고도 해당 부분을 구현할 수 있지만,  
TodoText 수정 중 isCompleted 값의 변경이나 데이터 자체를 삭제하는 과정에 있어서  
페이지의 전환없이 데이터의 변경을 보여주는 과정이 편리하므로 react-query를 채택하여 사용.

<br/>

### 5. custom-hook 처리

https://github.com/dltkdals224/pre-onboarding-todo-list-reconstruction/blob/3b3e7f2ead02a621d1491a6e1f4a9e03c708835e/src/hooks/useFocus.ts#L1-L25

https://github.com/dltkdals224/pre-onboarding-todo-list-reconstruction/blob/3b3e7f2ead02a621d1491a6e1f4a9e03c708835e/src/hooks/useFormShown.ts#L1-L19

반복되는 로직을 간편하게 불러와 사용할 수 있도록 custom-hook 처리.

<br/>

- useCallback

이 때, useCallback을 통해 특정 함수를 새로 만들지 않고 재사용할 수 있도록 처리한다.

<br/>

### 6. optimization

https://github.com/dltkdals224/pre-onboarding-todo-list-reconstruction/blob/3b3e7f2ead02a621d1491a6e1f4a9e03c708835e/src/components/TodoList/TodoItem.tsx#L80-L82

- React.memo

TodoList Page내 다중 TodoItem중 단일 개체에서 수정이 이루어질 때, 모든 개체가 리렌더링 되는 문제.  
React.memo를 사용하여 해당되지 않는 컴포넌트들은 리렌더링이 발생하지 않도록 처리.

<br/>

## 🔨 사용 기술

<img alt="HTML5" src ="https://img.shields.io/badge/HTML5-E34F26?&style=flat&logo=HTML5&logoColor=white"/> <img alt="CSS3" src ="https://img.shields.io/badge/CSS3-1572B6?&style=flat&logo=CSS3&logoColor=white"/> <img alt="React" src ="https://img.shields.io/badge/React-61DAFB?&style=flat&logo=React&logoColor=white"/> <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-blue?style=flat&logo=TypeScript&logoColor=white"/> 

<img alt="axios" src ="https://img.shields.io/badge/axios-5A29E4?&style=flat&logo=axios&logoColor=white"/> <img alt="styled-components" src ="https://img.shields.io/badge/styled components-DB7093?&style=flat&logo=styled-components&logoColor=white"/> <img alt="react-query" src ="https://img.shields.io/badge/react query-FF4154?&style=flat&logo=react-query&logoColor=white"/> <img alt="react-hook-form" src ="https://img.shields.io/badge/react hook form-EC5990?&style=flat&logo=react-hook-form&logoColor=white"/> <img alt="react-router-dom" src ="https://img.shields.io/badge/react router dom-CA4245?&style=flat&logo=react-router-dom&logoColor=white"/> <img alt="universal-cookie" src ="https://img.shields.io/badge/universal cookie-00ACC1?&style=flat&logo=universal-cookie&logoColor=white"/>

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
