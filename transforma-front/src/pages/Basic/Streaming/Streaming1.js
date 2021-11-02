import React, { useEffect, useState } from 'react';
import {Button} from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';
import {
    useHistory
} from 'react-router-dom';

// window.location.replace('/parte-1');

export const Streaming1 = () => {

    const history= useHistory();

    const volver = () =>{
        history.push("/streaming");
    }
    return (
        <div className='fondo' >
            <div className="contenedorStreaming">
                <div className="col1">
                    {/* <div className="espacio"></div> */}
                    <div className="streaming">
                        <iframe
                            title="streaming"
                            width="560"
                            height="315"
                            className="transmission"
                            src="https://vimeo.com/event/1394683/embed/66f147604b"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                        <Button
                            type='primary'
                            style={{marginTop:'20px'}}
                            onClick={volver}
                        >
                            <ArrowLeftOutlined />
                            Volver Agenda
                        </Button>
                </div>
            </div>

        </div>
    )
}
