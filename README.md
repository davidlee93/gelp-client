# Gelp

https://gelp.netlify.com/

Thinkful's (https://www.thinkful.com/) React Fullstack Capstone Project

## Introduction

Gelp - It's a take on Yelp using Google Places Library and Google Maps Javascript API v3. Much like it's predecessor, Gelp provides users the ability to explore local businesses and leave reviews. Start searching for local businesses and write some reviews. The review system is a bit unique in that you rate a place on 3 criteria - Quantity, Quality, and Pricing.

## Client-side

The app was designed to work on mobile as well as tablet and desktop from the outset.

## Documentation of API

### **Show Reviews on specific Place**

Returns json data of all ratings of a place

* **URL**

  /api/ratings/:restId

* **Method:**

  `GET`

- **Success Response:**

  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** `{ userId:"string" restId:"string", userFirstName:"string", userLastName:"string", userZipcode:"string", userCreated:"string", quantity:"number", quality:"number", pricing:"number", textarea:"string" }`

- **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 <br />
    **Content:** `{ message : "Internal servor Error" }`

- **Sample Call:**

  fetch('/api/ratings/:CH123hfjsisi2', {<br />
  method: "GET",<br />
  headers: { 'Content-Type': 'application/json'}<br />
  })<br />
  .then(response => response.json())<br />
  .catch(error => console.log(error));<br />

### **Create User**

Create a new user

* **URL**

  /api/users

* **Method:**

  `POST`

* **URL Params**

  **Required:**
  'email=[string]'
  'password=[string]'
  'firstname=[string]'
  'lastname=[string]'
  'zipcode=[number]'

* **Data Params**

  `{ email=[string]', password=[string]', firstname=[string]', lastname=[string]', zipcode=[number]' }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ message: Successfully created user: ${user.email} }`

* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 400 <br />
    **Content:** `{message = 'Missing "field" in request body'}`

  OR

  * **Code:** 500 <br />
    **Content:** `{ message : "Internal servor Error" }`

* **Sample Call:**

  return fetch(`${API_BASE_URL}/users`, {<br />
  method: "POST",<br />
  headers: {<br />
  "content-type": "application/json"<br />
  },<br />
  body: JSON.stringify(user)<br />
  })<br />
  .then(res => normalizeResponseErrors(res))<br />
  .then(res => res.json())<br />

### **Create Review**

Create a new Review

* **URL**

  /api/ratings

* **Method:**

  `POST`

* **URL Params**

  **Required:**
  'userId=[string]'
  'userFirstName=[string]'
  'userLastName=[string]'
  'userZipcode=[number]'
  'userCityState=[string]'
  'userCreated=[string]'
  'restId=[string]'
  'quality=[number]'
  'quantity=[number]'
  'pricing=[number]'
  'textarea=[string]'

* **Data Params**

  `{ userId=[string], userFirstName=[string], userLastName=[string], userZipcode=[number], userCityState=[string], userCreated=[string], restId=[string], quality=[number], quantity=[number], pricing=[number], textarea=[string] }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ id:"string" userId:"string" restId:"string", userFirstName:"string", userLastName:"string", userZipcode:"string", userCreated:"string", quantity:"number", quality:"number", pricing:"number", textarea:"string", created:"date" }`

* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 400 <br />
    **Content:** `{message = 'Missing "field" in request body'}`

  OR

  * **Code:** 500 <br />
    **Content:** `{ message : "Internal servor Error" }`

* **Sample Call:**

  fetch(`${API_BASE_URL}/ratings`, {<br />
  method: "POST",<br />
  headers: {<br />
  "content-type": "application/json"<br />
  },<br />
  body: JSON.stringify(rating)<br />
  })<br />
  .then(res => normalizeResponseErrors(res))<br />
  .then(res => res.json())<br />

* **Notes:**

  Most requests grab the params from inputs and put them in the body of option which is passed into the function that calls each request method.

### Screenshots

Landing Page:
![Landing Page screenshot](https://github.com/davidlee93/gelp-client/blob/master/public/Landing%20Page.png)

Signup Page:
![Signup Page screenshot](https://github.com/davidlee93/gelp-client/blob/master/public/signup-page.png)

Login/Demo Page:
![Login/Demo Page screenshot](https://github.com/davidlee93/gelp-client/blob/master/public/login%3Ademo-page.png)

Search Page:
![Search Page screenshot](https://github.com/davidlee93/gelp-client/blob/master/public/Search%20Page.png)

Findings Page:
![Findings Page screenshot](https://github.com/davidlee93/gelp-client/blob/master/public/findings-page.png)

Place Page:
![Place Page screenshot](https://github.com/davidlee93/gelp-client/blob/master/public/place-page.png)

Rate Page:
![Rate Page: screenshot](https://github.com/davidlee93/gelp-client/blob/master/public/Rate%20Page.png)

## Technical/Technology

### technologies:

/ <a href="https://reactjs.org/">React</a> / <a href="https://redux.js.org/">Redux</a> / HTML5 / CSS3 / JavaScript / <a href="https://github.com/airbnb/enzyme">Enzyme</a> / <a href="https://travis-ci.org/">Travis CI</a> / <a href="https://www.netlify.com/">Netlify</a> /

* The client-side web app is built using React & Redux
* The web app is fully responsive, adapting for mobile, table and desktop viewports.
* A RESTful API was created in making this web app - Node Express was utilized in Gelp API

### Backend Gelp APi repository:

https://github.com/davidlee93/gelp-server
