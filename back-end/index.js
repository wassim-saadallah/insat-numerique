var users = [{name: "admin", pwd:"admin"},{name:"directeur-etudes",pwd:"password"}]
var filieres = ["Génie Logiciel","Informatique Indistruel et Automatique","Chimie indistruelle","Instrumentation et Maintenance Industrielle","Biologie Industrielle","Réseaux Informatiques et Télécommunications","Mathématiques-Physique-Informatique","Chimie et Biologie Appliquée"];
var fakeData = [];
for(var i = 0; i < 100; i++){
  fakeData.push({
    cin: Math.floor(Math.random()*100000000),
    nom: "Nom " + i,
    prenom: "Prenom " + i,
    filiere: filieres[Math.floor(Math.random()*filieres.length)]
  })
}

for(var i = 0; i < 100; i++){
  if((fakeData[i].filiere == filieres[filieres.length-1]) || (fakeData[i].filiere == filieres[filieres.length-2])) fakeData[i].annee = 1
  fakeData[i].annee = Math.floor(Math.random()*4)+1;
}

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var request = require('request');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  next();
});



express.static('insat-numerique');
app.use('/insat-numerique', express.static('insat-numerique'))

function findEtudiant(cin){
  for(var i = 0; i<fakeData.length; i++){
    if(fakeData[i].cin == cin) return i;
  }
  return -1;
}


app.get('', function (req, res) {
  res.send('Welcome to App!')
})

app.get('/etudiants',function(req,res){
  res.send(fakeData);
})

app.get('/etudiants/filiere/:id',function(req,res){
  var id = req.params.id;
  res.send(fakeData.filter(e => e.filiere == filieres[id]));
})

app.get('/etudiants/filiere/:id/year/:year',function(req,res){
  var id = req.params.id;
  var year = req.params.year;
  res.send(fakeData.filter(e => (e.filiere == filieres[id])&&(e.annee == year)));
})

app.get('/filieres',(req,res)=>{
  res.send(filieres);
})

app.put('/etudiants/:cin',function(req,res){
  var cin = req.params.cin
  var e = findEtudiant(cin);
  if(e>-1){
    console.log(req.body)
    fakeData[e].filiere = req.body.filiere;
    var a = fakeData.slice(0,fakeData.length-1);
    res.send(a.filter(s => s.filiere == req.body.filiere));
  } 
  else
    res.sendStatus(404)
})

app.delete('/etudiants/:cin',function(req,res){
  var cin = req.params.cin;
  console.log(cin);
  var e = findEtudiant(cin);
  var filiere = fakeData[e].filiere;
  console.log(e);
  if(e>-1){
    fakeData.splice(e,1);
    var a = fakeData.slice(0,fakeData.length-1);
    res.send(a.filter(s => s.filiere == filiere));
  } 
  else
    res.sendStatus(404);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})