import React from 'react'

const CardOne = () => {
    return (
        <div style={{marginTop:'7rem'}}>
            <h1 class="h2">Bienvenida Daniela</h1>
            <p class="h2">¿Qué necesitas hacer hoy?</p>
            <div class="card-deck" style={{width:'90%' }}>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Crear Alerta Prioritaria</h5>
                        <p class="card-text">Notifica al instante las nuevas normativas anunciadas por las Seremis Regionales</p>              
                        <button className="btn btn-lg btnsing btn-block"></button>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Editar Repositorio </h5>
                    <p class="card-text">Edita, elimina y agrega nueva documentación al Repositorio de Normativas.</p>
                    <button className="btn btn-lg btnsing btn-block"></button>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Gestionar Usuarios</h5>
                    <p class="card-text">Invita a nuevos usuarios, revisa tu historial con ellos y el estado de las alertas que comparten.</p>
                    <div class="card-footer" style={{backgroundColor:'red'}}>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardOne
