// i is counter for seconds and j is counter for likes
let i = -1; 
let j = 0;

let interval = setInterval(increment, 1000);

function increment(){
    // increase timer every 1 second
    i++; 
    document.querySelector("#counter").textContent = i;
    j = 0;
}

//increment();

document.getElementById("minus").addEventListener("click", function(){
    i--;
    document.getElementById("counter").textContent = i;
});

document.getElementById("plus").addEventListener("click", function(){
    i++
    document.getElementById("counter").textContent = i;
});

document.getElementById("heart").addEventListener("click", function(){
    j++;
    let li = document.createElement("li");
    let node = document.createTextNode(i + " has been liked " + j + " time(s).")
    let likes = document.querySelector('.likes')
    // let lastLike = document.querySelector('.likes').lastChild
    li.appendChild(node);
    likes.appendChild(li);
    // if(j>1){
    //  lastLike.replaceWith(li)
    // } else {
    //   likes.appendChild(li);
    // }
  });

  document.querySelector("#pause").addEventListener("click", function(){
      if(document.querySelector("#pause").innerText === "pause"){
          clearInterval(interval)
          document.querySelector("#pause").innerText="resume";
          document.querySelector("#minus").disabled = true;
          document.querySelector("#plus").disabled = true;
          document.querySelector("#heart").disabled = true;
          document.querySelector("#submit").disabled = true;
      } else {
          interval = setInterval(increment, 1000);
          document.querySelector("#pause").innerText="pause";
          document.querySelector("#minus").disabled = false;
          document.querySelector("#plus").disabled = false;
          document.querySelector("#heart").disabled = false;
          document.querySelector("#submit").disabled = false;
      }
  });

  document.querySelector("#submit").addEventListener("click", function(event){
      event.preventDefault();
      let input = document.querySelector("#comment-input").value;
      let comments = document.querySelector(".comments");
      let p = document.createElement("p");
      let node = document.createTextNode(input);
      p.appendChild(node);
      comments.appendChild(p);
      document.querySelector('input#comment-input').value = '';

  })