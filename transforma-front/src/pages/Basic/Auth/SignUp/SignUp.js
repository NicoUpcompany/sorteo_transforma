/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";

import RegisterForm from "../../../../components/Basic/RegisterForm/RegisterForm";
import { eventApi } from "../../../../api/events";
import { getSignUpApi, getSignUpImageApi } from "../../../../api/Admin/signUp";
import { getEventOptionsApi } from "../../../../api/Admin/eventOptions";
import { getAccessTokenApi } from "../../../../api/auth";
import Socket from "../../../../utils/socket";


//Transorma alimentos
import bannerTransforma from '../../../../assets/images/TransformaAlimentos/banner.jpg'

import "./SignUp.scss";
import Sponsors from "../../../../components/Basic/RegisterForm/Sponsors";

const SignUp = () => {
	const history = useHistory();

	const [loading, setLoading] = useState(false);
	const [saveData, setSaveData] = useState(0);
	const [image, setImage] = useState("");
	const [indexStatus, setIndexStatus] = useState(false);
	const [options, setOptions] = useState({
		title: "",
		description: "",
		image: "",
		buttonBackground: "default",
		buttonBackgroundHover: "default",
		titlesColors: "default",
		textsColors: "default",
	});

	useEffect(() => {
		getData();
		getIndex();
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

	useEffect(() => {
		let action = "pageView";
		let description = "";
		switch (saveData) {
			case 1:
				action = "Link";
				description = "Ya estoy registrado";
				break;
			case 2:
				action = "Boton";
				description = "Registrar";
				break;
			case 3:
				action = "Boton";
				description = "Descargar Agenda";
				break;
			default:
				break;
		}
		const data = {
			conectionType: window.conectionType,
			page: "/registro",
			stand: "",
			action,
			description,
			userId: localStorage.getItem("userID"),
		};
		eventApi(data);
		if (saveData === 1) {
			history.push("/");
		}
		if (saveData === 2) {
			history.push("/confirmacion");
		}
	}, [saveData]);

	const getData = async () => {
		const resp = await getSignUpApi();
		if (resp.ok) {
			setOptions({
				...options,
				title: resp.signUp.title,
				description: resp.signUp.description,
				buttonBackground: resp.signUp.buttonBackground,
				buttonBackgroundHover: resp.signUp.buttonBackgroundHover,
				titlesColors: resp.signUp.titlesColors,
				textsColors: resp.signUp.textsColors,
			});
			if (resp.signUp.image.length > 0) {
				const result = await getSignUpImageApi(resp.signUp.image);
				setImage(result);
			}
			var css = `
				.btn:hover {
					background-color: ${resp.signUp.buttonBackgroundHover} !important;
				}
				.ant-select-show-search .ant-select:not(.ant-select-customize-input)
					.ant-select-selector {
					border-bottom: 1px solid ${resp.signUp.buttonBackground} !important;
				}
				.MuiFilledInput-underline:hover:before {
					border-bottom: 1px solid ${resp.signUp.buttonBackground} !important;
				}
				.MuiFilledInput-underline:focus:before {
					border-bottom: 1px solid ${resp.signUp.buttonBackground} !important;
				}
				.MuiFilledInput-underline:before {
					border-bottom: 1px solid ${resp.signUp.buttonBackground} !important;
				}
				.MuiFormLabel-root.Mui-focused {
					color: ${resp.signUp.buttonBackgroundHover} !important;
				}
				.MuiFilledInput-underline:after {
					border-bottom: 1px solid ${resp.signUp.buttonBackgroundHover} !important;
				}
				.col4 a {
					color: ${resp.signUp.textsColors} !important;
				}
			`;
			var style = document.createElement("style");

			if (style.styleSheet) {
				style.styleSheet.cssText = css;
			} else {
				style.appendChild(document.createTextNode(css));
			}
			document.getElementsByTagName("head")[0].appendChild(style);
		}
	};

	const getIndex = async () => {
		const resp = await getEventOptionsApi();
		if (resp.ok) {
			if (
				window.location.pathname === "/" &&
				resp.optionsEvent.index === "signUp"
			) {
				setIndexStatus(true);
			} else {
				if (window.location.pathname === "/registro") {
					setIndexStatus(false);
				} else {
					history.push("/iniciarsesion");
				}
			}
		}
	};

	const antIcon = <LoadingOutlined spin />;

	return (
		<Spin
			spinning={loading}
			size="large"
			tip="Cargando..."
			indicator={antIcon}
		>
			<div className="sign-up">
				<img className="sign-up__banner" src={bannerTransforma} alt="Banner transforma alimentos" />

				<div className="col4 sign-up__form-wrapper">
					<div className="sign-up__form-wrapper__container">
						<RegisterForm
							setSaveData={setSaveData}
							setLoading={setLoading}
							options={options}
						/>
						{indexStatus ? null : (
							<a onClick={() => setSaveData(1)}>
								Ya estoy registrado
							</a>
						)}
					</div>
				</div>

				<div className="sign-up__sponsors">
					<h2>Nuestros colaboradores</h2>
					<Sponsors />
				</div>

				<footer className="sign-up__footer">
					<p>All rights reserved. Transforma Alimentos 2021</p>
				</footer>
			</div>

		</Spin>
	);
};

export default SignUp;
