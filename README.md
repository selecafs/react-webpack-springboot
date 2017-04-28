# react-webpack-springboot
A simple boilerplate for stack of react, webpack, spring boot and gradle

## Prerequisites
Install gradle 
```sh
brew install gradle
```

Install Nodejs

## Installing
```sh
git clone https://github.com/selecafs/react-webpack-springboot.git
```

## Build && Run
```sh
Build: gradle build
Run: ./gradlew clean bootRun
```
## Test
```sh
http://localhost:8080
```
A react calendar should be shown up.


## Tutorial
The tutorial is about how this boilerplate is built from the ground for your curiosity. 

#### 0. Create a spring gradle project
https://start.spring.io/ or Spring CLI

#### 1. create package.json
```sh
npm init
```

#### 2. Install webpack, reactjs, babel and other necessary packages
Content refers to package.json

#### 3. Create webpack.config.js
Content refers to webpack.config.js

#### 4. create FE starting entry
create src/main/resources/public/index.html
```sh
<div id="content"></div>
<script src="dist/bundle.js"></script>
```

create src/main/webapp/javascript/index.jsx

Put any React code you want to test

Content refers to index.jsx

#### 5. Add gradle-node-plugin
Changes in build.gradle
```sh
dependencies {
	compile('org.springframework.boot:spring-boot-starter-web')
	testCompile('org.springframework.boot:spring-boot-starter-test')
}

buildscript {
	repositories {
		maven {
	      url 'https://plugins.gradle.org/m2/'
	    }
	}
}
```

Add the followings:
```sh
apply plugin: "com.moowork.node"
import com.moowork.gradle.node.task.NodeTask

task webpack(type: NodeTask, dependsOn: 'npmInstall') {
  script = project.file('node_modules/.bin/webpack')
}

processResources.dependsOn 'webpack'
```

Refer build.gradle


#### 6. Build && Run
```sh
./gradlew clean bootRun
```

#### 7. Test
```sh
http://localhost:8080
```
A react calendar should be shown up.
