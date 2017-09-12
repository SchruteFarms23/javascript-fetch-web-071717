const app = "I don't do much.";
console.log(app)

let bird = fetch('https://api.github.com/repos/jquery/jquery/commits')
  .then(res => res.json())
  .then(json => json);

  console.log(bird)
