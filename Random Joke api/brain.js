window.addEventListener("load", () => {
    const endpoint = `https://sv443.net/jokeapi/v2/joke/Programming`;
    const Joke_input = document.querySelector(".joke");
    const btn = document.querySelector(".btn");

    

    async function ApiCall() {
        const res = await fetch(endpoint);
        const data = await res.json();
        // console.log(data)
        if(data.type === "single") {
            Joke_input.innerHTML = data.joke;
        }
        else {
            Joke_input.innerHTML = `<span style="color: #ff0077;">Setup</span>: ${data.setup} <br> <span style="color: #ff0077;">Delivery</span>: ${data.delivery}`;
        }
    }

    btn.addEventListener('click',() => {
        ApiCall();
    })
})
