// * eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


import { Link } from 'react-router-dom'

import { RowSpeaker } from "./RowSpeaker";

const Dia = ({ setSaveData, abrirCerrar, state }) => {
    return (
        <>
            {/* Modulo1  */}
            <div className="row4   border modulo">
                <div className="tiempo">
                    <p>Modulo 1 </p>
                </div>
                <div className="plenario">
                    <p>Apertura Encuentro</p>
                </div>

                <Link
                    className='btn2'
                    to='/parte-1'
                >REVIVE EL DÍA AQUÍ</Link>
            </div>
            <div className="row4 border grey" >
                <div className="tiempo">
                    <p>Tiempo</p>
                </div>

                <div className="plenario">
                    <p>Plenario</p>
                </div>
            </div>


            <RowSpeaker
                setSaveData={setSaveData}
                abrirCerrar={abrirCerrar}
                state={state}
                id={1}
                abre={true}
                grey="grey"
                inicio="09:30"
                fin="09:45"
                tematica="Saludo de Bienvenida"
                moderador="María Emilia Undurraga"
                speaker="Pablo Terrazas"
                speaker2="Miguel González"
                cargo1='Ministra de Agricultura'
                cargo2="Vicepresidente Ejecutivo de Corfo"
                cargo3="Vicepresidente consejo transforma alimentos. Pdte. Granotec"
            />
            <RowSpeaker
                setSaveData={setSaveData}
                abrirCerrar={abrirCerrar}
                state={state}
                id={2}
                grey=""
                inicio="09:45"
                fin="09:50"
                tematica="Compartiendo 5° Aniversario Transforma Alimentos"
            />
            <RowSpeaker
                setSaveData={setSaveData}
                abrirCerrar={abrirCerrar}
                state={state}
                id={3}
                grey=""
                inicio="09:50"
                fin="10:00"
                tematica="Compartiendo hitos relevantes de la etapa actual"
            />
            {/* Modulo1  */}

            {/* Modulo2  */}

            <div className="row4   border modulo">
                <div className="tiempo">
                    <p>Modulo 2  </p>
                </div>
                <div className="plenario">
                    <p>PANEL DE CONVERSACIÓN </p>
                </div>

                <Link
                    className='btn2'
                    to='/parte-2'
                >REVIVE EL DÍA AQUÍ</Link>
            </div>

            <RowSpeaker
                setSaveData={setSaveData}
                abrirCerrar={abrirCerrar}
                state={state}
                id={4}
                grey="grey"
                inicio="09:30"
                fin="09:45"
                abre={true}
                tematica="Innovación y colaboración en la transformación hacia sistemas alimentarios más sostenibles"
                moderador="Dr. Laurens Klerkx"
                cargo1="Profesor Titular Grupo conocimiento, tecnología e innovación, Universidad de Wageningen, Holanda"
                rol1="Charla Magistral"
                speaker="Luist Cantillano"
                cargo2="Gerente de innovación y desarrollo, TRESMONTES LUCCHETTI"
                rol2="Panelista"
                speaker2="Hernán Vigil"
                cargo3="Fundador empresa ARTISAN"
                rol3="Panelista"
                speaker4="Gerardo Wijant"
                cargo5="Subgerente DOBLE IMPACTO-BANCA ÉTICA"
                rol5="Panelista"
                speaker3="Graciela Urrutia"
                cargo4="Gerente transforma alimentos"
                rol4="Modera"
            />
            {/* Modulo2  */}
            {/* Modulo3  */}

            <div className="row4   border modulo">
                <div className="tiempo">
                    <p>Modulo 3 </p>
                </div>
                <div className="plenario">
                    <p>LANZAMIENTO CATÁLOGO INNOVACIÓN ALIMENTARIA DE CHILE </p>
                </div>

                <Link
                    className='btn2'
                    to='/parte-3'
                >REVIVE EL DÍA AQUÍ</Link>
            </div>

            <RowSpeaker
                setSaveData={setSaveData}
                abrirCerrar={abrirCerrar}
                state={state}
                id={5}
                grey="grey"
                inicio="11:30"
                fin="12:30"
                abre={true}
                tematica="Catálogo digital de las 50 innovaciones Chilenas destacadas en productos y servicios del año"
                moderador="Lorena Sepúlveda"
                cargo1="Directora nacional, ProChile"
                rol1="Presentación y saludos"
                speaker="Lu Ann Williams"
                cargo2="Co-Founder, Innova Market Insights"
            />
            <RowSpeaker
                setSaveData={setSaveData}
                abrirCerrar={abrirCerrar}
                state={state}
                id={6}
                grey="grey"
                inicio=""
                fin=""
                abre={true}
                tematica="Concurso Pitch TOP 10'"
                tematica2="10 empresas seleccionadas presentarán sus innovaciones frente a un panel de jurados expertos a través de un pitch de 3 minutos"
                moderador="Francisco Rossier"
                cargo1="Director de Innovación Transforma Alimentos"
                rol1="Conduce"
            />
            {/* TODO: agregar partes del concurso */}

            <RowSpeaker
                setSaveData={setSaveData}
                abrirCerrar={abrirCerrar}
                state={state}
                id={7}
                grey="grey"
                inicio="12:30"
                fin="12:45"
                abre={true}
                tematica="Palabras de cierre"
                moderador="Fernando Hentzschel"
                cargo1="Gerente capacidades tecnológicas CORFO"

            />

            {/* Modulo3  */}
        </>
    );
};

export default Dia;