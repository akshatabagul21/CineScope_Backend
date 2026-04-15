# CineScope 
- A Movie Recommendation System that suggests movies based on selected genres.
- Designed and implemented RESTful APIs and backend authentication using Node.js and Express.js.


# NOTE : 
- Cookie-based authentication is stateful, whereas JWT-based authentication is stateless.

- In stateful authentication, if the server goes down or the session cookie is removed from the server, all logged-in users will be logged out because the session ID no longer exists. This is a drawback of stateful authentication.

- In stateless authentication using JWT, user data is stored inside the token itself in an encrypted format and sent to the client. There is no dependency on server-side sessions; for every request, the token is decoded and verified by the server.
