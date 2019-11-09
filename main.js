const tweeter = Tweeter()
const renderer = Renderer()


$("#post").click(function(){
    tweeter.addPost($("#input").val());
    $("#input").val("");
    renderer.renderPosts(tweeter.getPosts())
});

$("#posts").on('click', ".deletePost", function(){
    let postID = $(this).closest(".postClass").attr("id")
    tweeter.removePost(postID)
    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on('click', ".Comments", function(){
    let text = $(".addComments").val()
    let postID = $(this).closest(".postClass").attr("id");
    tweeter.addComment(text, postID);
    renderer.renderPosts(tweeter.getPosts())
})


$("#posts").on("click", ".delete-comment", function(){
    let postID = $(this).closest(".postClass").attr("id");
    let commentID = $(this).closest(".comments").attr("id");
    tweeter.removeComment(postID, commentID);
    renderer.renderPosts(tweeter.getPosts())
})



renderer.renderPosts(tweeter.getPosts())

