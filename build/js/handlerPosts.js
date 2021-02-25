document.addEventListener('DOMContentLoaded', () => {
    showPostsUser(1);
    searchPostsClickButton();
    // searchPostsInput();
});

const showPostsUser = userId => {
    const postsContainer = document.querySelector(".posts__container");
          postsContainer.innerHTML = "";

    if(!postsContainer) {
        return;
    }      

    postsUser(userId).then(posts => {

        posts.forEach(({title, body}) => {
            listPosts({"title":title, "body":body});
        });
    }); 
}

const searchPostsClickButton = () => {
    const formSearch = document.querySelector('.form__search');
    const input = document.querySelector('.form__input__idUser');
    const button = document.querySelector('.form__button');

    formSearch.addEventListener('submit', event => event.preventDefault());

    button.addEventListener('click', () => {
        if(!input.value) {
            return; 
         }
            
        let userIdValue = input.value;
        showPostsUser(userIdValue);
    });
}

const searchPostsInput = () => {
    const input = document.querySelector('.form__input__idUser');

    input.addEventListener('input', event => {
        if(event.target.value == 1) {
             showPostsUser(1); 
         }
    });
}