const express = require('express');
const bodyParser = require('body-parser');
const superagent = require('superagent');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
});

app.post('/search', async function (req, res) {
  climaResponse = await superagent
    .post('https://api.openweathermap.org/data/2.5/weather?q=' + req.body.cidade + '&appid=76bb83bd2478a0b030682c57b4cefda2&units=metric&lang=pt_br')

  if (climaResponse.body.weather.main == 'Rain') {
  } else {
    if (climaResponse.body.main.temp < 5) {
      pokemon_tipo = "ice"
    } else {
        if (climaResponse.body.main.temp >= 5 && climaResponse.body.main.temp < 10) {
          pokemon_tipo = "water"
        } else {
        if (climaResponse.body.main.temp >= 10 && climaResponse.body.main.temp < 15) {
          pokemon_tipo = "grass"
        } else {
          if (climaResponse.body.main.temp >= 15 && climaResponse.body.main.temp < 21) {
            pokemon_tipo = "ground"
          } else {
            if (climaResponse.body.main.temp >= 21 && climaResponse.body.main.temp < 27) {
              pokemon_tipo = "bug"
            } else {
              if (climaResponse.body.main.temp >= 27 && climaResponse.body.main.temp < 33) {
                pokemon_tipo = "rock"
              } else {
                if (climaResponse.body.main.temp >= 33) {
                  pokemon_tipo = "fire"
                } else {
                  pokemon_tipo = "normal"
                }
              }
            }
          }
        }
      }
    }
  }

  pokemonsRes = await superagent.get('https://pokeapi.co/api/v2/type/' + pokemon_tipo);

  res.redirect('/?cidade=' + req.body.cidade + '&pokemon=' + pokemonsRes.body.pokemon[3].pokemon.name + '&temperatura=' + climaResponse.body.main.temp + '&chuva=' + climaResponse.body.weather[0].description);
});

app.listen(5000, function () {
  console.log('Listening on port 5000!');
});
