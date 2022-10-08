import logo from './logo.svg';
import { render } from '@testing-library/react';
import './App.css';
import React from "react";
import {useState, useEffect, setTimer} from 'react';

class App extends React.Component {

  state={
  name:'Amal REKIK MELLEF' ,
  bio:'Ingénieure en électroméca',
  img : './photo/photoamal.jpg',
  prof:'Ing',
  age:'33',
  appar: false,
  mail:"re.amal@yahoo.com",
  timer:0
  };
  componentDidMount(){
    this.conteur=setInterval(()=>{this.setState({timer:this.state.timer+1})},1000)
  }

render(){
  const voirProfil=()=>(this.state.timer=0);
const handleShowPhoto=()=>(this.state.appar?(this.setState({appar:false})):(this.setState({appar:true})));



  return (
    <div className="App">
      <h1>Amal REKIK MELLEF</h1>
<button onClick={(event) => { handleShowPhoto(); voirProfil();}}>{this.state.appar?("cacher"):("montrer")} profil</button><br/>
    {this.state.appar?(<div><h1>{this.state.name}</h1>
    <p>Je suis <b>{this.state.name}</b>, une <b>{this.state.bio}</b> à l'age de <b>{this.state.age} ans</b>, pour plus d'infos, cantacter moi par mon mail <b>{this.state.mail}</b>  </p>
    <img src={this.state.img} width="30%"/>
    </div>):(<div><h3>pour voir monprofil clickez sur "montrer profil"</h3><p>mon profil est visité pendant {this.state.timer} s</p></div>)}
    </div>
  );
}
}
export default App;
//hello {this.state.name}