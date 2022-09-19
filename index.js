const express = require('express')
const app = express()
const port = 8080


animals = [
  {animal: "DOG", name:"Pluto"}
  ,{animal:"CAT", name:"Hercules"}
  ,{animal:"BIRD", name:"Tweety"}
  ,{animal:"DOG", name:"Spiff"}
  ,{animal:"CAT", name:"Tom"}
  ,{animal:"BIRD", name:"Road Runner"}
]


app.get('/animal', (req, res) => {
  if(req.query.name){
    busca = req.query.name
    respArray = []
    for (let i = 0; i < animals.length; i++) {
      const a = animals[i];
      if(a.name.includes(busca)){
        respArray.push(a)        
      }
    }
    res.send(respArray);
  }
  if(req.query.animal){
        busc = req.query.animal
        respArray = []
        for (let i = 0; i < animals.length; i++) {
          const b = animals[i];
          if(b.animal.includes(busc)){
            respArray.push(b)        
          }
        }
        res.send(respArray);
    }
    /*if((req.query.animal) && (req.query.name))
    {
      busA = req.query.animal
      busN = req.query.name
      respArray = []
      for(let i = 0; i < animals.length; i++)
      {
        const c = animals[i];
        const e = animals[i];
        if(c.animal.includes(busA) && e.name.includes(busN))
        {
          respArray.push(c)
          respArray.push(e)
        }
      }
      res.send(respArray);
    }*/
    else
    {
      res.send(animals);
    }
  }
)


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));


app.post('/mirror', function (req, res, next) {
  console.log(req.body)
  res.send(req.body)
})

app.get('/querytojson', (req, res) => {
  console.log(req.query);
  res.send(req.query);
})

app.get('/paramtojson/name/:name/role/:role', (req, res) => {
  console.log(req.params);
  res.send(req.params);
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
