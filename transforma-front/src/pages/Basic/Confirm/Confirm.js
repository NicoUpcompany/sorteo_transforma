/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Col, Row, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import AppleIcon from "@material-ui/icons/Apple";
import EventIcon from "@material-ui/icons/Event";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import moment from "moment";
import momentTimezone from "moment-timezone";
import "moment/locale/es";

import { eventApi } from "../../../api/events";
import { getAccessTokenApi } from "../../../api/auth";
import { getChronometerApi } from "../../../api/Admin/chronometer";
import { getEventOptionsApi } from "../../../api/Admin/eventOptions";
import { getConfirmApi, getConfirmImageApi } from "../../../api/Admin/confirm";
import Socket from "../../../utils/socket";
import Logo from '../../../assets/img/logo-cognitiva.svg'

import "./Confirm.scss";

const Confirmacion = () => {
	const history = useHistory();

	const [saveData, setSaveData] = useState(0);
	const [title, setTitle] = useState("");
	const [fullDate, setFullDate] = useState("");
	const [fullEndDate, setFullEndDate] = useState("");
	const [date, setDate] = useState("");
	const [hour, setHour] = useState("");
	const [url, setUrl] = useState("");
	const [logo, setLogo] = useState("");
	const [indexStatus, setIndexStatus] = useState(false);
	const [loading, setLoading] = useState(false);
	const [options, setOptions] = useState({
		text: "",
		logo: "",
		background: "#0000a2",
		buttonBackground: "#0000a2",
		buttonBackgroundHover: "#0000a2",
		titlesColors: "default",
		textsColors: "default",
		icons: "default",
	});

	useEffect(() => {
		const token = getAccessTokenApi();
		if (token !== null) {
			const decodedToken = jwtDecode(token);
			if (decodedToken) {
				const user = {
					id: decodedToken.id,
					route: window.location.pathname,
				};
				Socket.emit("UPDATE_ROUTE", user);
			}
		}
	}, []);

 

 
 

	const antIcon = <LoadingOutlined spin />;

	return (
		<Spin
			spinning={loading}
			size="large"
			tip="Cargando..."
			indicator={antIcon}
		>
			<div className="fondo-confirm">
				<div className="halfbg">
					<div className="contenedorConfirmacion">
						<div className="row">
							{/* <img src={Logo} alt="logo" className="img" /> */}
							<div className="fondo2">
								<h2 style={{ color: options.titlesColors }} className="title">
									{options.text}
								</h2>
								<div className="card">
									<h1>Gracias por participar! </h1>
								</div>
							</div>
							{/* <div className="card2">
								<Row gutter={[20, 24]}>
									<Col span={24} md={6}>
										<span style={{ color: options.textsColors }}>
											Link de ingreso:
										</span>
									</Col>
									<Col span={24} md={indexStatus ? 11 : 17}>
										<input
											type="text"
											placeholder="Link de ingreso"
											defaultValue={url}
										/>
									</Col>
									{indexStatus ? (
										<Col span={24} md={7} className="boton">
											<button
												style={{
													backgroundColor:
														options.buttonBackground,
												}}
												onClick={abrirsesion}
											>
												Iniciar sesión
											</button>
										</Col>
									) : null}
								</Row>

							</div> */}
						</div>
					</div>
				</div>
			</div>
		</Spin>
	);
};

export default Confirmacion;

function formatDate(dateString) {
	return dateString.replace(
		/(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})/,
		"$1-$2-$3T$4:$5:$6"
	);
}
