import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/45568804?s=460&u=c872be3bd5438166e0015354e0161e4e6c54174a&v=4" alt="FotoPerfil" />
            <div>
                <strong>Leonardo Henrique</strong>
                <span>Java</span>
            </div>
        </header>
            <p>
               Destruidor de BBJur. 
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
    </article>
    )
}

export default TeacherItem;