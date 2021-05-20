'use strict';

const {server} = require('../src/server.js');
const supergoose = require('@code-fellows/supergoose');
const request = supergoose(server);
const mongoose = require('mongoose');
require('dotenv').config();





describe( 'food api', () => {
  let id;
  // Test create method
  it( 'should create food using POST', async () => {
    // arrange
    let food = {
      name: 'rise',
      size:'l',
    };
      //act
    const res = await request.post( '/api/v1/food' ).send( food );
    //assert
    expect( res.status ).toEqual( 201 );
    expect( res.body.name ).toEqual( 'rise' );
    expect( res.body.size ).toEqual( 'l' );
    expect(res.body._id.length).toBeGreaterThan(0);
    id = res.body._id;
  } );
  // Test get method
  it( 'should return food using GET', async () => {
    const res = await request.get( '/api/v1/food' );
    expect( res.status ).toEqual( 200 );
    expect( Array.isArray( res.body ) ).toBeTruthy();
  } );
  // Test get method with id
  it( 'should return specific food data using GET', async () => {
    const res = await request.get( `/api/v1/food/${id}` );
    expect( res.body[0].name ).toEqual( 'rise' );
    expect( res.body[0].size ).toEqual( 'l' );
    expect( res.status ).toEqual( 200 );
  } );
  // Test update method
  it( 'should update specific food data using PUT', async () => {
    // arrange
    let food = {
      name: 'rise',
      size:'xl',
    };
    const res = await request.put( `/api/v1/food/${id}` ).send ( food );
    // expect( res.body.name ).toEqual( 'jacket' );
    expect( res.body.size ).toEqual( 'xl' );
    expect( res.status ).toEqual( 200 );
  } );
  // Test delete method
  it( 'should delete specific food data using PUT', async () => {
    const res = await request.delete( `/api/v1/food/${id}` );
    expect( res.status ).toEqual( 200 );
  } );
} );




describe( 'clothes api', () => {
  let id;
  // Test create method
  it( 'should create clothes using POST', async () => {
    // arrange
    let clothes = {
      key: 'training',
      type:'sport',
    };
      //act
    const res = await request.post( '/api/v1/clothes' ).send( clothes );
    //assert
    expect( res.status ).toEqual( 201 );
    expect( res.body.key ).toEqual( 'training' );
    expect( res.body.type ).toEqual( 'sport' );
    expect(res.body._id.length).toBeGreaterThan(0);
    id = res.body._id;
  } );
  // Test get method
  it( 'should return clothes using GET', async () => {
    const res = await request.get( '/api/v1/clothes' );
    expect( res.status ).toEqual( 200 );
    expect( Array.isArray( res.body ) ).toBeTruthy();
  } );
  // Test get method with id
  it( 'should return specific clothes data using GET', async () => {
    const res = await request.get( `/api/v1/clothes/${id}` );
    expect( res.body[0].key ).toEqual( 'training' );
    expect( res.body[0].type ).toEqual( 'sport' );
    expect( res.status ).toEqual( 200 );
  } );
  // Test update method
  it( 'should update specific clothes data using PUT', async () => {
    // arrange
    let clothes = {
      key: 'jacket',
      type:'formal',
    };
    const res = await request.put( `/api/v1/clothes/${id}` ).send ( clothes );
    expect( res.body.key ).toEqual( 'jacket' );
    expect( res.body.type ).toEqual( 'formal' );
    expect( res.status ).toEqual( 200 );
  } );
  // Test delete method
  it( 'should delete specific food data using PUT', async () => {
    const res = await request.delete( `/api/v1/clothes/${id}` );
    expect( res.status ).toEqual( 200 );
  } );
} );

  



