function createPost() {
  let title = $('#post-title')[0].value
  let body = $('#post-body')[0].value
  let author = $('#post-author')[0].value

  let pageTemplate = $('#page-template')[0].innerHTML
  let postTemplate = $('#post-template')[0].innerHTML
  let postTemplateFn = _.template(postTemplate)
  let templateHTML = postTemplateFn({title:title, author:author, body:body})

  let postContainer = $('#post-container')[0]
  postContainer.innerHTML += templateHTML
}