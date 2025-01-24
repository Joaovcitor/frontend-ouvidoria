/* eslint-disable react/react-in-jsx-scope */
import { Div, Organizador } from "./styled";

export default function About() {
  return (
    <Organizador>
      <Div className="card">
        <div className="head">O que nosso sistema é?</div>
        <h2 className="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ipsum
          laboriosam cum aspernatur asperiores harum qui maiores beatae
          architecto quisquam, eligendi libero illum impedit eos quasi nobis
          consectetur doloremque autem.
        </h2>
      </Div>
      <Div className="card">
        <div className="head">Como faço para participar?</div>
        <h2 className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          repellat beatae vitae soluta cupiditate. Eos, cumque explicabo dolore
          voluptates impedit expedita nam esse rerum minus atque hic sit modi
          eius!
        </h2>
      </Div>
      <Div className="card">
        <div className="head">Nossa missão com o sistema</div>
        <h2 className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          repellat beatae vitae soluta cupiditate. Eos, cumque explicabo dolore
          voluptates impedit expedita nam esse rerum minus atque hic sit modi
          eius!
        </h2>
      </Div>
    </Organizador>
  );
}
