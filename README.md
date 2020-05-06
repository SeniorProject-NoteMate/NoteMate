## NOTEMATE

NOTEMATE is a long project in CMPE 195, Software Engineering Senior Project, at San José State University in Spring 2020.

## What is Note Mate?

- Provide student with a better learning experience by transcribing lecture to text in real-time 
- Able to translate into different kind of language
- Take notes while listening / reading the lecture text.

## Folder Hierarchy 
- __NoteMate__
   - [README.md](README.md)
   - __client__
     - [node\_modules](client/node_modules)
     - [package\-lock.json](client/package-lock.json)
     - [package.json](client/package.json)
     - __public__
       - [ancient\_books\_vector\_287426.jpg](client/public/ancient_books_vector_287426.jpg)
       - [favicon.ico](client/public/favicon.ico)
       - [home\_2.jpg](client/public/home_2.jpg)
       - [home\_page.jpg](client/public/home_page.jpg)
       - [images.png](client/public/images.png)
       - [index.html](client/public/index.html)
       - [logo192.png](client/public/logo192.png)
       - [logo512.png](client/public/logo512.png)
       - [manifest.json](client/public/manifest.json)
       - [robots.txt](client/public/robots.txt)
     - __src__
       - [App.css](client/src/App.css)
       - [App.js](client/src/App.js)
       - [App.test.js](client/src/App.test.js)
       - __AuthenticationPage__
         - [SignPages.js](client/src/AuthenticationPage/SignPages.js)
         - [SigninForm.js](client/src/AuthenticationPage/SigninForm.js)
         - [SignupForm.js](client/src/AuthenticationPage/SignupForm.js)
       - __Home__
         - [Home.js](client/src/Home/Home.js)
       - __NavBar__
         - [NavBar.js](client/src/NavBar/NavBar.js)
         - [TabBar.js](client/src/NavBar/TabBar.js)
       - __Record__
         - [Dictaphone.js](client/src/Record/Dictaphone.js)
         - [Recording.js](client/src/Record/Recording.js)
         - [VoicetoText.js](client/src/Record/VoicetoText.js)
       - __RoomSelection__
         - [Course.js](client/src/RoomSelection/Course.js)
         - [CourseList.js](client/src/RoomSelection/CourseList.js)
         - [RoomSelection.js](client/src/RoomSelection/RoomSelection.js)
       - [index.css](client/src/index.css)
       - [index.js](client/src/index.js)
       - [logo.svg](client/src/logo.svg)
       - [serviceWorker.js](client/src/serviceWorker.js)
     - [yarn.lock](client/yarn.lock)
   - __server__
     - [index.js](server/index.js)
     - [package.json](server/package.json)
     - [yarn.lock](server/yarn.lock)



## Usage

You can clone this repo and play around with it in your local machine. Please follow the steps below:

1. Clone the repository
git clone

2. Install the packages
This is to enable app for certain pages.

npm install

3. Run the app
To run the server, server-side (back-end):

node app.js

To run the client-side (front-end):

npm start

Check your browser using localhost

http://localhost:3000

## Team

Dung Pham

Viet Dinh

Kevin Prakasa


