## To run this application

```bash
mvn jetty:run
```
Application is now running in : [http://localhost:8080/](http://localhost:8080/)

## To install test environment 

**install Node.js**

[http://nodejs.org/](http://nodejs.org/)

Make sure node and npm are in the your Path.
```bash
echo $PATH
```
_Configure NPM proxy_
```bash
npm config set proxy http://[proxy]:[PORT]
npm config set https-proxy http://[proxy]:[PORT]
```
check also proxy variables 
```bash
set HTTP_PROXY=http://[proxy]:[PORT]
set HTTPS_PROXY=http://[proxy]:[PORT]
```

**Install node modules

```bash
npm install -g bower
npm install -g grunt-cli
npm install
```

## To run integration tests 

make sure your application is running on  [http://localhost:8080/](http://localhost:8080/)

run protractor tests 
```bash
grunt test:e2e
```
