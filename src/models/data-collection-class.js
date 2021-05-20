'use strict';

class DataMngr {

  constructor(model){
    this.model = model;
  }
  
  read(id){
    if(id){
      return this.model.find({ _id:id});
    }
    else{
      return this.model.find({});
    }
  }
  
  create(object){
    const doc = new this.model(object);
    return doc.save();
  }
  
  delete(id){
    return this.model.findByIdAndDelete(id);
  }
  
  update(id, object) {
    return this.model.findByIdAndUpdate(id,object,{new:true});
  }
}
  
module.exports = DataMngr;