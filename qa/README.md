# Desafio Pokémon para Analistas de Teste

## Definições

- O desafio a seguir é o dia-a-dia que qualquer analista de teste irá enfrentar no time de produtos da ADTSys;
- Leia todo o conteúdo antes de iniciar e busque entender de fato o desafio proposto;
- O desafio consiste em duas partes:
  1. Entender as necessidades de uma história com critérios de aceite e escrever cenários de teste;
  2. Testar um sistema simples e abrir bugs;
- Não completar o desafio não será critério para desclassificação, iremos analisar como a proposta do desafio foi elaborada e não somente o resultado;
- Nos mande os resultados de seus testes da forma que você achar melhor, seja por e-mail, Google docs ou um sistema de sua preferência;
- Quaisquer dúvidas fique a vontade para nos perguntar pelo e-mail team@cloudhit.io.

## O Desafio

Eu, como aspirante a mestre pokemon, desejo ter um sistema composto de uma única página onde, baseado na temperatura e condições climáticas de uma cidade, seja mostrado um possível pokémon para o local.


### Critérios de aceite:

- Deve ser possível informar qualquer cidade suportada pela API [OpenWeatherMap](https://openweathermap.org/);
- De acordo com as condições climáticas desta cidade, deve-se exibir um Pokémon baseado em seu tipo (fogo, água, vento, elétrico, etc) seguindo as seguintes regras:
  - Quando a temperatura for menor (<) que 5ºC, deve-se retornar um pokémon de gelo (ice).
  - Quando a temperatura estiver entre (>=) 5ºC e (<) 10ºC, deve-se retornar um pokémon do tipo água (water).
  - Quando a temperatura estiver entre 12ºC e 15ºC, deve-se retornar um pokémon do tipo grama (grass).
  - Quando a temperatura estiver entre 15ºC e 21ºC, deve-se retornar um pokémon do tipo terra (ground).
  - Quando a temperatura estiver entre 23ºC e 27ºC, deve-se retornar um pokémon do tipo inseto (bug).
  - Quando a temperatura estiver entre 27ºC e 33ºC inclusive, deve-se retornar um pokémon do tipo pedra (rock).
  - Quando a temperatura for maior que 33ºC, deve-se retornar um pokémon do tipo fogo (fire).
  - Para qualquer outra temperatura, deve-se retornar um pokémon do tipo normal.
  - E, caso esteja chovendo, deve-se retornar um pokémon do tipo elétrico (electric), independente da temperatura.
- O pokémon mostrado deve ser aleatório e não deve aparecer duas vezes consecutivas;
- Após a consulta, deve-se exibir na tela:
  - Temperatura atual da cidade em graus Celcius;
  - Se está chovendo ou não;
  - Nome do Pokémon seguindo as regras acima;
  - Tipo do Pokémon seguindo as regras acima.
```

### Necessidades

- Escreva os cenários de testes que você achar pertinente. Tenha em mente que, após os desenvolvedores (fictícios) finalizarem o desenvolvimento dessa história, eles seguirão seus cenários de teste para validar a qualidade do desenvolvimento e só após isso você executaria os testes;
- Teste a aplicação e abra os bugs encontrados seguindo os critérios de aceite;
- Priorize os bugs entre prioridades alta, média ou baixa, de acordo com seu julgamento;

### Acessando a aplicação

Há duas formas para acessar a aplicação, a primeira é pelo endereço https://weather-pokemon-test.herokuapp.com/ e a segunda é subindo o aplicação localmente.

Para subir a aplicação localmente, é necessário ter o docker instalado em uma máquina linux. Você pode instalar o Docker seguindo o guia [Get Docker CE for Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/). Após isso, execute os seguintes comandos:

```
$ docker pull adtsysorquestrador/weather-pokemon-test-node
$ docker run -ti -v $(pwd):/root -p 5000:5000 adtsysorquestrador/weather-pokemon-test-node
```

Em seguida, basta acessar o endereço http://localhost:5000.

### Importante

Os candidatos que fizerem o teste em um servidor local receberão um ponto extra. Ao acessar localmente você verá uma palavra-chave após uma busca de cidade. Nos envie essa palavra chave junto com o restante do teste. Lembrando que isso é completamente opcional.

## Dicas

- Lembre-se que os desenvolvedores irão ter que resolver os bugs abertos. Seja o mais claro que puder nas descrições.
- Utilize [Interactive weather maps](https://openweathermap.org/weathermap) para visualizar com cidades e suas respectivas temperaturas
