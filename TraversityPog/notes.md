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

# Overal end of video
- Since we will be working whit a database, we need to use Asyn await, in all the controllers, or that we will use another packaje `express-async-handler`