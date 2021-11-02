import React, { useState } from "react";

import Dia from "./Dia";
import bannerTransforma from '../../../assets/images/TransformaAlimentos/banner.jpg'


import "./Agenda.scss";

const Agenda = (props) => {
	const [dia, setDia] = useState(14);
	const { agendaTime, state, setSaveData } = props;

	const abrirCerrar = (raw, flecha) => {
		try {
			const doc = document.getElementById(raw);
			const doc2 = document.getElementById(flecha);
			if (doc.style.display === "none") {
				doc2.style.transform = "rotate(360deg)";
				doc2.style.transitionDuration = "1s";
				doc.style.display = "block";
				doc.style.transitionDuration = "2s";
			} else {
				doc2.style.transform = "rotate(180deg)";
				doc.style.display = "none";
				doc2.style.transitionDuration = "1s";
				doc.style.transitionDuration = "1s";
			}
		} catch (error) {
			console.log("error");
		}
	};

	return (
		<>
			<div className="fondo">
				<img src={bannerTransforma} alt="Banner transforma alimentos" style={{ width: '100%', marginBottom:'20px' }} />
				<div className="contenedorAgenda" id="agenda">
					<Dia setSaveData={setSaveData} abrirCerrar={abrirCerrar} state={state} />
				</div>
			</div>
		</>
	);
};

export default Agenda;