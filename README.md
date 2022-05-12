# Whatsapp-backend

## A backend repository to simulate a whatsapp-like realtime communication

[![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

Whatsapp-backend is a NodeJS based backend application that leverages the power of real-time communication using Pusher and MongoDB changestreams.

## Architecture

Fololowing is the architecture of the application.
[![Architecure Diagram](https://github.com/faizvasaya/whatsapp-backend/blob/master/chat-application-architecture.jpg?raw=true)](https://github.com/faizvasaya/whatsapp-backend/blob/master/chat-application-architecture.jpg?raw=true)

## Tech

whatsapp-backend uses a number of open source projects to work properly:

- [Express] - Fast, unopinionated, minimalist web framework for Node.js
- [Mongoose] - Elegant mongodb object modeling for node.js
- [Pusher] - Powering realtime experiences for mobile and web

## Environment setup

- Add the `connectionURL` value in server.js. It should be the complete connection URL of the mongodb database that you're willing to use.
- Create an account on [Pusher], obtain credentials and use it to replace values for `pusher` in server.js file.

## Installation

whatsapp-backend requires [Node.js](https://nodejs.org/) v16+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd whatsapp-backend
npm i
nodemon server.js
```

## Author

Faizal Vasaya

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/faizalvasaya/) [![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/FaizalVasaya)

## License

MIT

**Free Software, Hell Yeah!**

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[pusher]: https://pusher.com/
[express]: http://expressjs.com
[mongoose]: https://mongoosejs.com/
