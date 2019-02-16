function addPage() {
  let pageTemplate = document.querySelector('#page-template').innerHTML
  let pageContainer = document.querySelector('#page-container')
  let pageTemplateFn = _.template(pageTemplate)
  let templateHTML = pageTemplateFn()
  pageContainer.innerHTML += templateHTML
}


function createPost() {
  let pageContainer = document.querySelector('#page-container')
  let len = pageContainer.innerHTML.trim().length
  if (len === 0) {
    addPage()
  }  
  addPost()
  addComments()
}
function addPost() {
  let title = document.querySelector('#post-title').value
  let body = document.querySelector('#post-body').value
  let author = document.querySelector('#post-author').value

  let postTemplate = document.querySelector('#post-template').innerHTML
  let postTemplateFn = _.template(postTemplate)
  let templateHTML = postTemplateFn({title:title, author:author, body:body})

  let postContainer = document.querySelector('#post-container')
  postContainer.innerHTML += templateHTML
}

function addComments() {
  let commentsTemplate = document.querySelector('#comments-template').innerHTML
  let commentsTemplateFn = _.template(commentsTemplate)
  let templateHTML = commentsTemplateFn()
  let postContainer = document.querySelector('#post-container')
  postContainer.innerHTML += templateHTML
}

function postComment() {
  let comment = document.querySelector('#comment').value
  let commenter = document.querySelector('#commenter').value

  let commentTemplate = document.querySelector('#comment-template').innerHTML
  let commentTemplateFn = _.template(commentTemplate)
  let templateHTML = commentTemplateFn({comment:comment, commenter:commenter})
  let commentContainer = document.querySelector('#comments')
  commentContainer.innerHTML += templateHTML
}
