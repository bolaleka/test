const { RESTDataSource } = require('apollo-datasource-rest'); 

  
class StarWarAPI extends RESTDataSource {
    constructor () {
        super()
        this.baseURL = `https://swapi.dev/api/`;
    }

    async getPersonByName(name) {
        try {    
            //Get person by name from the API and return the field in transformToSchema function.
            const response = await this.get(`people/?search=${name}`);
            return this.transformToSchema(response);

        } catch (errr) {
            console.log("This is an error from person")
        }
       
    }

     //Query type that cater for pagination and return all people on that page
    async getPage(id) {
        try {
            //Get people by page ID
            const response = await this.get(`people/?page=${id}`)
                return this.transformToSchema(response);
        } catch (error) {
            console.log("This page does not exist.")
        }
        
    }

    //function to transform schema field to the expect output
    transformToSchema(response) {
        return {
            next: response.next,
            previous: response.previous,
            results: response.results.map(result => this.transFornResult(result))
        }
    }

    //Cater for nested object for results properties in the returned API endpoints
    transFornResult(result) {
        //retun the required field in the API
        return {
            name: result.name,
            height: result.height,
            mass: result.mass,
            gender: result.gender,
            homeworld: result.homeworld
        }
    }
    
}


module.exports = StarWarAPI; 