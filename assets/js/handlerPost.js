"use strict";document.addEventListener("DOMContentLoaded",function(){showPostsUser()});var showPostsUser=function(){var t=document.querySelector(".posts__container");if(t){var o=localStorage.getItem("idpost");postId(o).then(function(t){var o=t.id,e=t.title,s=t.body;listPosts({idPost:o,title:e,body:s})})}};