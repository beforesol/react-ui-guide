# React 개발 환경 가이드

본 가이드는 React 개발 환경에서 UI 개발을 하기 위해 필요한 nvm, webpack, host setting 가이드입니다. (only **MAC**)

## 목차
- [NVM](#NVM)
- [NPM](#NPM)
- [React Zero Base 개발 환경 가이드](#React Zero Base 개발 환경 가이드)
- [Host](#Host)

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

- **NVM** 버전 유지
  - **package.json** 파일에 다음과 같이 engines 속성을 추가합니다.
  ```
  "engines": {
    "node": ">=10.16.0"
  },
  ```
  - **.nvmrc** 파일을 추가하고 nvm use 명령어를 실행하면 engines 속성에 설정한 버전의 Node.js를 사용하게 됩니다.
  ```
  10.16.0
  ```

  > 참고 문서
	> - [nvm](https://github.com/nvm-sh/nvm#about)
	> - [node.js, nvm, npm이란 무엇인가](https://pongsoyun.tistory.com/115)
	> - [nvm 설치](https://gist.github.com/falsy/8aa42ae311a9adb50e2ca7d8702c9af1)
	> - [간단하게 구축해 보는 JavaScript 개발 환경](https://d2.naver.com/helloworld/2564557)

## NPM
- **npm** 이란?
  + [Node Package Manager](https://www.npmjs.com/).
  + Node.js로 개발된 프로그램을 편리하게 설치, 업데이트 및 삭제를 해주는 프로그램

- package.json
  + 모든 npm 패키지들은 **package.json**이라는 파일 내에 정의되고, 이는 모두 JSON으로 작성됩니다.
  ```
    {
      "scripts": {
        "dev": "webpack-dev-server --mode=development --progress --display-error-details --host 0.0.0.0",
        "prod": "nvm use; npm rebuild; yarn; webpack --mode=production --optimize-minimize"
      },
      "engines": {
       "node": ">=10.16.0"
      },
      "name": "react-setting",
      "version": "1.0.0",
      "main": "index.js",
      "license": "MIT",
      "devDependencies": {
       "@uit-spritesmith/webpack": "^0.1.0",
        "autoprefixer": "^9.7.4",
        "clean-webpack-plugin": "^3.0.0",
        "copy-webpack-plugin": "^5.1.1",
        "react": "^16.13.0",
        "react-dom": "^16.13.0",
        "react-prop-types": "^0.4.0",
        "react-router-dom": "^5.1.2",
        "@babel/core": "^7.8.7",
        "@babel/preset-env": "^7.8.7",
        "@babel/preset-react": "^7.8.3",
        "babel-loader": "^8.0.6",
        "css-loader": "^3.4.2",
        "html-webpack-plugin": "^3.2.0",
        "style-loader": "^1.1.3",
        "webpack": "^4.42.0",
        "webpack-cli": "^3.3.11",
        "webpack-dev-server": "^3.10.3",
        "webpack-merge": "^4.2.2"
      }
    }
  ```
  
- Dependencies(의존성) 관리하기
  + npm에서 의존성이란 **해당 프로젝트가 돌아가기 위해 필요한 npm 패키지들**입니다.
  + 협업 시나 프로젝트를 클론해왔을 경우에도 node install을 통하여 관련 패키지를 바로 다운로드하여 코드를 실행시킬 수 있습니다.
  

## React Zero Base 개발 환경 가이드
- 사용할 라이브러리 목록
  + React 16
  + React Router 5
  + Hot Module Replacement(HMR)
  + CSS Autoprefixer
  + CSS Modules
  + Stage 1 Preset
  + Webpack 4
  
- 준비 사항
  + yarn과 Node.js 설치
  
### 1. node version 설정

```
nvm use 10.16.0
```
  
### 2. 의존성 초기화

- 새 디렉터리를 만들고 그 안에 package.json 파일을 만듭니다.

```
mkdir react-setting && cd $_
yarn init -y
```

- 프로덕션 의존성(production dependencies) 설치
  + **프로덕션 의존성**: 배포 단계에서 사용되는 라이브러리
```
yarn add react react-dom react-prop-types react-router-dom @uit-spritesmith/webpack autoprefixer copy-webpack-plugin clean-webpack-plugin --save
```

- 개발 의존성(development dependencies) 설치
  + **개발 의존성**: 개발 단계에서만 사용되는 라이브러리

```
yarn add @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/preset-stage-1 css-loader style-loader html-webpack-plugin webpack webpack-dev-server webpack-cli webpack-merge --save --dev
```

- 설치된 라이브러리
  + react: 리액트
  + react-dom: 브라우저 DOM 메서드를 제공합니다.
  + react-prop-types: React props 타입을 체크합니다.
  + react-router-dom: 리액트에서 사용 가능한 라우팅 기능을 제공합니다.
  + @uit-spritesmith/webpack:
  + autoprefixer: 
  + copy-webpack-plugin: 
  + clean-webpack-plugin: 
  + @babel/core : Babel 핵심 의존성 라이브러리입니다. Babel(바벨)은 자바스크립트 ES6를 ES5로 컴파일하여 현재 브라우저가 이해할 수 있도록 변환하는 도구입니다.
  + babel-loader: babel과 webpack을 사용해 자바스크립트 파일을 컴파일 합니다.
  + @babel/preset-env: ES2015, ES2016, ES2017 버전을 지정하지 않아도 바벨이 자동으로 탐지해 컴파일 합니다.
  + @babel/preset-react: 리액트를 사용한다는 것을 바벨에게 말해줍니다.
  + @babel/preset-stage-1: TC39에서 검토 중인 Stage 1 스펙을 사용합니다. (stage-0부터 3까지는 EcmaScript 스펙 중에 비공식 실험적인 기술들을 사용할 수 있게 해주는 프리셋으로 Stage 2와 Stage3도 사용 가능 합니다.)
  + css-loader: CSS 파일을 받아오고, webpack의 import/require 기능을 통해 가져온 모든 import와 url(...)문과 함께 CSS를 반환하는 역할을 합니다.
  + html-webpack-plugin: 애플리케이션을 위한 HTML파일을 생성하거나 템플릿을 제공합니다.
  + style-loader: <style> 태그를 삽입하여 CSS에 DOM을 추가합니다.
  + webpack: 모듈 번들러
  + webpack-cli: Webpack 4.0.1 이상에서 필요한 커맨드라인 인터페이스
  + webpack-dev-server: 애플리케이션 개발 서버를 제공합니다.
  + webpack-merge: 
	
### 3. Babel 설정
최상위 디렉터리에 바벨 설정 파일을 만듭니다.

```
touch .babelrc
``` 

**.babelrc** 파일을 열어 아래 코드를 추가합니다.
```
{
  "presets": [
    [
    "@babel/preset-env",
      {
        "targets": {
          "browsers": [
            "last 2 versions",
            ">= 5% in KR"
          ]
        }
      }
    ],
    "@babel/preset-react",
  ]
}
``` 

### 4. Webpack 설정
- webpack.config.common.js
  + production과 development 공통 개발 환경
  ``` 
  const path = require('path');
  const webpack = require('webpack');
  const UitSpritesmithWebpack = require('@uit-spritesmith/webpack');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const autoprefixer = require('autoprefixer');
  const root = path.resolve(__dirname);

  const commonCSSLoaderOptions = {
    importLoaders: 2,
    url: false
  };

  const cssLoaderOptions = {
    ...commonCSSLoaderOptions,
    modules: false
  };

  const scssLoaderOptions = {
    ...commonCSSLoaderOptions,
    modules: true,
    localIdentName: '[local]--[hash:base64:5]'
  };

  const postCSSLoaderOptions = {
    ident: 'postcss',
    plugins: () => [autoprefixer(),],
  };

  module.exports = {
    entry: ['./src/index.jsx'],
    resolve: {
      alias: {
        '@assets': `${root}/assets`,
      },
      extensions: ['.js', '.jsx', '.json', 'scss']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env', {
                      targets: { node: 'current' }, // 노드일 경우만
                      modules: 'false'
                    }
                  ],
                  '@babel/preset-react',
                ]
              }
            },
          ],
        },
        {
          test: /\.(css)$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader', options: cssLoaderOptions },
          ],
        },
        {
          test: /\.(scss)$/,
          include: path.resolve(__dirname, './src'),
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader', options: scssLoaderOptions },
            { loader: 'postcss-loader', options: postCSSLoaderOptions },
            { loader: 'sass-loader' },
          ],
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
      new webpack.HotModuleReplacementPlugin(),
      // new UitSpritesmithWebpack({
      //   spriteSrc: path.resolve(__dirname, './assets/sprite'),
      //   spriteDest: path.resolve(__dirname, './assets/img/sprite'),
      //   cssDest: path.resolve(__dirname, './assets/scss/sprite'),
      //   imgURL: '/assets/img/sprite',
      //   prefix: 'sp_',
      //   ratio: 3,
      //   padding: 3,
      // }),
    ],
  };
  ```
  + module: 애플리케이션 내 포함되는 모듈을 정의합니다.
    + 첫 번째 룰: node_modules 디렉토리를 제외한 자바스크립트 파일을 찾은 다음 babel-loader를 통해 바벨을 사용해 바닐라 자바스크립트로 변환합니다. 바벨은 .babelrc 파일에서 설정 내용을 읽습니다.
    + 두 번째 룰: css를 찾고 style-loader와 css-loader로 css를 처리합니다.
    + 세 번째 룰: webpack에서 sass 파일을 읽어오는 역할을 합니다.
  + plugin
    + html-webpack-plugin: 애플리케이션을 위한 html 파일을 생성하거나 템플릿을 제공합니다.
    + HotModuleReplacementPlugin: HMR 업데이트시 브라우저 터미널에 표시해 알아보기 쉽게 합니다.
    + [UitSpritesmithWebpack](https://oss.navercorp.com/UIT/uit-webpack/tree/master/uit-spritesmith/webpack)
    
    
- webpack.config.dev.js
  - **development 개발 환경**
  ```
  module.exports = {
    mode: 'development',
    output: {
      filename: 'bundle.[hash].js',
    },
    devtool: 'inline-source-map',
    devServer: {
      port: 8888,
      hot: true,
      historyApiFallback: true,
      open: true,
      disableHostCheck: true
    }
  };
  ``` 
    + mode: 설정 사항이 개발 환경(development)인지 프로덕션(production)인지를 알려줍니다.
    + entry: 애플리케이션의 진입점(entry point)입니다. 리액트 앱이 있는 위치와 번들링 프로세스가 시작되는 지점입니다.
    + output: 컴파일 된 파일을 저장할 경로를 알려줍니다.
    + filename: 번들된 파일 이름을 말합니다. [hash] 는 애플리케이션이 수정되어 다시 컴팡리 될 때마다 웹팩에서 생성된 해시로 변경해주어 캐싱에 도움이 됩니다.
    + devtool: 소스 맵을 생성해 애플리케이션 디버깅을 도와줍니다. 소스 맵에는 여러가지 유형이 있는데 그 중 inline-source-map은 개발시에만 사용됩니다.
    + devServer: 애플리케이션 개발 서버를 제공합니다.
      + hot: 서버에 HMR 작동을 허락합니다.

  - **package.json**에 아래와 같이 작성합니다.
  ``` 
   "scripts": {
     "dev": "webpack-dev-server --mode=development --progress --display-error-details --host 0.0.0.0"
   },
  ``` 
- webpack.config.prod.js
  - **production 개발 환경**
  ``` 
  const path = require('path');
  const webpack = require('webpack');
  const CopyWebpackPlugin = require('copy-webpack-plugin');
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');

  module.exports = {
    mode: 'production',
    output: {
      filename: './bundle.[hash].js',
      path: path.resolve(__dirname, './dist'),
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ['dist']
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
  };
  ```
  
  - **package.json**에 아래와 같이 작성합니다.
  ``` 
   "scripts": {
     "prod": "nvm use; npm rebuild; yarn; webpack --mode=production --optimize-minimize"
   },
  ``` 
- webpack.config.js
  - 여러 개의 웹팩 설정 파일을 하나로 병합해줍니다.
  ``` 
  const webpackMerge = require('webpack-merge');
  const webpackCommonConfig = require('./webpack.config.common');
  const webpackDevConfig = require('./webpack.config.dev');
  const webpackProdConfig = require('./webpack.config.prod');

  const MODE = {
    DEV: 'development',
    PROD: 'production',
  };

  module.exports = function (env = {}, argv) {
    const { mode } = argv;

    switch (mode) {
      case MODE.DEV:
        {
          return webpackMerge(webpackCommonConfig, webpackDevConfig);
        }

      case MODE.PROD:
        {
          return webpackMerge(webpackCommonConfig, webpackProdConfig);
        }
	
      default:
        throw new Error('invalid MODE');
    }
  };
  ``` 

### 5. 간단한 리액트 라우터 실습

  - 페이지 리스트
    - home
    - page not found
    - dynamic

  - public 폴더를 만들고 index.html 파일을 만듭니다.
  ``` 
    mkdir public && cd $_
    touch index.html
  ``` 
  
  - 리액트 앱이 렌더링 되는 HTML 템플릿을 작성합니다. index.html 파일을 열고 아래 코드를 붙여 넣어 줍니다.
  ``` 
    <!DOCTYPE html>
    <html lang="en">

      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>webpack-for-react</title>
      </head>

      <body>
        <div id="root"></div>
      </body>

    </html>
  ```
  
  - src 디렉토리 안에 index.jsx 파일을 만들고 아래의 코드를 넣어줍니다.
  ```
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from '../components/App';

    ReactDOM.render(<App />, document.getElementById('root'));
  ```
  
  - 터미널에서 명령어로 리액트 컴포넌트 파일을 만듭니다.
  ```
    mkdir components && cd $_
    touch App.jsx Layout.jsx Home.jsx DynamicPage.jsx NoMatch.jsx
  ```
  
  - 프로젝트 구조가 아래와 같을 것입니다.
  ```
    |-- node_modules
    |-- public
      |-- index.html
     |-- src
        |-- components
          |-- App.jsx
          |-- DynamicPage.jsx
          |-- Home.jsx
          |-- Layout.scss
          |-- Layout.jsx
          |-- NoMatch.jsx
      |-- index.jsx
    |-- .babelrc
    |-- package.json
    |-- webpack.config.common.js
    |-- webpack.config.dev.js
    |-- webpack.config.js
    |-- webpack.config.prod.js
    |-- yarn.lock
  ```
  
  - 리액트 라우터로 페이지 경로와 컴포넌트를 연결해 줍니다. App.js 파일을 열고 아래와 같이 수정합니다.
  ```
    import React from 'react';
    import { Switch, HashRouter, Route} from 'react-router-dom';

    import Home from './Home';
    import DynamicPage from './DynamicPage';
    import NoMatch from './NoMatch';

    const App = () => {
      return (
        <HashRouter>
           <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/dynamic" component={DynamicPage} />
                <Route component={NoMatch} />
             </Switch>
           </div>
        </HashRouter>
      );
    };

    export default App;
  ```
  
  - Layout.jsx 파일을 열고 아래의 코드를 작성합니다.
  ```
    import React from 'react';
    import { Link } from 'react-router-dom';

    const Layout = ({ children }) => {
      return (
        <div>
          <Link to="/">webpack-for-react</Link>
          {children}
        </div>
      );
    };

    export default Layout;
  ```
  
  - Home.jsx 파일을 열고 아래의 코드를 작성합니다.
  ```
    import React from 'react';
    import { Link } from 'react-router-dom';
    import Layout from './Layout';

    const Home = () => {
      return (
        <Layout>
          <p>Hello World of React and Webpack!</p>
          <Link to="/dynamic">Navigate to Dynamic Page</Link>
        </Layout>
      );
    };

    export default Home;
  ```
  
  - DynamicPage.jsx 파일을 열고 아래의 코드를 작성합니다.
  ```
    import React from 'react';
    import Layout from './Layout';

    const DynamicPage = () => {
      return (
        <Layout>
          <h2>Dynamic Page</h2>
          <p>This page was loaded asynchronously!!!</p>
        </Layout>
      );
    };

    export default DynamicPage;
  ```
  
  - NoMatch.jsx 파일을 열고 아래의 코드를 작성합니다.
  ```
    import React from 'react';
    import Layout from './Layout';

    const NoMatch = () => {
      return (
        <Layout>
          <p>Page not found!</p>
        </Layout>
      );
    };

    export default NoMatch;
  ```
  
  - 프로젝트 최상단 디렉토리로 가서 yarn 명령어로 서버를 실행합니다.
  ```
    yarn dev
  ```
  
  - 빌드 명령어로 프로덕션 번들을 생성합니다.
  ```
    yarn prod
  ```
  
  > 참고 문서
  > - [깊이 있는 리액트 개발 환경 구축하기](https://esausilva.com/2018/01/13/learn-webpack-for-react/)
  > - [Webpack Merge](https://joshua1988.github.io/webpack-guide/advanced/webpack-merge.html#%EC%9B%B9%ED%8C%A9-%EC%84%A4%EC%A0%95-%ED%8C%8C%EC%9D%BC-%EA%B5%AC%EB%B6%84-%EC%A0%84%EB%9E%B5)

## Host
- **host** 파일이란?
  + DNS보다 먼저 호스트명을 IP로 변경해주는 파일
    + DNS(Domain Name System): 사람이 읽을 수 있는 도메인 이름(예: www.amazon.com)을 머신이 읽을 수 있는 IP 주소(예: 192.0.0.22)로 변환합니다.

- **host** 설정이 필요성
  + 웹사이트를 개발하기 위하여 테스트 서버를 구축하는 경우에 사용됩니다.
  + 특정 사이트의 접근을 막거나 광고나 트래킹 코드가 있는 경우 이를 피하기 위해서 사용됩니다.
  
- **host** 설정을 안했을 경우 발생하는 이슈
  + Home.jsx 파일을 열고 img 태그를 작성하고 해당 이미지 파일을 로드합니다.
    + https://jrnaver-phinf.pstatic.net/20180802_115/1533205658923Wg0Nb_PNG/nt6VhjcBq1SVbbS45mwL.png
  ```
  import React from 'react';
  import { Link } from 'react-router-dom';

  import Layout from './Layout';

  const Home = () => {
    return (
      <Layout>
        <p>Hello World of React and Webpack!</p>
        <Link to="/dynamic">Navigate to Dynamic Page</Link>
        <img src='https://jrnaver-phinf.pstatic.net/20180802_115/1533205658923Wg0Nb_PNG/nt6VhjcBq1SVbbS45mwL.png' />
      </Layout>
    );
  };

  export default Home;
  ```
  + 이미지 로드가 실패합니다.
  
- **host** 설정 과정
  + **1. 터미널을 열고 host 파일을 엽니다.**
  ```
  $ sudo vi /etc/hosts
  ```
  or
  ```
  $ sudo vi /private/etc/hosts
  ```
  > hosts 파일을 수정하기 위해서는 관리자 권한이 필요하기에 sudo 명령어를 꼭 써줘야 합니다.
  > - sudo: 슈퍼 유저의 권한으로 명령을 실행
  > - vi: 편집기 실행 명령어
  > - /etc/hosts: hosts 파일 경로
  + **2. 비밀번호를 작성합니다.**
  + **3. 키보드 i를 누른 후 호스트 파일을 수정합니다.**
    + 127.0.0.1   local.naver.com 추가
  ```
  ##
  # Host Database
  #
  # localhost is used to configure the loopback interface
  # when the system is booting.  Do not change this entry.
  ##
  127.0.0.1   localhost
  127.0.0.1   local.naver.com
	
  255.255.255.255 broadcasthost
  ::1             localhost
  ```
  + **4. esc를 누른 후 :wq를 통해 호스트 파일을 저장하고 나옵니다.**
  + **5. (생략 가능) DNS cache 를 갱신합니다.**
  ```
  $ dscacheutil -flushcache
  ```
  
> 참고 문서
  > - [hosts 파일 수정하기](http://www.devkuma.com/books/pages/1191)
