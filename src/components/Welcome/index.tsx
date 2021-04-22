import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { gsapStart, gsapRetract, gsapExpand } from './gsap';
import { Arrow } from '@images/svg';
import { changeToggle, setAnimationState } from '@store/actions';
import { useTranslation } from 'react-i18next';
import { withTrans } from '../../i18n/withTrans';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const gray = '#929497';
const pureBlack = '#000000';
const blue = '#0853DC';
const helvetica = 'HelveticaNeue';
const helveticaBold = 'HeltevicaNeueBold';
const helveticaMedium = 'HelveticaNeueMedium';
const white = '#FFFFFF'

const Welcome = (props) => {


	const { i18n } = useTranslation();
	const [language, setLanguage] = useState('en');
	const { loader, menu, t, action, title, toggle, component, background } = props;

	useEffect(() => {
		if (loader.loader && !loader.animation) gsapStart(action.setAnimationState(true));
	}, [loader]);

	useEffect(() => {
		if (loader.loader) {
			if (!menu.opened && toggle.toggle == 3) return;
			menu.opened ? gsapRetract() : gsapExpand(toggleDispatch);
		}
	}, [menu]);

	const toggleDispatch = () => action.changeToggle(2)

	const scrollToNextSection = () => {
		var i = 10;
		var int = setInterval(function () {
			window.scrollTo(0, i);
			i += 10;
			if (i >= document.documentElement.clientHeight) clearInterval(int);
		}, 20);
	}

	const changeLang = (event: any) => {
		const lang = event.target.value;
		let text = '';
		if (lang == 'en') {
			setLanguage('es');
			text = 'es';
		}

		if (lang == 'es') {
			setLanguage('en');
			text = 'en';
		}

		i18n.changeLanguage(text);
	}

	return (
		<>
			<div className={'_principalContainer'}>
				<div className={styles._container}>
					<section className='_concept'>
						{/* <div className='_whiteBodyText' id='one'> {t("concept&purpose")} </div>
					<div className='_whiteBodyText' id='two'> {t("beauty&function")} </div> */}

						{
							component
								? <div className={styles._logoParentWelcome} id='three'>{title}</div>
								:
								<div className={styles._upContainer}>
								<div className={styles._leftUpContainer}>
									<div className='_whiteBodyText' id='three'> Brands are meant to be </div>
									</div>
									<div className={styles._rightUpContainer}>
									<div className='_whiteBodyText' id='three'> {t(title)} </div>
									</div>
								</div>

						}

					</section>
					<ul className={styles._list} id='list'>
						<li className='_smallBodyText' id='text-1'>{t("concept")} </li>
						<li className='_smallBodyText' id='text-2'>{t("purpose")}</li>
						<li className='_smallBodyText' id='text-3'>{t("beauty")}</li>
						<li className='_smallBodyText' id='text-4'>{t("function")}</li>
						<li className='_smallBodyText' id='text-5'>{t("creation")}</li>
						<li className='_smallBodyText' id='text-6'>{t("innovation")}</li>
					</ul>
					<section className='_intermediate'>
						<div className='_target'>BRAND | UI - UX | MOTION GRAPHICS & 3D | SOCIAL MEDIA | PRODUCTIONS | PROTOTYPE | CLASSROOM </div>
						<div className='_targetRightContainer'>
							<div className='_targetRight'>It’s about purpose</div>
							<div className='_targetRight'>est. 17’</div>
						</div>
						<div className='_separator'></div>
					</section>
					<section className='_contact'>
						<button className='_languageButton' onClick={changeLang} value={language} >
							{(language == 'en' ? 'Español' : 'English')}
						</button>
						<div className='_contactText'>hello@bananadesign.io</div>
						<div className='_contactText'>+58 424 187 2382</div>
						<div className='_contactText'>+58 424 837 8858</div>
						<p className='_moreInfo'>
							Somos un estudio creativo enfocado en ofrecer soluciones de diseño a nivel de Branding, Diseño Web,
							Modelado 3D y Social Media. Trabajamos con innovadores que buscan mejorar el mundo a través de sus ideas y servicios.
					</p>
					</section>
					<div className='_arrow' onClick={scrollToNextSection}>
						<Arrow />
					</div>
					<section className='_description'>
						<div className='_descriptionText'>
							Estudio creativo centrado en el diseño de nuevos lenguajes visuales para
							marcas mundiales modernas, nuevas empresas y personas innovadoras
							en todas partes. Nuestro objetivo es crear proyectos hermosos,
							significativos y atemporales que no se limiten a simples modas.
          </div>

						<div className='_contactText'>hello@bananadesign.io</div>

					</section>
				</div>
			</div>

			<style jsx> {`
			._principalContainer {
				padding: 10vh 2.5% 5vh 2.5%;
				height: 100vh;
				background-color: ${background}
			}
			._description {
			background-color: #FFFFFF;
			width: 50%;
			font-family: ${helvetica};
			font-weight: 900;
			font-size: 22px;
			line-height: 1.2;
			color: ${pureBlack};
			display:flex;
			justify-content: center
		}

		._descriptionText {
			padding: 20% 0 10% 15%;
			background-color: #FFFFFF;
		}

		._target {
			font-family: ${helveticaBold};
			width: 50%;
			background-color: #FFFFFF;
			font-size: 1rem;
			font-weight: 700
		}

		._targetRightContainer {
			display: flex;
			justify-content: space-between;
			width: 50%;
			background-color: #FFFFFF;	
		}

		._targetRight {
			font-family: ${helvetica};
			color: $gray;
			background-color: #FFFFFF;
		}

		._targetRight:first-child {
			padding-left: 15%;
		}

		._contact {
			width: 50%;
			display: flex;
			align-items: flex-end;
			background-color: #FFFFFF;

		}

		._contactText {
			font-family: ${helveticaMedium};
			font-size: 12px;
			margin-right: 10%;
			background-color: #FFFFFF;
			font-weight: 900
		}

		._contactText::after {
			display: block;
			content: '';
			border-bottom: solid 1px ${pureBlack};
			transform: scaleX(0);
			transition: transform 250ms ease-in-out;
		}

		._contactText:hover::after {
			transform: scaleX(1);
		}

		._moreInfo {
			opacity: 0;
			position: absolute;
			bottom: 15%;
			color: ${gray};
			width: 30%;
			background-color: #FFFFFF;
			font-family: ${helvetica};
		}

		._arrow {
			position: absolute;
			bottom: 5%;
			right: 50%;
			z-index: 2;
		}
		
		._whiteBodyText{
			color: ${pureBlack};
			font-family: ${helveticaBold};
			font-weight: bold;
			line-height: 1.2;
			opacity: 1;
			font-size: 5rem;
			
		}

		._concept {
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			width: 100%;
			height: 40%;
			background-color: #FFFFFF;
		}

		._separator {
			width: 100%;
			border: 0;
			background-color: ${gray};
			height: 3px;
		}

		._intermediate {
			display: flex;
			flex-wrap: wrap;
			margin-top: 1.4%;
			z-index: 2;
			position: absolute;
			bottom: 50%;
			width: 95%;
		}

		._languageButton {
			font-family: ${helveticaMedium};
			font-size: 12px;
			background-color: ${pureBlack};
			color: ${white};
			border: none;
			width: 70px;
			margin-right: 50px;
			padding: 5px 0 3px 0;
			border-radius: 2px;
			cursor: none;
			font-weight: 200;
		}

		._smallBodyText {
			opacity: 0;
			font-size: 1.75rem;
			z-index: 2;
			font-family: ${helveticaBold};
			line-height: 1.2;
			font-weight: 900;
			color: ${blue};
			padding-bottom: 0.625rem;
		}
		
		@media (max-width: 1400px) {
			._moreInfo{
				font-size: 0.8rem !important;
				bottom: 7% !important;
			}
		
			._target{
				font-size: 0.75rem !important;
			}
		
			._list{
				top: 32% !important;
			}
		
			._smallBodyText{
				font-size:1.20rem !important;
			}
		
			._descriptionText{
				font-size: 1.1rem !important
			}
		
			._whiteBodyText{
				font-size: 2.5rem !important;
			}
		}

		@media(max-width: 1200px) {
			._moreInfo{
				font-size: 0.8rem !important;
				bottom: 5% !important;
			}
		
			._target{
				font-size: 0.75rem !important;
			}
		
			._list{
				top: 26% !important;
			}
		
			._smallBodyText{
				font-size:1.10rem !important;
			}
			._descriptionText{
				font-size: 0.95rem !important
			}
			._whiteBodyText{
				font-size: 2.2rem !important;
			}
		}`
			}</style>
		</>
	);
}

const mapStateToProps = ({ loader, menu, toggle }) => ({ loader, menu, toggle });

const mapDispatchToProps = dispatch => {
	const actions = {
		changeToggle,
		setAnimationState
	}

	return {
		action: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withTrans(Welcome));