const express = require('express');
const ruta = express();
//importamos nuestra base de datos simulada
const rifles = require('./Rifles.json');
ruta.get('/allrifles', (req,res)=>{
    if (!rifles) {
        res.status(500).send('Hubo un error'); 
    }else{
        res.json(rifles);
    }
});
// const {Nombre, Calibre, Operacion, Peso, SistemaAlimentacion, AlcanceMaximo, Tipo}=req.body;
ruta.post('/newrifle', (req,res)=>{
    const DatosaCrear=req.body;
    if (DatosaCrear) {
        const id = rifles.length + 1;
        const Newrifle = {id,...req.body};
        rifles.push(Newrifle);
        res.send('¡Rifle de francotirador creado con exito!');
        console.log(rifles);
    } else {
        res.status(400).send('Hubo un error'); 
    }
});

ruta.put('/upgraderifle/:id', (req,res)=>{
    const {id}=req.params;
    const datosNuevos = req.body;
    const actualizar = rifles.find(a=>a.id === parseInt(id));
    if (actualizar) {
        Object.assign(actualizar,datosNuevos);
        res.send('Rifle actualizado');
        console.log(actualizar);
    } else {
        res.status(404).send('Hubo un error'); 
    }
})

ruta.delete('/deleterifle/:id', (req,res)=>{
    const {id}=req.params;
    const indiceEliminar = rifles.findIndex(a=>a.id === parseInt(id));
    if (indiceEliminar >= 0) {
        rifles.splice(indiceEliminar,1);
        res.send('rifle de francotirador eliminado con exito')
        console.log(indiceEliminar);
    } else {
        res.status(404).send('Hubo un error');         
    }
});

module.exports=ruta;