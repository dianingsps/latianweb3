import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      color : 'Merah',
      img: 'Merah.jpg',
    };
  }

  //Untuk memperbarui state sesuai dengan menu yang dipilih
  clicked(menu){
    this.setState({
      color: menu.color,
      img: menu.img,
      name: menu.name,
    });
  }
//menusaya(){
//  var gambar;
 //   if (this.state.active.toLowerCase() === 'Merah'){
   // gambar = "Merah";
   // }
    //else if(this.state.active.toLowerCase() === 'Kuning'){
    //  gambar = "Kuning";
  //  }
  //  else if(this.state.active.toLowerCase() === 'Biru'){
  //    gambar = "Biru";
  //  }
   // else if(this.state.active.toLowerCase() === 'Hijau'){
    //  gambar = "Hijau";
    //}
 // return <img src={gambar+".jpg"} width="200"></img>
//}

  render() {
    return (
      <div id="app">
        {/*
          map akan loop sebanyak menu yang didefinisikan
        */}
        {/*
          kemudian mengembalikan elemen <a/>
        */}
          <nav className="nav">
            {
              this.props.items.map(
                (menu, index)=>{
                  var style = 'menu';

                  if(this.state.color === menu.color){
                    style = `${style} is-active`;
                  }

                  return (
                    <a className={style+" "+menu.color}
                      onClick={
                        this.clicked.bind(this,menu) 
                      }
                      key={
                        index
                      }
                    >
                    {menu.name}
                    </a>
                  );
                }
              )
            }
        </nav>

         <div className="info">
            ini adalah <span className={"selected "+this.state.color}>
            {this.state.name}</span><br/><br/>
            <img src={this.state.img} width="200"></img>
           {/*{this.menusaya()}*/} 
        </div>


          </div> 
    );
  }
}

export default App;