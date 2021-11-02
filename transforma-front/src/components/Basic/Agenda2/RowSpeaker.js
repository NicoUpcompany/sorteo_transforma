import React from 'react'
import { Speaker } from './Speaker'
import flecha from "../../../assets/img/flecha.png";

export const RowSpeaker = ({id, 
    grey, 
    abre, 
    inicio, 
    fin, 
    tematica, 
    moderador, 
    speaker,
    cargo1, 
    cargo2, 
    cargo3, 
    cargo4 , 
    cargo5, 
    cargo6, 
    empresa , 
    abrirCerrar,  
    imgSpeaker1, 
    imgSpeaker2, 
    tematica2, 
    speaker2, 
    empresa2, 
    imgSpeaker3, 
    speaker3, 
    speaker4, 
    speaker5, 
    speaker6, 
    imgSpeaker4,
    imgSpeaker5,
    imgSpeaker6,
    imgSpeaker7, 
    rol1, 
    rol2, 
    rol3, 
    rol4 , 
    rol5, 
    rol6, 
    rol7 }) => {
    return (
        <div className={`row2 ${grey}`} id={`row${id}`}  style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							{inicio} <span>{inicio && "-"}</span> {fin} {fin && "hrs"} 
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
                            {
                                abre &&
							    <img src={flecha} alt="" id={`flecha${id}`} onClick={() => abrirCerrar(`imagen${id}` , `flecha${id}`)} />
                            }
						</p>
						<p className="texto1">
							<strong>{tematica}</strong>
						</p>
						<p className="texto1">
							{
								tematica2 &&
								<strong>{`"${tematica2}"`}</strong>
							}

						</p>
					</div>
				</div>
                {
                    abre &&
                    <div className="imagenes" id={`imagen${id}`}>
                        <div className="espacio"></div>
                        <div className="imagen">
                            <Speaker
                                nombre={moderador}
                                moderador={moderador}
                                cargo={cargo1}
                                empresa={empresa}
                                speaker={imgSpeaker1}
                                rol={rol1}
                            />
                            {
                                speaker &&
                                <Speaker
                                    nombre={speaker}
                                    cargo={cargo2}
                                    empresa={empresa}
                                    speaker={imgSpeaker2}
                                    rol={rol2}

                                />
                            }

                            {
                                speaker2 &&
                                <Speaker
                                    nombre={speaker2}
                                    cargo={cargo3}
                                    empresa={empresa2}
                                    speaker={imgSpeaker3}
                                    rol={rol3}

                                />
                            }

                            {
                                speaker3 &&
                                <Speaker
                                    nombre={speaker3}
                                    speaker={imgSpeaker4}
                                    rol={rol4}
                                    cargo={cargo4}
                                />
                            }

                            {
                                speaker4 &&
                                <Speaker
                                    nombre={speaker4}
                                    speaker={imgSpeaker5}
                                    rol={rol5}
                                    cargo={cargo5}
                                />
                            }

                            {
                                speaker5 &&
                                <Speaker
                                    nombre={speaker5}
                                    speaker={imgSpeaker6}
                                    rol={rol6}
                                    cargo={cargo6}
                                />
                            }

                            {
                                speaker6 &&
                                <Speaker
                                    nombre={speaker6}
                                    speaker={imgSpeaker7}
                                />
                            }
                            
                        </div>
                    </div>

                }
		</div>
    )
}