function addPage() {
  let pageTemplate = $('#page-template')[0].innerHTML
  let pageContainer = $('#page-container')[0]
  let pageTemplateFn = _.template(pageTemplate)
  let templateHTML = pageTemplateFn()
  pageContainer.innerHTML += templateHTML
}


function createPost() {
  let pageContainer = $('#page-container')[0]
  let len = pageContainer.innerHTML.trim().length
  console.log(len);
  if (len === 0) {
    addPage()
    // return
  }  
  let title = $('#post-title')[0].value
  let body = $('#post-body')[0].value
  let author = $('#post-author')[0].value

  let postTemplate = $('#post-template')[0].innerHTML
  let postTemplateFn = _.template(postTemplate)
  let templateHTML = postTemplateFn({title:title, author:author, body:body})

  let postContainer = $('#post-container')[0]
  postContainer.innerHTML += templateHTML
}

function postComment() {
  debugger
}