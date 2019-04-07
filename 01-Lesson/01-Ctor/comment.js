function Comment(userName, commentText) {
  this.userName = userName;
  this.commentText = commentText;

  this.displayComment = function () {
    console.log(this.userName);
    console.log(this.commentText);
  };
}

Comment.staticProperty = 'Static property'

Comment.defaultComment = function () {
  return new Comment('Default user name', 'Default comment text')
}

var comment = new Comment('Alex Trust', 'My first comment');

// document.getElementById('userName').value = comment.userName;
// document.getElementById('commentText').innerHTML = comment.commentText;
console.log(comment.userName);
console.log(comment.commentText);
comment.displayComment();

console.log(Comment.staticProperty);
Comment.staticProperty = 'Changed static property';
console.log(Comment.staticProperty);
Comment.defaultComment().displayComment();

