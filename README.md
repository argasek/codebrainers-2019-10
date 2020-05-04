# Codebrainers Plantastic

This project was created as educational material for [Codebrainers Fullstack Bootcamp](https://codebrainers.pl/).

## Setup

In order to customize the application use [.env files provided by CRA](https://create-react-app.dev/docs/adding-custom-environment-variables/#what-other-env-files-can-be-used).
You can customize following environmental variables: 
* `REACT_APP_PLANTS_API_URL` – Plants API URL
* `REACT_APP_PLANTS_API_TIMEOUT` – maximum wait time for the Plants API to respond

So, example `.env.local` file might look like this:
```dotenv
PORT=1337
REACT_APP_PLANTS_API_URL=http://localhost:3000/api/
REACT_APP_PLANTS_API_TIMEOUT=1500
```
    
## Running

Install dependencies first:
```shell script
npm install
```
  
Then run the application:
```shell script
npm start
```

## Homework

All homework tasks were [moved here](HOMEWORK.md).