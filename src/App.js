import React from 'react';
class App extends React.Component{
constructor(props)
{
    super(props);
    this.state = {
        nom:'',
        prenom:'',
        age:''
    }
    this.handleSubmit=this.handleSubmit.bind(this);
}
onChange= e=> {
    this.setState({ [e.target.name] :e.target.value});
};
handleSubmit(event)
{
    alert("Bonjour "+this.state.nom+" "+ this.state.prenom);
    event.preventDefault();
}
render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <h1>Profil de {this.state.nom+" "+this.state.prenom}</h1>
                Nom:<input type="text" value={this.state.nom} onChange={this.onChange} name="nom"></input>
                <br></br>Prenom:<input type="text" value={this.state.prenom} name="prenom" onChange={this.onChange}></input>
                <br></br>Age:<input type="text" value={this.state.age} name="age" onChange={this.onChange}></input>
                <br></br><button type="submit" >Afficher message</button>
            </form>
        </div>);
}



}
export default App