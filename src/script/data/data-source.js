class DataSource {
    static searchFood(keyword) {
        return fetch(`https://sports-api.dicoding.dev/teams/search?t=${keyword}`)
        //return fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then(res => {
            return res.json();
        })
        .then(resJson => {
            if(resJson.teams/*meals*/) {
                return Promise.resolve(resJson.teams/*meals*/);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
 }
  
 export default DataSource;
 
/*class DataSource {
    static searchClub(keyword) {
        return fetch(`https://sports-api.dicoding.dev/teams/search?t=${keyword}`)
        //return fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.teamsmeals) {
                /*return Promise.resolve(responseJson.teamsmeals);
            /*} else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
 }
  
 export default DataSource;*/