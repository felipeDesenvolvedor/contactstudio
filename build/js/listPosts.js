const listPosts = ({title, body}) => {
    const postsContainer = document.querySelector(".posts__container");
    
    const titleElement = document.createElement('h3');
          titleElement.classList.add("post__title");    
          titleElement.textContent = title;
          
    const bodyElement = document.createElement('p');
          bodyElement.classList.add('post__body');
          bodyElement.textContent = body;

    const readyMore = document.createElement('span');
          readyMore.classList.add('post__readmore');
          readyMore.textContent = 'read more';
          
    const postItem = document.createElement('article');
          postItem.classList.add('post__item');
          
          postItem.appendChild(titleElement);
          postItem.appendChild(bodyElement);
          postItem.appendChild(readyMore);
          postsContainer.appendChild(postItem);      
}