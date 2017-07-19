import axios  from 'axios'

export default  function fetchPopularRepos(){
    var encodedURI = window.encodeURI('https://myblog-46a92.firebaseio.com/posts');
    return axios.get(encodedURI)
      .then(function(response){
        return response;
      });
  }
