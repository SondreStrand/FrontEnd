import React from 'react'
import './Footer.css';

function Footer() {
    const year = new Date().getFullYear();
    const hour = new Date().getHours()
    const minute = new Date().getMinutes();

  return (
    <footer>{`Oppgave i Avsluttende prosjekt Sondre A.U Strand Eirik H Martinussen ${year} ${hour} ${minute}`}</footer>
  )
};

export default Footer