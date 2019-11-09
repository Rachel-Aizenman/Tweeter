

const Renderer = function () {

    renderPosts = function () {

        $('#posts').empty();
        const posts = tweeter.getPosts()

        for (let post of posts) {

            const postHTML=(`<div class="post postClass" id=${post.id}>${post.text}<button class = "deletePost">Delete</button>   <input class="addComments" placeholder="Your comment here"/><button class="Comments">Comment</button></div>`);
            
            $('#posts').append(postHTML)

            for (j = 0; j < post.comments.length; j++) {
                const commentHTML=`<li class="comments" id=${post.comments[j].id}>${post.comments[j].text}<button class="delete-comment">X</button></li>`
                $(`#${post.id}`).append(commentHTML)
            }
        }
 
    }
    return {
        renderPosts: renderPosts
    }
}



