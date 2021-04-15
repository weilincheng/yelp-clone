# yelp-clone

I am following the [PERN Stack Course](https://www.youtube.com/watch?v=J01rYl9T3BU&t=4481s) to learn how to build a Yelp clone by using PostgreSQL, Express, React, and Node. 

A follow-up course is [Deploying Full Stack App onto Ubuntu/AWS](https://www.youtube.com/watch?v=NjYsXuSBZ5U&t=179s)

Course developed by [Sanjeev Thiyagarajan](https://www.youtube.com/channel/UC2sYgV-NV6S5_-pqLGChoNQ).

## Part2: Deploying App onto Ubuntu/AWS

### Day 1
1. Change the baseURL based on env `NODE_ENV`

## Part1: Build PERN Stack app locally 

### Day 21
Implement the logic to show average rating 
1. Use `LEFT JOIN` and `GROUP BY` to retrieve count and average rating of reviews for individual restaurant
2. Add renderRating function to render the average rating on restaurant list component

### Day 20
Implement add review front end 
1. Add disabled option in rating column to prevent user from sending default value "Rating"
2. Add onClick event handleSubmitReview
    * Use RestaurantFinder to send a post request to call addReview route
    * Use `history.push('/')` and `history.push(locaiton.pathname)` to refresh the page

### Day 19
Added review express route  
* Use post request to add new review into database   

        INSERT INTO reviews (restaurant_id, name, review, rating) VALUES (123, 'Carl', 'Good restuarnt!', 4)

### Day 18
1. Implement add review compoenents
2. Implement the logic to display existing review
    * Retrieve review information from database by using db.query
    * Use map function to iterate each review and render each review component

### Day 17
Implemented reviews component.

### Day 16
Implemented star rating component by using [fontawesome](https://fontawesome.com) icon.

### Day 15
Implemented detail page
* Add onClick event to push to detail page when click the restaurant in restaurants list 

### Day 14
Implemented the logic to update restaurant 
* Add UpdatePage to show the three input forms for user to update
* Use useHistory api to push to the UpdatePage when clicking the update button 
* Use useEffect to fill the current restaurant information 
* Use useHistory api to push back to Home 

### Day 13
Implemented the logic to delete restaurant from the restaurants list:
* Add onClick event to retrieve the id of restaurant to be deleted 
* Use filter function to filter out the restaurant with specified id 

### Day 12
1. Redering restaurants list with a map function to iterate each restaurant in RestaurantList component. 

2. Implement add restaurant feature 
    * Use useState to retrieve the information user type in the input box  
    * Use RestaurantFinder api to send a post request with json body
    * Use useContext to add restaurants data once get response from the database 

### Day 11
1. Install axios for fetch API

        npm install axios

2. Install cors to use different domain name for client and server side

        npm install cors


### Day 10
1. Change bootstrap version back to v4.6
2. Add three compoents 
    * Header
    * Add restaurants
    * Restaurant list
3. Add React context API

### Day 9
### Setup React Router  
1. Install React Router 

        npm install react-router-dom

2. Added Home / Restaurant detail page / Update page. Use rafce for the below snippet shortcut

        import React from 'react'

        const UpdatePage = () => {
            return (
                <div>
                    Update Page
                </div>
            )
        }

        export default UpdatePage

3. Setup route to above pages in App.jsx

        <Route exact path="/" component={Home}/>
        <Route exact path="/restaurant/:id/update" component={UpdatePage}/>
        <Route exact path="/restaurant/:id" component={RestaurantDetailPage}/>

### Day 8
1. Set up React with create-react-app
2. Add link tag to font-awesome and bootstrap
3. Install VS code extension [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

### Day 7  
1. Change id column into identity column  
    First, change Nullable into not null 

        yelp=# ALTER TABLE restaurants  
        ALTER COLUMN id SET NOT NULL;  
        yelp=# \d restaurants  
        Column    |         Type          | Collation | Nullable | Default
        -------------+-----------------------+-----------+----------+---------
        id          | integer               |           | not null |

    Second, make id column into identity column 

        yelp=# ALTER TABLE restaurants
        ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY;
        yelp=# \d restaurants
        Column    |         Type          | Collation | Nullable |           Default
        -------------+-----------------------+-----------+----------+------------------------------
        id          | integer               |           | not null | generated always as identity

2. Implemented "Create a restaurant" route. Use "returning *" so that when we create the new restaurants the postgres db returns the new entry.  

### Day 6
Implented two routes:
1. Update restaurant
2. Delete restaurant

### Day 5
Use query method and retrieve the information with key "rows" to return restaurants information.  
Implemented below routes.    
1. Get all restaurants route
2. Get one restaurant route

### Day 4
1. Install [node-postgres](https://node-postgres.com) 
2. Connect Express and Postgres 

### Day 3
1. Use express middleware express.json to parse the body information in jason format into js object.   
2. Finish the rest of routes:
    * Update restaurant
    * Delete restaurant 

### Day2
1. Install dotenv and nodemon.  
2. Teste get method which sends a json format back.   
3. Add three api:
    * Get all restaurants
    * Get individual restaurants
    * Create new restaurants

### Day1
Install the node environment and install express. 
