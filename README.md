# BoardMeeting

> Full-Stack social media website for connecting snowboarders

# Quick Start

### Add a default.json file in config folder with the following

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}
```

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

### Build for production

```bash
cd client
npm run build
```

### Test production before deploy

```bash
NODE_ENV=production node server.js
```

Check in browser on [http://localhost:5000/](http://localhost:5000/)

## App Info

### Author

Kareem Al-asmar

This is a based on a MERN stack application from the "MERN Stack Front To Back" course on [Udemy](https://www.udemy.com/mern-stack-front-to-back/?couponCode=TRAVERSYMEDIA). It is a small social network app that includes authentication, profiles and forum posts.
