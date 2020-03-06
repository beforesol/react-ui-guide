# React 개발 환경 가이드

본 가이드는 React 개발 환경에서 UI 개발을 하기 위해 필요한 nvm, host, webpack setting 가이드입니다. (only **MAC**)

## 목차
- [NVM](#NVM)
- [NPM](#NPM)

## NVM
- **nvm** 이란?
  + [Node Version Manager](https://github.com/nvm-sh/nvm).
  + Node의 여러 버전을 사용할 때 Node.js를 설치, 관리하기 위한 도구.
  
- **nvm**을 사용하는 이유
  + 오픈 소스를 개발한다면 readme에 node의 version을 명시합니다. 그리고 해당 오픈 소스를 사용하려는 사용자는 (가급적) 명시된 node version에 맞춰서 프로젝트를 실행시켜볼텐데, 기존에 설치한 node version 버전과 상이하면 아래와 같은 오류가 발생합니다.

  
  ```
  $yarn install
  
  error cross-env@7.0.0: The engine "node" is incompatible with this module. Expected version ">=10.14". Got "8.11.4"
  error Found incompatible module.
  ```
  
  + 기존 설치된 version과 상이한 version의 노드를 실행시키기 위해서 node를 지우고 새로 설치할 필요 없이 nvm을 이용하여 node version을 매니징하면 됩니다.

- **nvm** 설치 시 유의할 점
  + OS에 특정 버전의 Node.js를 설치하게 된다면, 여러 버전의 Node.js를 설치해야 할 경우에 대응 못할 수도 있습니다. 그렇게 때문에 먼저 nvm을 설치하고, 설치한 nvm을 통하여 원하는 특정 version의 node.js를 설치하는 방법을 추천합니다.

- **nvm** 설치 (실습)
  - **nvm 설치**
  ```
  $ sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
  ```

  - **확인**
  ```
  $ nvm ls
  -bash: nvm: command not found
  ```

  - **로그인시 자동으로 소스를 지정**
  ```
  $ vi ~/.bash_profile
  ```

  ```
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
  ```

  - **재시작**
  ```
  source ~/.bash_profile
  ```
  
  - **확인**
  ```
  $ nvm ls
  ```
  
  - **Node 설치** (안정화된 최신 버전)
  ```
  $ nvm install 12.16.1
  ```
  
  - **확인**
  ```
  $ nvm ls
  ```
  
  ```
  ->     v12.16.1
         system
  default -> 6.10.1 (-> v6.10.1)
  node -> stable (-> v6.10.1) (default)
  stable -> 6.10 (-> v6.10.1) (default)
  iojs -> N/A (default)
  lts/* -> lts/boron (-> v6.10.1)
  lts/argon -> v4.8.1 (-> N/A)
  lts/boron -> v6.10.1
  ```
  
  ```
  $ node -v
  ```
  
  ```
  v12.16.1
  ```
  
  - **다른 버전의 노드 설치 및 버전 변경**
  ```
  $ nvm install 13.10.1
  ```
  
  - **node 버전 변경 및 확인**
  ```
  $ $ nvm use 12.16.1
  ```

  > nvm 관련 참고 문서
	> - [nvm](https://github.com/nvm-sh/nvm#about)
	> - [node.js, nvm, npm이란 무엇인가](https://pongsoyun.tistory.com/115)
	> - [nvm 설치](https://gist.github.com/falsy/8aa42ae311a9adb50e2ca7d8702c9af1)

## NPM
- **npm** 이란?
  + [Node Package Manager](https://www.npmjs.com/).
  + Node.js로 개발된 프로그램을 편리하게 설치, 업데이트 및 삭제를 해주는 프로그램

- package.json
  + 모든 npm 패키지들은 **package.json**이라는 파일 내에 정의되고, 이는 모두 JSON으로 작성됩니다.
  ```json
    {
      "name": "note-app",
      "version": "0.1.0",
      "private": true,
      "dependencies": {
        "@testing-library/jest-dom": "^4.2.4",
        "@testing-library/react": "^9.3.2",
        "@testing-library/user-event": "^7.1.2",
        "react": "^16.12.0",
        "react-dom": "^16.12.0",
        "react-scripts": "3.3.0"
      },
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
      },
      "eslintConfig": {
        "extends": "react-app"
      },
      "browserslist": {
        "production": [
          ">0.2%",
          "not dead",
          "not op_mini all"
        ],
        "development": [
          "last 1 chrome version",
          "last 1 firefox version",
          "last 1 safari version"
        ]
      }
  }
  ```
  
- Dependencies(의존성) 관리하기
  + npm에서 의존성이란 **해당 프로젝트가 돌아가기 위해 필요한 npm 패키지들**입니다.
  + 협업 시나 프로젝트를 클론해왔을 경우에도 node install을 통하여 관련 패키지를 바로 다운로드하여 코드를 실행시킬 수 있습니다.
  
