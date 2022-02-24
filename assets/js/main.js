const url = "https://api.adviceslip.com/advice";
const adviceElement = document.querySelector(".advice__quote__dynamic");
const idElement = document.querySelector(".advice__heading__id");
const diceButton = document.querySelector(".advice__dice__container");

const endpoint = url => {
    let randomInteger = Math.ceil(Math.random()*200);
    return `${url}/${randomInteger}`
}

const getAdvice = async () => {
    try {
        let response = await fetch(endpoint(url));
        if(response.ok)
        {
            let jsonResponse = await response.json();
            renderAdvice(jsonResponse.slip.advice, jsonResponse.slip.id);
            console.log(jsonResponse);
        }
    }
    catch(error) {
        console.log(error);
    }
}

const renderAdvice = (advice, id) => {
    adviceElement.innerHTML = advice;
    idElement.innerHTML = id;
}

window.onload = getAdvice;
diceButton.onclick = getAdvice;