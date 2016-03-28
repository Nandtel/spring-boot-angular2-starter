# Spring Boot Angular2 Starter Application
The simple starter application on Spring Boot with AngularJS 2. This is my personal base application for Spring Boot + AngularJS 2 projects. I prefer to use gradle as a primary build system and gulp as a build system for front-end. All the interaction with compiling typescript, prefixing css and installing typings are handling by gulp. All the taks for installing node, npm and gulp were implemented in the gradle for more convient introduction.

My goal is basic, simple and configurated project for convient start with Spring Boor and AngularJS 2.

# How to run

At first, install npm package for the project. I suppose, you have installed node globally, then just enter follow: 

```
npm install
```

But if not - use this command for installing node and npm localy in project directory:

```
gradlew npm_install
```

At first build will be downloading typing, compiling typescript to javascript, concatenating lib.js from all javascript sources, prefixing css and replacing html files. More clearly this tasks you can see in gulpfile.js.
For this you can run:

```
gradlew gulp_build
```

And run the server:

```
gradlew bootRun
```

Now you can see the result at [localhost](http://localhost:8080/).
