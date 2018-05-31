# Gelp

https://gelp.netlify.com/

Thinkful's (https://www.thinkful.com/) React Fullstack Capstone Project - A web app using Node and Express to create a backend that serves your static files and a REST API.

## Introduction
It's a take on Yelp using Google Places Library and Google Maps Javascript API v3. Much like it's predecessor, Gelp provides users the ability to explore local businesses and leave reviews. Start searching for local businesses and write some reviews. The review system is a bit unique in that you rate a place on 3 criteria - Quantity, Quality, and Pricing.


## Client-side
The app was designed to work on mobile as well as tablet and desktop from the outset.

### Documentation of API
**Show Reviews on specific Place**
----
Returns json data of all ratings of a place
* **URL**

  /api/ratings/:restId

* **Method:**

  `GET`


* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** `{
          userId:"string"
          restId:"string",
          userFirstName:"string",
          userLastName:"string",
          userZipcode:"string",
          userCreated:"string",
          quantity:"number",
          quality:"number",
          pricing:"number",
          textarea:"string"
    }`
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 <br />
    **Content:** `{ message : "Internal servor Error" }`

* **Sample Call:**

  fetch('/api/ratings/:CH123hfjsisi2', {
        method: "GET",
        headers: { 'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .catch(error => console.log(error));

**Create Review**
----
Create a new Review
* **URL**

  /api/ratings

* **Method:**

  `POST`
  
*  **URL Params**

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
    **Content:** `{
          id:"string"
          userId:"string"
          restId:"string",
          userFirstName:"string",
          userLastName:"string",
          userZipcode:"string",
          userCreated:"string",
          quantity:"number",
          quality:"number",
          pricing:"number",
          textarea:"string",
          created:"date"
    }`
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 400 <br />
    **Content:** `{message = 'Missing "field" in request body'}`

  OR

  * **Code:** 500 <br />
    **Content:** `{ message : "Internal servor Error" }`

* **Sample Call:**

  fetch(`${API_BASE_URL}/ratings`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(rating)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())

**Create User**
----
Create a new user
* **URL**

  /api/users

* **Method:**

  `POST`
  
*  **URL Params**

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
    **Content:** `{
          id:"string"
          userId:"string"
          restId:"string",
          userFirstName:"string",
          userLastName:"string",
          userZipcode:"string",
          userCreated:"string",
          quantity:"number",
          quality:"number",
          pricing:"number",
          textarea:"string",
          created:"date"
    }`
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 400 <br />
    **Content:** `{message = 'Missing "field" in request body'}`

  OR

  * **Code:** 500 <br />
    **Content:** `{ message : "Internal servor Error" }`

* **Sample Call:**

  fetch(`${API_BASE_URL}/ratings`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(rating)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())


* **Notes:**

   Most requests grab the params from inputs and put them in the body of option which is passed into the function that calls each request method.

### Screenshots

Front Page:
![front page screenshot](https://github.com/davidlee93/BubbleUp-FullStack-Capstone/blob/master/frontpage.png)

Create Bubble Modal:
![create bubble modal screenshot](https://github.com/davidlee93/BubbleUp-FullStack-Capstone/blob/master/Create.png)

Edit Bubble Modal:
![edit buble modal screenshot](https://github.com/davidlee93/BubbleUp-FullStack-Capstone/blob/master/edit.png)

Filter Bubbles:
![filtering "lorem ip" example](https://github.com/davidlee93/BubbleUp-FullStack-Capstone/blob/master/filter.png)

## Technical/Technology

* The client-side web app is built using HTML/CSS, Javascript, jQuery.
* The web app is fully responsive, adapting for mobile, table and desktop viewports.
* A RESTful API was created in making this web app - Node Express was utilized.