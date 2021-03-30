# yelp-clone

I am following the [PERN Stack Course](https://www.youtube.com/watch?v=J01rYl9T3BU&t=4481s) to learn how to build a Yelp clone by using PostgreSQL, Express, React, and Node. 

Course developed by [Sanjeev Thiyagarajan](https://www.youtube.com/channel/UC2sYgV-NV6S5_-pqLGChoNQ).

## Day 11
1. Install axios for fetch API

        npm install axios

2. Install cors to use different domain name for client and server side

        npm install cors


## Day 10
1. Change bootstrap version back to v4.6
2. Add three compoents 
    * Header
    * Add restaurants
    * Restaurant list
3. Add React context API

## Day 9
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

## Day 8
1. Set up React with create-react-app
2. Add link tag to font-awesome and bootstrap
3. Install VS code extension [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## Day 7  
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

## Day 6
Implented two routes:
1. Update restaurant
2. Delete restaurant

## Day 5
Use query method and retrieve the information with key "rows" to return restaurants information.  
Implemented below routes.    
1. Get all restaurants route
2. Get one restaurant route

## Day 4
1. Install [node-postgres](https://node-postgres.com) 
2. Connect Express and Postgres 

## Day 3
1. Use express middleware express.json to parse the body information in jason format into js object.   
2. Finish the rest of routes:
    * Update restaurant
    * Delete restaurant 

## Day2
1. Install dotenv and nodemon.  
2. Teste get method which sends a json format back.   
3. Add three api:
    * Get all restaurants
    * Get individual restaurants
    * Create new restaurants

## Day1
Install the node environment and install express. 
