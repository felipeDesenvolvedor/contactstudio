const postsUser = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then(response => {
        return response.json();
    })
    .then(json => {
       return json;
    });
}