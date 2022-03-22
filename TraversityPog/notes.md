npm 
- npm i -D = npm i --save-dev

## Router
- It's pretty much like react router but for data, and get triggered depending on the requiested URL

# Overall backend function 
- I have the `nodemon` installed in devDependencies so everytime I make a change the whole server updates *ativated whit `npm run server`*
- Once the server is up & running the `server.js` link to the file inside `backend/routes/goalRoutes`, and then that files calls the file inside `backend/controllers/goalController` because it want's the function it has inside.