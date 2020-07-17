// let continues = !0, timer = function() {
//     return setInterval(function() {
// let counter = document.getElementById("counter");
// let counterInt = parseInt(counter.innerText);
// counter.innerText = counterInt + 1
//     }
//     )
// }

let counter = document.getElementById("counter")

    function continues() {
        let val = parseInt(counter.innerText) + 1;
        counter.innerText = val;
    }

    function neg() {
        let val = parseInt(counter.innerText) - 1;
        counter.innerText = val;
    }

    const plus = document.getElementById("plus")
    const minus = document.getElementById("minus")

    plus.onclick = function() {
        continues()
    }

    minus.onclick = function() {
        neg()
    }

document.addEventListener("DOMContentLoaded", () => {
        //grab all the necessary DOM elements
      
        //form and relevant input fields
        const newCommentForm = document.getElementById("comment-form");
        const newCommentInput = document.getElementById("comment-input");
        const newCommentPriority = document.getElementById("comment-priority");
      
        //ul where new Comments will live on the DOM
        const newCommentUl = document.getElementById("list");
      
        //attach event listeners
        newCommentForm.addEventListener("submit", createNewComment);
      });
      
const createNewComment = event => {
    event.preventDefault();
        //stop form from trying to submit
    const newCommentInput = document.getElementById("comment-input");
    const newComment = document.createElement("li");
    newComment.innerText = newCommentInput.value;
      
    appendNewComment(newComment);
    event.target.reset();
};
      
const appendNewComment = comment => {
    document.getElementById("list").appendChild(comment);
};

// const submit = document.getElementById("submit")

//     submit.onclick = function() {
//         listComments = document.getElementById("list")
//         form = document.getElementById("comment-form")
//         input = document.getElementById("comment-input")

//         listComments.appendChild(input)
//     }

const heart = document.getElementById("heart")

    const likes = document.querySelector("ul");
    numberLiked = parseInt(counter.innerText)
    let num = 0;

    heart.onclick = function() {
        const list = document.createElement("li");
        // str = likes.getElementsByTagName("li")
        // for (let i = 0; i < str.length; i++) { 
        //     str[i]
        // } 
        num += 1
        if (numberLiked == counter.innerText) {
            likes.lastElementChild.innerHTML = `${numberLiked} has been liked ${num} times.`
        }
        else {
            numberLiked = parseInt(counter.innerText);
            num = 1
            let val = `${numberLiked} has been liked ${num} times.`
            list.textContent = val;
            likes.appendChild(list)
        }
        
    }

var isPaused = false
var interval = setInterval(continues, 1000);

const pause = document.getElementById("pause")

    pause.onclick = function() {
        if (isPaused === false) {
            heart.disabled = true;
            plus.disabled = true;
            minus.disabled = true;
            submit.disabled = true;
            pause.innerText = "resume";
            clearInterval(interval);
            return isPaused = true;
        }
        if (isPaused === true) {
            heart.disabled = false;
            plus.disabled = false;
            minus.disabled = false;
            submit.disabled = false;
            pause.innerText = "pause"
            interval = setInterval(continues, 1000);
            return isPaused = false;
        }
    }