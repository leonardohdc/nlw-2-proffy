import React from 'react';

import PageHeader from '../../components/PageHeader';
import Teacheritem from '../../components/Teacheritem';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Dia da semana</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="subject"/>
                    </div>
                </form>
            </PageHeader>  

            <main>
                <Teacheritem />
                <Teacheritem />
                <Teacheritem />
                <Teacheritem />
            </main>  
        </div>
    )
}

export default TeacherList;