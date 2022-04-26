# Table of contents
- [Table of contents](#table-of-contents)
  - [Router](#router)
- [Overall backend function](#overall-backend-function)
- [Middleware](#middleware)
- [Overal end of video 1](#overal-end-of-video-1)


npm 
- npm i -D = npm i --save-dev

## Router
- It's pretty much like react router but for data, and get triggered depending on the requiested URL

# Overall backend function 
- I have the `nodemon` installed in devDependencies so everytime I make a change the whole server updates *ativated whit `npm run server`*
- Once the server is up & running the `server.js` link to the file inside `backend/routes/goalRoutes`, and then that files calls the file inside `backend/controllers/goalController` because it want's the function it has inside.

# Middleware
- it's extra functionality added to your backend
- It this case they are functions that allow us to read data from the fron-end

# Overal end of video 1
- Since we will be working whit a database, we need to use Asyn await, in all the controllers, or that we will use another packaje `express-async-handler`
- CRUD (Create Read Update Delete), just a combo of asycn await to work whit the database, allows to do CRUD whit the goals :D

### From
TraversityMedia