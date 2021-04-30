import React, { Component } from "react";
import Oblik from "./Oblik";

export default class Dialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oblici: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    let postoji = false;
    //provjera dali u trenutnom stanju postoji ono ubačeno kroz propse
    state.oblici.forEach(({ duljina, visina, boja }) => {
      if (
        duljina === props.duljina &&
        visina === props.visina &&
        boja === props.boja
      ) {
        postoji = true;
      }
    });

    if (postoji) {
      return state;
    } else {
      return {
        oblici: [
          ...state.oblici,
          { duljina: props.duljina, visina: props.visina, boja: props.boja },
        ],
      };
    }
  }

  componentDidMount() {
    console.log("Završilo prvo iscrtavanje komponente!");
  }

  componentDidUpdate() {
    console.log("Komonenta se ponovno iscrtala (update-ala)!");
  }

  shouldComponentUpdate() {
    if (this.state.oblici.length > 5 && this.state.oblici.length < 10) {
      return false;
    } else {
      return true;
    }
  }

  unesiOblik = () => {
    let uneseno = document.getElementById("unos").value;
    let polje = uneseno.split(",");
    console.log(`Duljina: ${polje[0]}; Visina: ${polje[1]}; Boja: ${polje[2]}`);
    console.log(this.state.oblici);
    this.setState({
      oblici: [
        ...this.state.oblici,
        { duljina: polje[0], visina: polje[1], boja: polje[2] },
      ],
    });
  };

  render() {
    console.log(this.state.oblici);
    return (
      <div className='col-md-6'>
        <div className='row' style={{ justifyContent: "space-between" }}>
          <label htmlFor='unos'>Opiši oblik (visina,sirina,boja):</label>
          <input name='unos' id='unos' type='text'></input>
          <button type='button' onClick={this.unesiOblik}>
            Stvori oblik
          </button>
        </div>
        <div>
          <h4>Stvoreni oblici:</h4>
          <div>
            {this.state.oblici.map((oblik, index) => {
              return <Oblik key={index} {...oblik} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
