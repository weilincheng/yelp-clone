# yelp-clone

I am following the [PERN Stack Course](https://www.youtube.com/watch?v=J01rYl9T3BU&t=4481s) to learn how to build a Yelp clone by using PostgreSQL, Express, React, and Node. 

Course developed by [Sanjeev Thiyagarajan](https://www.youtube.com/channel/UC2sYgV-NV6S5_-pqLGChoNQ).

## Day 6  
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
    ALTER TABLE
    yelp=# \d restaurants
       Column    |         Type          | Collation | Nullable |           Default
    -------------+-----------------------+-----------+----------+------------------------------
     id          | integer               |           | not null | generated always as identity

2. Implemented "Create a restaurant" route. Use "returning *" so that when we create the new restaurants the postgres db returns the new entry.  

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
