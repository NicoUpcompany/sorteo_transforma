/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { notification, Form, Button as ButtonAntd, Row, Col } from "antd";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from "@material-ui/core/TextField";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from "@material-ui/core/styles"

import { signUpApi } from "../../../api/user";
import { getAccreditationApi } from "../../../api/Admin/accreditation";
import {
	emailValidation,
	minLengthValidation,
	rutValidation,
} from "../../../utils/formValidation";

import { sectores, getCategoriesBySector, getSubCategoriesByCategory } from '../../../utils/sector_rubro_subrubro';

import "./RegisterForm.scss";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
	select: {
		'&:before': {
			borderColor: '#3d98aa',
		},
		'&:after': {
			borderColor: '#3d98aa',
		},
		'&:not(.Mui-disabled):hover::before': {
			borderColor: '#3d98aa',
		},
	},
	icon: {
		fill: '#3d98aa',
	},
	root: {
		color: '#3d98aa',
	},
})

const RegisterForm = (props) => {
	const classes = useStyles();

	const [inputs, setInputs] = useState({
		email: "",
		name: "",
		lastname: "",
		enterprise: "",
		position: "",
		sector: '',
		category: '',
		subCategory: ''
	});
	const [formValid, setFormValid] = useState({
		email: false,
		name: false,
		lastname: false,
		enterprise: false,
		position: false,
		sector: false,
		category: false,
		subCategory: false
	});
	const [even, setEven] = useState(false);
	const [lastOdd, setLastOdd] = useState("");
	const [stateForm, setStateForm] = useState(false);
	const [data, setData] = useState({
		email: true,
		email2: false,
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
		sector: true,
		category: true,
		subCategory: true
	});
	const [sectorCategorySubCategoryOptions, setSectorCategorySubCategoryOptions] = useState({
		sector: sectores,
		category: getCategoriesBySector(inputs.sector),
		subCategory: []
	})
	const { setLoading, setSaveData, options } = props;

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		setLoading(true);
		const resp = await getAccreditationApi();
		if (!resp.ok) {
			setStateForm(false);
			setLoading(false);
		} else {
			const accreditation = resp.acreditacion;
			setData({
				email: accreditation.email,
				name: accreditation.name,
				lastname: accreditation.lastname,
				enterprise: accreditation.enterprise,
				position: accreditation.position,
				sector: true,
				category: true,
				subCategory: true,
			});
			let countAux = 0;
			if (accreditation.email) {
				countAux = countAux + 1;
				setLastOdd("email");
			}

			if (accreditation.name) {
				countAux = countAux + 1;
				setLastOdd("name");
			}
			if (accreditation.lastname) {
				countAux = countAux + 1;
				setLastOdd("lastname");
			}

			if (accreditation.position) {
				countAux = countAux + 1;
				setLastOdd("position");
			}
			if (accreditation.enterprise) {
				countAux = countAux + 1;
				setLastOdd("enterprise");
			}
			if (accreditation.sector) {
				countAux = countAux + 1;
				setLastOdd("sector");
			}
			if (accreditation.category) {
				countAux = countAux + 1;
				setLastOdd("category");
			}
			if (accreditation.subCategory) {
				countAux = countAux + 1;
				setLastOdd("subCategory");
			}

			if (countAux % 2 === 0) {
				setEven(true);
			} else {
				setEven(false);
			}
			setStateForm(true);
			setLoading(false);
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
		if (type === "text") {
			if (name === "rut") {
				setFormValid({
					...formValid,
					[name]: rutValidation(e.target),
				});
			} else {
				setFormValid({
					...formValid,
					[name]: minLengthValidation(e.target, 2),
				});
			}
		}
	};

	const SignUp = async () => {
		setLoading(true);
		let statusFunction = true;
		let valFullName;
		let fullNameValid;
		let valName;
		let nameValid;
		let valLastName;
		let lastNameValid;
		let valRut;
		let rutValid;
		let valEnterprise;
		let enterpriseValid;
		let valPosition;
		let positionValid;
		let valPhone;
		let phoneValid;
		let valCountry;
		let countryValid;
		let valAdress;
		let adressValid;
		let valOtherText;
		let otherTextValid;
		let valSector;
		let valCategory;
		let valSubCategory;
		if (data.fullName) {
			valFullName = inputs.fullName;
			fullNameValid = formValid.fullName;
			if (!fullNameValid) {
				notification["error"]({
					message: "Ingrese un nombre completo válido",
				});
				setLoading(false);
				statusFunction = false;
			}
			if (!valFullName) {
				notification["error"]({
					message: "Nombre completo es un campo obligatorio",
				});
				setLoading(false);
				statusFunction = false;
			}
		}
		if (data.name) {
			valName = inputs.name;
			nameValid = formValid.name;
			if (!nameValid) {
				notification["error"]({
					message: "Ingrese un nombre válido",
				});
				setLoading(false);
				statusFunction = false;
			}
			if (!valName) {
				notification["error"]({
					message: "Nombre es un campo obligatorio",
				});
				setLoading(false);
				statusFunction = false;
			}
		}
		if (data.lastname) {
			valLastName = inputs.lastname;
			lastNameValid = formValid.lastname;
			if (!lastNameValid) {
				notification["error"]({
					message: "Ingrese un apellido válido",
				});
				setLoading(false);
				statusFunction = false;
			}
			if (!valLastName) {
				notification["error"]({
					message: "Apellido es un campo obligatorio",
				});
				setLoading(false);
				statusFunction = false;
			}
		}
		if (data.rut) {
			valRut = inputs.rut;
			rutValid = formValid.rut;
			if (!rutValid) {
				notification["error"]({
					message: "Ingrese un rut válido",
				});
				setLoading(false);
				statusFunction = false;
			}
			if (!valRut) {
				notification["error"]({
					message: "Rut es un campo obligatorio",
				});
				setLoading(false);
				statusFunction = false;
			}
		}
		if (data.enterprise) {
			valEnterprise = inputs.enterprise;
			enterpriseValid = formValid.enterprise;
			if (!enterpriseValid) {
				notification["error"]({
					message: "Ingrese una empresa válida",
				});
				setLoading(false);
				statusFunction = false;
			}
			if (!valEnterprise) {
				notification["error"]({
					message: "Empresa es un campo obligatorio",
				});
				setLoading(false);
				statusFunction = false;
			}
		}
		if (data.position) {
			valPosition = inputs.position;
			positionValid = formValid.position;
			if (!positionValid) {
				notification["error"]({
					message: "Ingrese un cargo válido",
				});
				setLoading(false);
				statusFunction = false;
			}
			if (!valPosition) {
				notification["error"]({
					message: "Cargo es un campo obligatorio",
				});
				setLoading(false);
				statusFunction = false;
			}
		}
		if (data.phone) {
			valPhone = inputs.phone;
			phoneValid = formValid.phone;
			if (!phoneValid) {
				notification["error"]({
					message: "Ingrese un teléfono válido",
				});
				setLoading(false);
				statusFunction = false;
			}
			if (!valPhone) {
				notification["error"]({
					message: "Teléfono es un campo obligatorio",
				});
				setLoading(false);
				statusFunction = false;
			}
		}
		if (data.country) {
			valCountry = inputs.country;
			countryValid = true;
			if (!countryValid) {
				notification["error"]({
					message: "Ingrese un país válido",
				});
				setLoading(false);
				statusFunction = false;
			}
			if (!valCountry) {
				notification["error"]({
					message: "País es un campo obligatorio",
				});
				setLoading(false);
				statusFunction = false;
			}
		}
		if (data.adress) {
			valAdress = inputs.adress;
			adressValid = formValid.adress;
			if (!adressValid) {
				notification["error"]({
					message: "Ingrese una dirección válida",
				});
				setLoading(false);
				statusFunction = false;
			}
			if (!valAdress) {
				notification["error"]({
					message: "Dirección es un campo obligatorio",
				});
				setLoading(false);
				statusFunction = false;
			}
		}
		if (data.other) {
			valOtherText = inputs.otherText;
			otherTextValid = formValid.otherText;
			if (!otherTextValid) {
				notification["error"]({
					message: `El campo ${data.otherText} no es válido`,
				});
				setLoading(false);
				statusFunction = false;
			}
			if (!valOtherText) {
				notification["error"]({
					message: `${data.otherText} es un campo obligatorio`,
				});
				setLoading(false);
				statusFunction = false;
			}
		}
		const valEmail = inputs.email;
		// const valEmail2 = inputs.email2;
		const emailValid = formValid.email;
		if (!emailValid) {
			notification["error"]({
				message: "Ingrese un correo válido",
			});
			setLoading(false);
			statusFunction = false;
		}
		if (!valEmail) {
			notification["error"]({
				message: "Correo es un campo obligatorio",
			});
			setLoading(false);
			statusFunction = false;
		}
		valSector = inputs.sector;
		valCategory = inputs.category;
		valSubCategory = inputs.subCategory;
		if (!inputs.sector || !inputs.category || !inputs.subCategory) {
			notification["error"]({
				message: "Debes ingresar Sector, Rubro y Subrubro",
			});
			setLoading(false);
			statusFunction = false;
		}
		// if (valEmail != valEmail2) {
		// 	notification["error"]({
		// 		message: "Los correos no son identicos",
		// 	});
		// 	setLoading(false);
		// 	statusFunction = false;
		// }

		if (statusFunction) {
			const result = await signUpApi(inputs);
			if (!result.ok) {
				notification["error"]({
					message: result.message,
				});
				setLoading(false);
			} else {
				localStorage.setItem("userID", result.userId);
				setLoading(false);
				setSaveData(2);
			}
		}
	};

	const changeSectores = ({ target: { value, name } }) => {
		switch (name) {
			case 'sector':

				setInputs({
					...inputs,
					sector: value,
					category: '',
					subCategory: ''
				})

				const categorias = getCategoriesBySector(value);

				setSectorCategorySubCategoryOptions({
					...sectorCategorySubCategoryOptions,
					category: categorias
				})
				break;

			case 'category':
				setInputs({
					...inputs,
					category: value,
					subCategory: ''
				})

				const subCategorias = getSubCategoriesByCategory(value)

				setSectorCategorySubCategoryOptions({
					...sectorCategorySubCategoryOptions,
					subCategory: subCategorias
				})

				break;

			case 'subCategory':
				setInputs({
					...inputs,
					subCategory: value
				})


				break;

			default: console.log('no case');
		}
	}

	// function onChangeCountry(value) {
	// 	setInputs({
	// 		...inputs,
	// 		country: value,

	// 	});
	// }

	return (
		<>
			{/* {stateForm ? ( */}
				<Form onChange={changeForm} onFinish={SignUp} className="register-form">
					<h1 className="register-form__title">PARTICIPA POR LA GIF CARD</h1>
					<Row gutter={[16, 24]}>
						{/* {data.name ? ( */}
							<Col span={24} md={12}>

								<TextField
									id="name"
									type="text"
									name="name"
									label="Nombre"
									variant="outlined"
									value={inputs.name}
									onChange={inputValidation}
									color="primary"
								/>


							</Col>
						{/* ) : null} */}
						{/* {data.lastname ? ( */}
							<Col span={24} md={12}>

								<TextField
									id="lastname"
									type="text"
									name="lastname"
									label="Apellidos"
									variant="outlined"
									value={inputs.lastname}
									onChange={inputValidation}
									color="primary"

								/>

							</Col>
						{/* ) : null} */}
						{/* {data.email ? ( */}
							<>
								<Col span={24} md={12}>

									<TextField
										id="email"
										type="email"
										name="email"
										label="Correo institucional"
										variant="outlined"
										value={inputs.email}
										onChange={inputValidation}
										color="primary"

									/>

								</Col>

							</>
						{/* ) : null} */}

						{/* {data.position ? ( */}
							<Col span={24} md={12}>

								<TextField
									id="position"
									type="text"
									name="position"
									label="Cargo"
									variant="outlined"
									value={inputs.position}
									onChange={inputValidation}
									color="primary"

								/>

							</Col>
						{/* ) : null} */}
						{/* {data.enterprise ? ( */}
							<Col span={24}>

								<TextField
									id="enterprise"
									type="text"
									name="enterprise"
									label="Organización"
									variant="outlined"
									value={inputs.enterprise}
									onChange={inputValidation}
									color="primary"

								/>

							</Col>
						{/* ) : null} */}

						{/* {(data.sector || data.category || data.subCategory) && */}
							<Col span={24}>
								<Row gutter={[20, 24]} className="register-form__selects">
									{/* {data.sector ? ( */}
										<Col span={24} md={8}>
											<FormControl variant="outlined">
												<InputLabel id="demo-simple-select-filled-label">Sector</InputLabel>
												<Select
													labelId="demo-simple-select-filled-label"
													id="demo-simple-select-filled"
													value={inputs.sector}
													name="sector"
													onChange={changeSectores}
													color="primary"
												>
													{sectorCategorySubCategoryOptions.sector.map(sector =>
														<MenuItem value={sector} key={sector}>{sector}</MenuItem>
													)
													}
												</Select>
											</FormControl>
										</Col>
									{/* ) : null} */}
									{/* {data.category && inputs.sector ? ( */}
										<Col span={24} md={8}>
											<FormControl variant="outlined">
												<InputLabel id="demo-simple-select-outlined-label">Rubro</InputLabel>
												<Select
													labelId="demo-simple-select-outlined-label"
													id="demo-simple-select-outlined"
													value={inputs.category}
													name="category"
													color="primary"
													onChange={changeSectores}
												>
													{sectorCategorySubCategoryOptions.category.map(category =>
														<MenuItem value={category} key={category}>{category}</MenuItem>
													)
													}
												</Select>
											</FormControl>
										</Col>
									 {/* ) : null} */}
									 {/* {data.subCategory && inputs.sector && inputs.category ? ( */}
										<Col span={24} md={8}>
											<FormControl variant="outlined">
												<InputLabel id="demo-simple-select-outlined-label">Subrubro</InputLabel>
												<Select
													labelId="demo-simple-select-outlined-label"
													id="demo-simple-select-outlined"
													value={inputs.subCategory}
													name="subCategory"
													onChange={changeSectores}
													color="primary"
												>
													{sectorCategorySubCategoryOptions.subCategory.map(subCategory =>
														<MenuItem value={subCategory} key={subCategory}>{subCategory}</MenuItem>
													)
													}
												</Select>
											</FormControl>
										</Col>
								 {/* ) : null} */}
								</Row>
							</Col>


						<Col span={24} className="register-form__footer">
							{/*<p>Ya estoy registrado, <Link to="/iniciarsesion">Ingresa aquí</Link></p>*/}
							{/* <a href="https://upcompany.cl/mailing/transforma/5_encuentro_red_transforma_alimentos.pdf"
								target="_blank"
								className="register-form__footer__btn"
								id="btn"
								style={{
									cursor: "pointer",
									color: "#fff",
									background: '#3d98aa',
									'line-height': '45px',
									'text-align': 'center'
								}}
							>
								<span>Descargar programa</span>
							</a> */}
							<ButtonAntd
								htmlType="submit"
								className="register-form__footer__btn"
								id="btn"
								style={{
									cursor: "pointer",
									background: '#f59e3f',
								}}
							>
								<span>Participar</span>
							</ButtonAntd>
						</Col>
					</Row>
				</Form>
			{/* ) : null} */}
		</>
	);
};

export default RegisterForm;
