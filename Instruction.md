# Blog Personal.

## Running the Server
###### Start the server on PORT 9090. Ensure strict adherence to this port number.

## Project Overview.
##### You are tasked with building an API for a Blog Personal. The project should include the following features.

- Register And Login JWT use and cooike set.
- CURD Operation performance For Post.
- JWT Use A LOGIN || Signup.
- Middleware User For Blog Opertions.

## Project Link.
- [This Project Github Link](https://github.com/jeelnarola/blogPersonal.git)

## Follow these instructions strictly.

### Implement in MVC Structure.

#### Database Connection.
1. Create a 'configs' folder. Inside this folder, create a file named 'connectDB.js'. Write logic to connect to MongoDB using an online database such as MongoDB Atlas.

#### Database Schema Design.

2. Create a 'models' folder.
    - create a file named 'auth.schema.js' with the following schema.
```
username,
email,
password
```

3. create a file named 'post.Schema.js' with the following schema.
```

title: { type: String, required: true },
content: { type: String, required: true },
author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Your User Schema ID and Ref.
isPublished: { type: Boolean, default: false },
publishedAt: { type: Date },

```

## Sign Up and Login.

### POST route - Sign Up
- Endpoint: Create a POST route at ```/api/auth/register```.
- JWT authentication Use.
- After a successful Sign, set cookies in the browser with the user's Token.
- Within the form, provide the following input fields with corresponding IDs:
    - username
    - password
    - email

### POST route - Login.
- Create a POST route named ```/api/auth/login```.
- JWT authentication Use.
- Within the form, provide the following input fields with corresponding IDs:
    - email
    - password
- After a successful login, set cookies in the browser with the user's Token.

### POST route - LogOut.
- Create a POST route named ```/api/auth/logout```.
- Clear Cookies.

## Blog Personal API EndPoint.
- All Post Opertion in check a Login User After a performance Task.

### GET route :- All Post Show.
- Create a GET route at ```/api/posts/Show```.

### GET route :- single Post Show.
- Create a GET route at ```/api/posts/SinglePosts/:id```.

### POST route :- Create Post.
- Create a Post route at ```/api/posts/Add```.
- send a response containing all available event.
- Middleware Use And Check Login || Signup True to Create A Post And False to res message Unauthorize.

### PATCH route :- Update Post.
- Create a Patch route at ```/api/posts/EditPosts/:id```.
- send a response containing all available event.
- Middleware Use And Check Login || Signup Required True to Update A Post And False to res message Unauthorized
- Only Update Your Post.

### DELETE route :- DELETE Post.
- Create a Delete route at ```/api/posts/DeletePosts/:id```.
- send a response containing all available event.
- Middleware Use And Check Login || Signup Required True to Update A Post And False to res message Unauthorized
- Only Delete Your Post.

## Routes

### User || Auth.

| Method   | EndPoint | Description |
|----------|----------|----------|
| ```POST```    | ```/api/auth/register```   | User Register.   |
| ```POST```    | ```/api/auth/login```   | User Login.   |
| ```POST```    | ```/api/auth/logout```   | User Logout.   |


### Books.

| Method   | EndPoint | Description |
|----------|----------|----------|
| ```GET```    | ```/api/posts/Show```   | Books Fetch all items.   |
| ```GET```    | ```/api/posts/SinglePosts/:id```   | sinle Book Data With Id.   |
| ```POST```    | ```/api/posts/Add```   | Books Create .   |
| ```PATCH```    | ```/api/posts/EditPosts/:id```   | Books Update With Id.   |
| ```DELETE```    | ```/api/posts/DeletePosts/:id```   | Books Delete With Id.   |

### Steps:
1. Clone the repository.
```bash
 git clone <repository-url>
```
2. Install dependencies:

``` bash
npm install
```
3. Create a .env file and add your MongoDB connection string:
``` bash
PORT=9090
MONGODB_URL=mongodb+srv://blogPersonal:blogPersonaly@cluster0.dgwjmgh.mongodb.net/blogPersonal?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=my_project_Elibray_jwt_SECRET
```

4. Start the server:
``` bash
npm start
```

