document.addEventListener('DOMContentLoaded', () => {
    showPostsUser();
});

const showPostsUser = () => {
    const postsContainer = document.querySelector(".posts__container");

    if(!postsContainer) {
        return;
    }      

    const idPost = localStorage.getItem('idpost');

    postId(idPost).then(({id, title, body}) => {
        listPosts({"idPost":id, "title":title, "body":body});
    }); 
}