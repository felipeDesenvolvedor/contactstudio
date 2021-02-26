document.addEventListener('DOMContentLoaded', () => {
    showPostsUser(1);
    searchPostsClickButton();
});

const validadeInput = message => {
    const formContainer = document.querySelector('.form__container');

    let validate = {
        "inputempty":"inputempty",
        "notfounduser":"notfounduser",
        "valueinvalid":"valueinvalid"
    }

    formContainer.classList.add(`form__container--${validate[message]}`);

    setTimeout(() => {
        formContainer.classList.remove(`form__container--${validate[message]}`);
    }, 2000)
}

const showPostsUser = userId => {
    const postsContainer = document.querySelector(".posts__container");
   
    if(!postsContainer) {
        return;
    }      

    postsUser(userId).then(posts => {

        if(posts.length) {
            postsContainer.innerHTML = "";

            posts.forEach(({id, title, body}) => {
            
                listPosts({"idPost":id, "title":title, "body":body});
            });
    
            openPost();
            return;
        }

        validadeInput('notfounduser');
    }); 
}

const searchPostsClickButton = () => {
    const formSearch = document.querySelector('.form__search');
    const input = document.querySelector('.form__input__idUser');
    const button = document.querySelector('.form__button');

    formSearch.addEventListener('submit', event => event.preventDefault());

    button.addEventListener('click', () => {
        if(!input.value) {
            validadeInput('inputempty');
            return; 
         } else if (input.value < 0) {
            validadeInput('valueinvalid');
            return;
         }
            
        let userIdValue = input.value;
        showPostsUser(userIdValue);
        input.value = "";
    });
}

const openPost = () => {
    const readMore = document.querySelectorAll('.post__readmore');
    
    readMore.forEach(element => {
        element.addEventListener('click', () => {
            localStorage.clear();
            localStorage.setItem(`idpost`, element.dataset.idpost);
            location.pathname = `/posts`;
        });
    });  
}