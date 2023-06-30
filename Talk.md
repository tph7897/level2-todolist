# 디렉토리 구조 
```bash
src
├─ components
|    ├─ Home
|    |    ├ Artical1.jsx
|    |    ├ Artical2.jsx
|    |    └ index.js # Home.jsx 와 하위.jsx 에 대한 스타일드 컴포넌트
|    |
|    └─ Detail
|
├─ hooks 
|    ├─ useMyHooks1.js
|    └─ useMyHooks2.js
|
├─ pages
|    ├─ Home.jsx
|    └─ Detail.jsx
|
# ├─ shared
# |    └─ Router.js
|
├─ redux
|    ├─ config
|    |    └─ congifStore.js
|    └─ modules
|         ├─ modules1.js # todos.js
|         └─ modules2.js # counter.js
|
|
├ App.js # <Routes>, <Route>
├ intex.js # <BrowserRouter>, <Provider>
# └─ style : 이렇게는 잘 안하고요. 

```