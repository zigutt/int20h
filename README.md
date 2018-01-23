# int20h
Над проектом працювала команда __Leri Software__

У складі:

* *Petruk Dmitriy <mistake952@mail.ru>*
* *Zhuk Orest <orestbyzhuk@gmail.com>*

## Використання
Для початку роботи з застосунком
клонуйте репозиторій та інсталюйте наступні модулі для Node JS: express, ejs.

```
npm install express
npm install ejs
```

Після цього перейдіть у коріневу теку з застосунком та введіть команду 

```
node server
```
### Опис

Використання express як веб-сервера:
```javascript
app.listen(8080, function () {
  console.log('Website runnning on 8080 port!');
})
```

Використання шаблонного JS в HTML

```ejs
<tr>
  <td>Kraken</td>
  <td><%= Math.round(krakencurr[0]*100)/100 %></td>
  <td><%= Math.round(krakencurr[1]*100)/100 %></td>
  <td>฿0.001</td>
</tr>
```
