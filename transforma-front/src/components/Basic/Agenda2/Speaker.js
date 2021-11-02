import React from 'react'
 
export const Speaker = ({nombre, cargo, empresa, moderador,speaker, rol}) => {
    return (
        <div className="mita1">
            <div className="icon speaker">
                {/* {speaker 
                    ?<img
                        className="icon"
                        src={speaker}
                    />
                    :<img
                    className="icon"
                    src=""
                /> */}
            </div>
            <div className="nombrecolaborador">
                <span>{rol && rol }</span>
                <br />
                <span>
                    <strong>{nombre}</strong>
                </span>
                <br />
                {
                    cargo ?
                    <div>
                        <span className="ultimo">{cargo}</span>
                        <br />
                        <span className="ultimo">
                            {" "}
                            <strong>{empresa}</strong>{" "}
                        </span>
                    </div>:null
                }
            </div>
    </div>
    )
}