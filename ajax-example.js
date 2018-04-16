// GET

const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
};
xhr.open('GET', url);
xhr.send();


// POST

const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';
const data = JSON.stringify({
  id: '200'
});
xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
};
xhr.open('POST', url);
xhr.send(data);
