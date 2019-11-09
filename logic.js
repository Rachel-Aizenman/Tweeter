const Tweeter = function () {


    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    const getPosts = function () {
        return posts
    }

    let counter = 0
    for (let post of posts) {
        counter += post.comments.length
    }


    let commentIdCounter = counter
    let newCommentId = counter + 1


    let postIdNum = posts.length + 1





   const addPost = function (text) {
        const postText = text
        const postId = "p" + postIdNum
        posts.push({
            text: postText,
            id: postId,
            comments: []
        })
        postIdNum + 1
    }


    const removePost = function (postId) {
        for (i = 0; i < posts.length; i++) {
            if (posts[i].id == postId) {
                posts.splice(i, 1)
            }
        }
    }



    const addComment = function (text, postID) {
        newComID = "c" + newCommentId
        for (i = 0; i < posts.length; i++) {
            if (posts[i].id == postID) {
                posts[i].comments.push({
                    id: newComID,
                    text: text,
                })
            }
        }

        newCommentId++
    }


    const removeComment = function (postID, commentID) {
        for (i = 0; i < posts.length; i++) {
            if (posts[i].id == postID) {
                for (j = 0; j < commentIdCounter; j++)
                    if (posts[i].comments[j].id == commentID) {
                        return posts[i].comments.splice(j, 1)
                    }
            }
        }
    }

    return {

        postCounter: posts.length,
        commentIDcounter: commentIdCounter,
        getPosts: getPosts,
        removePost: removePost,
        addPost: addPost,
        addComment: addComment,
        removeComment: removeComment,

    }

    

}
