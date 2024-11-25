import express from "express"

const posts = [
    {
      id: 1,
      descricao: "Uma foto teste",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 2,
      descricao: "Gato brincando com um novelo de lã",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 3,
      descricao: "Paisagem montanhosa ao pôr do sol",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 4,
      descricao: "Cachorro correndo na praia",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 5,
      descricao: "Comida caseira deliciosa",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 6,
      descricao: "Pintura abstrata colorida",
      imagem: "https://placecats.com/millie/300/150"
    }
  ];
  

const app = express()
app.use(express.json())

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});