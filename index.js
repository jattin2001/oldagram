
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const postEl = document.getElementById("post-section")


for (let i = 0; i < posts.length; i++) {

    postEl.innerHTML += `
    <div class="post-container">
    <div class="post-by">
        <img  class="round-img" src="${posts[i].avatar}">
        <div class="post-by-info-box">
        <h3>${posts[i].name}</h3>
        <p>${posts[i].location}</p>
        </div>
    </div>
    <div class="media-post">
        <img src="${posts[i].post}">
    </div>
    <div class="post-engagement">
        <div class="engegements">
        <img src="images/icon-heart.png">
        <img src="images/icon-comment.png">
        <img src="images/icon-dm.png">
        </div>
        <div class="likes-comments">
            <p>${posts[i].likes} likes</p>
            <p><strong>${posts[i].username}</strong> ${posts[i].comment}</p>
        </div>                
    </div>
  
    </div>
    `
    
}

