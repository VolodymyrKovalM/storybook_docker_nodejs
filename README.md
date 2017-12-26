# Docker with NodeJS (Express) boilerplate

## To install depedencies via npm run

```
npm install
```
## To Install depedencies via yarn run

```
yarn
```

### Build the docker image

```
docker build -t {your docker id}/{image name} .
```

### Run the docker image

```
docker run -p 4000:80 {your docker id}/{image name}
```

Access in browser on port 4000 [http://localhost:4000/](http://localhost:4000/)
