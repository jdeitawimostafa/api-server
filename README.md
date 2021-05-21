# api-server


## **Deployment Test**
## **Author: mostafa jdeitawi**


[deployment link](https://api-server-jdeitawi.herokuapp.com/)

[PR](https://github.com/jdeitawimostafa/api-server/pull/2)




 ## **Setup**
* .env requirements
  * PORT - Port Number


## **Running the app**
npm start


## **Tests**
* 404 on a bad route
* 404 on a bad method
* The correct status codes and returned data for each REST route
  * Create a record using POST
  * Read a list of records using GET
  * Read a record using GET
  * Update a record using PUT
  * Destroy a record using DELETE

* Endpoint: 
**npm start**
    * /api/v1/food : json object
          [
          {
           "_id": "60a65f8c4839a32019dd4857",
            "name": "rice",
            "size": "l",
            "__v": 0
            }
           ]
 * /api/v1/clothes : json object 
        [
          {
           "_id": "60a65f8c4839a32019dd4857",
            "name": "T-Shirt",
            "size": "L",
            "__v": 0
            }
           ]  
 

***Thank you!!***
