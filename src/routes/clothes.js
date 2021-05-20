'use strict';
const express = require('express');
const DataMngr = require('../models/data-collection-class.js');
const ClothesModel = require('../models/clothes.js');
const clothes = new DataMngr(ClothesModel);
const router = express.Router();

router.get('/',getAllClothes);
router.get('/:id',getSpecficClothes);
router.post('/',addClothes);
router.put('/:id',updateClothes);
router.delete('/:id',deleteClothes);

async function getAllClothes(req,res,next){
  try {
    const resObj = await clothes.read();
    res.status(200).json(resObj);
  } catch (error) {
    next(error);
  }
 
}

async function getSpecficClothes(req,res,next){
  try {
    const resObj = await clothes.read(req.params.id);
    res.status(200).json(resObj);
  } catch (error) {
    next(error);
  }
  
}

async function addClothes(req,res,next){
  try {
    const foodObj = req.body;
    const resObj = await clothes.create(foodObj);
    res.status(201).json(resObj);
  } catch (error) {
    next(error);
  }
  
}

async function updateClothes(req,res,next){
  try {
    const foodObj = req.body;
    const resObj = await clothes.update(req.params.id,foodObj);
    res.status(200).json(resObj);
  } catch (error) {
    next(error);
  }
  
}

async function deleteClothes(req,res,next){
  try {
    const resObj = await clothes.delete(req.params.id);
    res.status(200).json(resObj);
  } catch (error) {
    next(error);
  }
 
}

module.exports = router;