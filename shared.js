
const Renderer = () => {
    return {
        renderPosts: posts => {
            $('#posts').empty();
            for (const post of posts) {
                $('#posts').append(`<ul class="post" id=${post.id}>${post.text}</ul><input id="comment" placeholder="write your comment"/><div id="commentbtn" onclick="tweeter.addComment()">Comment!</div>`)
                if (post.comments.length > 0) {
                    for (const comment of post.comments) {
                        $(`#${post.id}.post`).append(`<li id=${comment.id}>${comment.text}</li>`)
                    }
                }
            }
        }
    }
}

const tweeter = Tweeter()
const renderer = Renderer()
renderer.renderPosts(tweeter.getPosts())
$("body").on("click","#post", function() {
   tweeter.addPost($("#input").val())
   renderer.renderPosts(tweeter.getPosts())
   $("#input").val("")
})
$("#posts").on("click",".delete" ,function() {
   let postID = $(this).closest(".post").data("id")
   tweeter.removePost(postID)
   renderer.renderPosts(tweeter.getPosts())
})
$("#posts").on("click", ".add-comment", function () {
   let postID = $(this).closest(".post").data("id")
   let comment = $(this).closest(".post").find(".comment-text").val()
   tweeter.addComment(postID, comment)
   renderer.renderPosts(tweeter.getPosts())
})
$("#posts").on("click", ".delete-comment", function () {
   let postID = $(this).closest(".post").data("id")
   let commentID = $(this).closest(".comments").data("id")
   tweeter.removeComment(postID, commentID)
   renderer.renderPosts(tweeter.getPosts())
})