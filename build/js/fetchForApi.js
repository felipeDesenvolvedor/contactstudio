const postsUser = userId => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => {
        return response.json();
    })
    .then(json => {
       return json;
    });
}

const postId = postId => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => {
        return response.json();
    })
    .then(json => {
       return json;
    });
}