import { Col, Row } from 'antd'
import React from 'react'

// Imagenes
import ProChileLogo from '../../../assets/images/TransformaAlimentos/logos/logo-prochile.png';
import PFLogo from '../../../assets/images/TransformaAlimentos/logos/Capa 904.png';
import InnovaMarketLogo from '../../../assets/images/TransformaAlimentos/logos/Capa 905.png';
import CenemLogo from '../../../assets/images/TransformaAlimentos/logos/Capa 906.png';
import DobleImpactoLogo from '../../../assets/images/TransformaAlimentos/logos/Capa 907.png';
import ArpegioLogo from '../../../assets/images/TransformaAlimentos/logos/Capa 908.png';
import UCDavisLogo from '../../../assets/images/TransformaAlimentos/logos/Capa 909.png';
import StartUpLogo from '../../../assets/images/TransformaAlimentos/logos/Capa 910.png';
import InvestLogo from '../../../assets/images/TransformaAlimentos/logos/Capa 911.png';
import InnovaLogo from '../../../assets/images/TransformaAlimentos/logos/Capa 912.png';
import FIALogo from '../../../assets/images/TransformaAlimentos/logos/Capa 913.png';

import './Sponsors.scss'

import TextField from "@material-ui/core/TextField";


const Sponsors = () => {

    const logos = [
        ProChileLogo,
        PFLogo,
        InnovaMarketLogo,
        CenemLogo,
        DobleImpactoLogo,
        ArpegioLogo,
        UCDavisLogo,
        StartUpLogo,
        InvestLogo,
        InnovaLogo,
        FIALogo,
    ]

    return (
        <Row justify="center" align="middle" className="sponsors" gutter={24}>
            {
                logos.map((logo, i) => (
                    <Col span={12} md={6} xl={4} className="sponsors__col" key={i}>
                        <img src={logo} alt={`sponsor n°${i}`} className="sponsors__img"/>
                    </Col>

                ))
            }
            
        </Row>
    )
}

export default Sponsors
