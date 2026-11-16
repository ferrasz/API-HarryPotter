const container = document.getElementById("container")

fetch("https://potterapi-fedeperin.vercel.app/pt/characters")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        data.forEach(characters =>{
            const card = document.createElement("div")
            card.className = "box"
            card.innerHTML = `
                <img src="${characters.image}"/>
                <p>Nome: ${characters.fullName}</p>
                <p>Casa: ${characters.hogwartsHouse}</p>
                <p>Nascimento: ${characters.birthdate}</p>
                <p>Filhos: ${characters.children}</p>
                <p>Ator/Atriz: ${characters.interpretedBy}</p>
            `
            container.appendChild(card)
        })
    })