import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/66693281?s=460&u=8415bdf378a50bfd7fa9c6ae84e1b5e4bd9ef851&v=4" alt="Karacadeus"/>
                <div>
                    <strong>Luiz</strong>
                    <span>SQL Server</span>
                </div>
            </header>

            <p>
                Dei update sem where
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$800.000.000,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;