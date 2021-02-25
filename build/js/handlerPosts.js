document.addEventListener('DOMContentLoaded', () => {
    showPostsUser();
});

const showPostsUser = () => {
    postsUser().then(posts => {

        posts.forEach(({title, body}) => {
            listPosts({"title":title, "body":body});
        });
    }); 
}