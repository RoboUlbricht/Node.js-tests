# Node.js-tests
Node.js tutoriál. Tieto príklady si môžete stiahnuť do svojej verzie Node.js a otestovať.

```
git clone https://github.com/RoboUlbricht/Node.js-tests
```

## 00-hello-world
Vypísanie textu na konzolu. Po spustení programu sa na konzole objaví text `Hello World!`. Vypisovanie textu na konzolu sa používa pri programoch v príkazovom riadku. Pomocou výpisov sa dozviete, čo váš program urobil.

Inštalácia a spustenie.
```
node hello.js
```

## 01-hello-world-http
Najjednoduchší HTTP server. Využíva priamo možnosti Node.js. Do okna prehliadača vypíše text `Hello World!`. Port je 3000. Napríklad napíšte adresu http://127.0.0.1:3000/ do svojho prehliadača.

Inštalácia a spustenie.
```
node hello.js
```

## 02-hello-world-express
Vypísanie textu do okna prehliadača. Port je 3000. Napríklad napíšte adresu http://127.0.0.1:3000/ do svojho prehliadača.

Inštalácia a spustenie.
```
npm install
node index.js
```

## 03-express-static
Vypísanie textu do okna prehliadača. Port je 3000. Napríklad napíšte adresu http://127.0.0.1:3000/static/abc.txt do svojho prehliadača.

Inštalácia a spustenie.
```
npm install
node static.js
```

## 04-express-base
HTTP server, ktorý vracia odpoveď v podobe HTML stránok. Port je 3000. Napríklad napíšte adresu http://127.0.0.1:3000/ do svojho prehliadača.

Inštalácia a spustenie.
```
npm install
npm start
```

## 05-express-json
HTTP server, ktorý vracia odpoveď v podobe JSON. Port je 3000. Napríklad napíšte adresu http://127.0.0.1:3000/ do svojho prehliadača.

Inštalácia a spustenie.
```
npm install
npm start
```

## 06-readline
Interaktívna konzola, ktorá reaguje na pár príkazov. Príkazy musíte napísať do konzoly. Zoznam použiteľných príkazov.
- arduino
- zero
- bye

Inštalácia a spustenie.
```
npm install
node index.js
```
