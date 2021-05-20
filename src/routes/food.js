'use strict';
const express = require('express');
const DataMngr = require('../models/data-collection-class.js');
const FoodModel = require('../models/food.js');
const food = new DataMngr(FoodModel);
const router = express.Router();

router.get('/',getAllFood);
router.get('/:id',getSpecficFood);
router.post('/',addFood);
router.put('/:id',updateFood);
router.delete('/:id',deleteFood);

async function getAllFood(req,res,next){
  try {
    const resObj = await food.read();
    res.status(200).json(resObj);
  } catch (error) {
    next(error);
  }
 
}

async function getSpecficFood(req,res,next){
  try {
    const resObj = await food.read(req.params.id);
    res.status(200).json(resObj);
  } catch (error) {
    next(error);
  }
  
}

async function addFood(req,res,next){
  try {
    const foodObj = req.body;
    const resObj = await food.create(foodObj);
    res.status(201).json(resObj);
  } catch (error) {
    next(error);
  }
  
}

async function updateFood(req,res,next){
  try {
    const foodObj = await req.body;
    const resObj = await food.update(req.params.id,foodObj);
    res.status(200).json(resObj);
  } catch (error) {
    next(error);
  }
  
}

async function deleteFood(req,res,next){
  try {
    const resObj = await food.delete(req.params.id);
    res.status(200).json(resObj);
  } catch (error) {
    next(error);
  }
 
}

module.exports = router;