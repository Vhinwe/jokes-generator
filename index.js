let setup = document.getElementById("setup");
let punchlinebtn = document.getElementById("punchlinebtn");
let punchline = document.getElementsByClassName("punchline")[0];
let jokeimg = document.getElementById("joke-img");
let resetButton =document.getElementById("reset");
let joke = {};

const tellAJoke = () => {
   
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(
        data => (
            (setup.innerHTML = data.setup), 
            (punchlinebtn.style.display = "inline"), 
            (joke = data)
     )
    )    
    .catch(err => console.log(err));
}; 

const tellPunchline = () => {
    punchline.innerHTML = joke.punchline;
    jokeimg.src = 
       "https://media1.giphy.com/media/TfvXjAbkb4XjL109aa/giphy.gif?cid=6c09b95281f467ee25b29d4701d37a0c7e4e6d188349bc6c&rid=giphy.gif&ct=s"
 
};

const resetBtn = () => {
    setup.innerHTML = "";
    punchlinebtn.style.display = "none";
    punchline.innerHTML = "";
    jokeimg.src = 
    "https://thumbs.gfycat.com/BestGoodnaturedBlesbok-size_restricted.gif" 
    joke = {};
    

};