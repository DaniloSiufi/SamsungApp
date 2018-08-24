"use strict";
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    lastname: String,
    email: {
      type: String,
      unique: true
    },
    password: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);

const materiasSchema = mongoose.Schema(
  {
	nome_materia:{
      type: String,
	  required: true
	}
	
	nome_prof:{
	  type: String,
	  required: true
	}
	
	
	{
	semana: "Dias da semana",
	dias:
	[
	{name: "Segunda",
    type: Boolean},
	
   {name: "Terça",
    type: Boolean,}
	
   {name: "Quarta",
    type: Boolean,}
	
   {name: "Quinta",
    type: Boolean,}
	
   {name: "Sexta",
    type: Boolean,}
	
   {name: "Sabado",
    type: Boolean,}
	
   {name: "Domingo",
    type: Boolean,}
 
  ]

  },
  {timestamps: true}
 );

}
