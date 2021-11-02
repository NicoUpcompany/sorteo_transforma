/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { notification } from "antd";
import { CometChat } from "@cometchat-pro/chat";
import jwtDecode from "jwt-decode";
import TextField from "@material-ui/core/TextField";
import { isSafari, isMobileSafari } from "react-device-detect";

import { signInApi } from "../../../api/user";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";
import { emailValidation } from "../../../utils/formValidation";
import { getAccreditationApi } from "../../../api/Admin/accreditation";
import { getNetworkingApi } from "../../../api/Admin/networking";

import "./LoginForm.scss";

let COMETCHAT_CONSTANTS = {
	APP_ID: "1909704da9d8b645",
	REGION: "us",
	AUTH_KEY: "5da9a6dacdbc477ab84558c7fe0ac37363c4066c",
};

const LoginForm = (props) => {
	const [inputs, setInputs] = useState({
		email: "",
	});
	const [formValid, setFormValid] = useState({
		email: false,
	});
	const [data, setData] = useState({
		email: true,
		fullName: false,
		name: false,
		lastname: false,
		rut: false,
		enterprise: false,
		position: false,
		phone: false,
		country: false,
		adress: false,
		other: false,
		otherText: "",
	});
	const { setLoading, setSaveData } = props;

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		setLoading(true);
		const resp = await getAccreditationApi();
		if (!resp.ok) {
			setLoading(false);
		} else {
			const accreditation = resp.acreditacion;
			setData({
				email: accreditation.email,
				fullName: accreditation.fullName,
				name: accreditation.name,
				lastname: accreditation.lastname,
				rut: accreditation.rut,
				enterprise: accreditation.enterprise,
				position: accreditation.position,
				phone: accreditation.phone,
				country: accreditation.country,
				adress: accreditation.adress,
				other: accreditation.other,
				otherText: accreditation.otherText,
			});
		}
	};

	const changeForm = (e) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value,
		});
	};

	const inputValidation = async (e) => {
		const { type, name } = e.target;

		if (type === "email") {
			setFormValid({
				...formValid,
				[name]: emailValidation(e.target),
			});
		}
	};

	const signIn = async () => {

		setLoading(true);
		const result = await signInApi(inputs);
		if (!result.ok) {
			notification["error"]({
				message: result.message,
			});
			setLoading(false);
		} else {
			const { accessToken, refreshToken } = result;
			localStorage.setItem(ACCESS_TOKEN, accessToken);
			localStorage.setItem(REFRESH_TOKEN, refreshToken);
			const decodedToken = jwtDecode(accessToken);
			const user = new CometChat.User(decodedToken.id);
			const UID = decodedToken.id;
			const apiKey = COMETCHAT_CONSTANTS.AUTH_KEY;
			if (decodedToken.email.length > 0) {
				user.setName(`${decodedToken.name} ${decodedToken.lastname} | ${decodedToken.enterprise}`);
			}
			localStorage.setItem("userID", decodedToken.id);
			if (!isSafari && !isMobileSafari) {
				CometChat.createUser(user, COMETCHAT_CONSTANTS.AUTH_KEY).then(
					(user) => {
						CometChat.login(UID, apiKey).then(
							(User) => {
								setSaveData(2);
							},
							(error) => {
								setLoading(false);
								notification["error"]({
									message: "Ha ocurrido un error",
								});
							}
						);
					},
					(error) => {
						console.log(error);
						if (error.details.uid[0] === "The uid has already been taken.") {
							CometChat.updateUser(user, COMETCHAT_CONSTANTS.AUTH_KEY).then(
								(user) => {
									CometChat.login(UID, apiKey).then(
										(User) => {
											setSaveData(2);
										},
										(error) => {
											setLoading(false);
											notification["error"]({
												message: "Ha ocurrido un error",
											});
										}
									);
								},
								(error) => {
									CometChat.login(UID, apiKey).then(
										(User) => {
											setSaveData(2);
										},
										(error) => {
											setLoading(false);
											notification["error"]({
												message: "Ha ocurrido un error",
											});
										}
									);
								}
							);
						} else {
							setLoading(false);
							notification["error"]({
								message: "Ocurrió un error",
							});
						}
					}
				);
			} else {
				setSaveData(2);
			}
		}
	};

	const signInFunction = (user, UID, apiKey) => {
		if (!isSafari && !isMobileSafari) {
			CometChat.createUser(user, COMETCHAT_CONSTANTS.AUTH_KEY).then(
				(user) => {
					CometChat.login(UID, apiKey).then(
						(User) => {
							setSaveData(2);
						},
						(error) => {
							setLoading(false);
							notification["error"]({
								message: "Ha ocurrido un error",
							});
						}
					);
				},
				(error) => {
					try {
						console.log(error);
						if (
							error.details.uid[0] ===
							"The uid has already been taken."
						) {
							CometChat.updateUser(
								user,
								COMETCHAT_CONSTANTS.AUTH_KEY
							).then(
								(user) => {
									CometChat.login(UID, apiKey).then(
										(User) => {
											setSaveData(2);
										},
										(error) => {
											setLoading(false);
											notification["error"]({
												message: "Ha ocurrido un error",
											});
										}
									);
								},
								(error) => {
									CometChat.login(UID, apiKey).then(
										(User) => {
											setSaveData(2);
										},
										(error) => {
											setLoading(false);
											notification["error"]({
												message: "Ha ocurrido un error",
											});
										}
									);
								}
							);
						} else {
							setLoading(false);
							notification["error"]({
								message: "Ocurrió un error",
							});
						}
					} catch (exception) {
						setLoading(false);
						notification["error"]({
							message: "Ocurrió un error",
						});
					}
				}
			);
		} else {
			setSaveData(2);
		}
	};

	return (
		<form
			onChange={changeForm}
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				signIn();
			}}
		>
			<div className="campo">
				<TextField
					label="Correo"
					type="email"
					variant="outlined"
					id="email"
					name="email"
					value={inputs.email}
					onChange={inputValidation}
				/>
			</div>
			<div className="campobutton">
				<button
					className="btn"
					style={{ border: "transparent", cursor: "pointer" }}
				>
					Ingresar
				</button>
			</div>
			<a onClick={() => setSaveData(1)} className="enlace">
				Aún no estoy registrado
			</a>
		</form>
	);
};

export default LoginForm;