import React from 'react';

interface logoProps {
	firstColor?: string,
	secondColor?: string,
}

const Logo: React.FC<logoProps> = ({firstColor = '#161616', secondColor = '#231f20'}) => (
	<svg width="100%" height="100%" viewBox="0 0 204.35 20.674">
		<g id="Grupo_43" data-name="Grupo 43" transform="translate(-126.718 -132.652)">
			<path id="Trazado_48" data-name="Trazado 48" d="M831.281,139.071a6.016,6.016,0,0,0-6.085-4.807c-5.252,0-7.475,4.39-7.475,8.725s2.223,8.725,7.475,8.725c3.668,0,6-2.834,6.363-6.363h1.89c-.528,4.863-3.612,7.975-8.253,7.975-6.252,0-9.365-4.918-9.365-10.337s3.112-10.337,9.365-10.337c3.751,0,7.475,2.251,7.975,6.419Z" transform="translate(-584.874)" fill={firstColor} />
			<path id="Trazado_49" data-name="Trazado 49" d="M947.725,170.654h1.612v3.362h.056a5.3,5.3,0,0,1,5.419-3.557v1.751a4.939,4.939,0,0,0-5.335,5.141v7.642h-1.75Z" transform="translate(-696.817 -32.083)" fill={firstColor} />
			<path id="Trazado_50" data-name="Trazado 50" d="M997.787,177.083c.028,2.557,1.362,5.641,4.724,5.641a4.368,4.368,0,0,0,4.5-3.668h1.751c-.75,3.251-2.64,5.141-6.252,5.141-4.557,0-6.474-3.5-6.474-7.586,0-3.779,1.917-7.586,6.474-7.586,4.613,0,6.447,4.029,6.308,8.058Zm9.281-1.473c-.083-2.64-1.723-5.113-4.557-5.113-2.862,0-4.446,2.5-4.724,5.113Z" transform="translate(-737.82 -30.871)" fill={firstColor} />
			<path id="Trazado_51" data-name="Trazado 51" d="M1090.147,173.832c.167-3.362,2.529-4.807,5.808-4.807,2.529,0,5.28.778,5.28,4.613v7.614a.932.932,0,0,0,1.028,1.056,1.647,1.647,0,0,0,.556-.111v1.473a4.8,4.8,0,0,1-1.139.111c-1.778,0-2.056-1-2.056-2.5h-.056a5.467,5.467,0,0,1-5.224,2.918c-2.64,0-4.807-1.306-4.807-4.2,0-4.029,3.918-4.168,7.7-4.613,1.445-.167,2.251-.361,2.251-1.945,0-2.362-1.7-2.945-3.751-2.945-2.167,0-3.779,1-3.834,3.334Zm9.337,2.112h-.056c-.222.417-1,.556-1.473.639-2.973.528-6.669.5-6.669,3.307a2.986,2.986,0,0,0,3.2,2.834c2.667,0,5.03-1.695,5-4.5Z" transform="translate(-817.177 -30.871)" fill={firstColor} />
			<path id="Trazado_52" data-name="Trazado 52" d="M1183.065,147.614h2.918v1.473h-2.918v9.67c0,1.139.167,1.806,1.417,1.89a13.557,13.557,0,0,0,1.5-.083v1.5c-.528,0-1.028.056-1.556.056-2.334,0-3.14-.778-3.112-3.223v-9.809h-2.5v-1.473h2.5v-4.307h1.75Z" transform="translate(-892.95 -9.043)" fill={firstColor} />
			<path id="Trazado_53" data-name="Trazado 53" d="M1241.636,135.408h1.751v2.807h-1.751Zm0,5.5h1.751v14.338h-1.751Z" transform="translate(-946.27 -2.339)" fill={firstColor} />
			<path id="Trazado_54" data-name="Trazado 54" d="M1263.311,171.781h1.945l4.5,12.588h.055l4.446-12.588h1.806l-5.363,14.338h-1.862Z" transform="translate(-964.666 -33.21)" fill={firstColor} />
			<path id="Trazado_55" data-name="Trazado 55" d="M1354.522,177.083c.028,2.557,1.362,5.641,4.724,5.641a4.368,4.368,0,0,0,4.5-3.668h1.751c-.75,3.251-2.64,5.141-6.252,5.141-4.557,0-6.474-3.5-6.474-7.586,0-3.779,1.917-7.586,6.474-7.586,4.613,0,6.447,4.029,6.308,8.058Zm9.281-1.473c-.083-2.64-1.723-5.113-4.557-5.113-2.862,0-4.446,2.5-4.724,5.113Z" transform="translate(-1040.594 -30.871)" fill={firstColor} />
			<path id="Trazado_56" data-name="Trazado 56" d="M831.281,139.071a6.016,6.016,0,0,0-6.085-4.807c-5.252,0-7.475,4.39-7.475,8.725s2.223,8.725,7.475,8.725c3.668,0,6-2.834,6.363-6.363h1.89c-.528,4.863-3.612,7.975-8.253,7.975-6.252,0-9.365-4.918-9.365-10.337s3.112-10.337,9.365-10.337c3.751,0,7.475,2.251,7.975,6.419Z" transform="translate(-584.874)" fill={secondColor} />
			<path id="Trazado_57" data-name="Trazado 57" d="M947.725,170.654h1.612v3.362h.056a5.3,5.3,0,0,1,5.419-3.557v1.751a4.939,4.939,0,0,0-5.335,5.141v7.642h-1.75Z" transform="translate(-696.817 -32.083)" fill={secondColor} />
			<path id="Trazado_58" data-name="Trazado 58" d="M997.787,177.083c.028,2.557,1.362,5.641,4.724,5.641a4.368,4.368,0,0,0,4.5-3.668h1.751c-.75,3.251-2.64,5.141-6.252,5.141-4.557,0-6.474-3.5-6.474-7.586,0-3.779,1.917-7.586,6.474-7.586,4.613,0,6.447,4.029,6.308,8.058Zm9.281-1.473c-.083-2.64-1.723-5.113-4.557-5.113-2.862,0-4.446,2.5-4.724,5.113Z" transform="translate(-737.82 -30.871)" fill={secondColor} />
			<path id="Trazado_59" data-name="Trazado 59" d="M1090.147,173.832c.167-3.362,2.529-4.807,5.808-4.807,2.529,0,5.28.778,5.28,4.613v7.614a.932.932,0,0,0,1.028,1.056,1.647,1.647,0,0,0,.556-.111v1.473a4.8,4.8,0,0,1-1.139.111c-1.778,0-2.056-1-2.056-2.5h-.056a5.467,5.467,0,0,1-5.224,2.918c-2.64,0-4.807-1.306-4.807-4.2,0-4.029,3.918-4.168,7.7-4.613,1.445-.167,2.251-.361,2.251-1.945,0-2.362-1.7-2.945-3.751-2.945-2.167,0-3.779,1-3.834,3.334Zm9.337,2.112h-.056c-.222.417-1,.556-1.473.639-2.973.528-6.669.5-6.669,3.307a2.986,2.986,0,0,0,3.2,2.834c2.667,0,5.03-1.695,5-4.5Z" transform="translate(-817.177 -30.871)" fill={secondColor} />
			<path id="Trazado_60" data-name="Trazado 60" d="M1183.065,147.614h2.918v1.473h-2.918v9.67c0,1.139.167,1.806,1.417,1.89a13.557,13.557,0,0,0,1.5-.083v1.5c-.528,0-1.028.056-1.556.056-2.334,0-3.14-.778-3.112-3.223v-9.809h-2.5v-1.473h2.5v-4.307h1.75Z" transform="translate(-892.95 -9.043)" fill={secondColor} />
			<path id="Trazado_61" data-name="Trazado 61" d="M1241.636,135.408h1.751v2.807h-1.751Zm0,5.5h1.751v14.338h-1.751Z" transform="translate(-946.27 -2.339)" fill={secondColor} />
			<path id="Trazado_62" data-name="Trazado 62" d="M1263.311,171.781h1.945l4.5,12.588h.055l4.446-12.588h1.806l-5.363,14.338h-1.862Z" transform="translate(-964.666 -33.21)" fill={secondColor} />
			<path id="Trazado_63" data-name="Trazado 63" d="M1354.522,177.083c.028,2.557,1.362,5.641,4.724,5.641a4.368,4.368,0,0,0,4.5-3.668h1.751c-.75,3.251-2.64,5.141-6.252,5.141-4.557,0-6.474-3.5-6.474-7.586,0-3.779,1.917-7.586,6.474-7.586,4.613,0,6.447,4.029,6.308,8.058Zm9.281-1.473c-.083-2.64-1.723-5.113-4.557-5.113-2.862,0-4.446,2.5-4.724,5.113Z" transform="translate(-1040.594 -30.871)" fill={secondColor} />
			<path id="Trazado_64" data-name="Trazado 64" d="M126.718,133.723H136c3.418-.056,7.169.834,7.169,4.974a4.461,4.461,0,0,1-2.612,4,4.709,4.709,0,0,1,3.418,4.7c0,4.724-3.474,6.169-7.725,6.169h-9.531Zm5.168,7.808h4a1.926,1.926,0,0,0,2.112-1.89c0-1.445-1.028-1.917-2.112-1.917h-4Zm0,7.892h4.14c1.639,0,2.779-.584,2.779-2.223,0-1.751-1.223-2.334-2.779-2.334h-4.14Z" transform="translate(0 -0.907)" fill={firstColor} />
			<path id="Trazado_65" data-name="Trazado 65" d="M252.028,171.665a4.434,4.434,0,0,1,2.251-3.862,9.513,9.513,0,0,1,4.585-1c3.418,0,6.725.75,6.725,4.835v6.308a8.39,8.39,0,0,0,.556,3.7h-4.752a5.649,5.649,0,0,1-.278-1.362,6.509,6.509,0,0,1-4.752,1.778c-2.751,0-4.918-1.389-4.918-4.363,0-4.7,5.113-4.335,8.392-5,.806-.167,1.251-.445,1.251-1.334,0-1.084-1.306-1.5-2.279-1.5a2.113,2.113,0,0,0-2.362,1.806Zm6.113,7.475c2.251,0,3-1.278,2.89-4.251a13.339,13.339,0,0,1-2.918.778c-1.056.25-1.945.695-1.945,1.834,0,1.167.917,1.639,1.973,1.639" transform="translate(-105.86 -28.984)" fill={firstColor} />
			<path id="Trazado_66" data-name="Trazado 66" d="M364.048,167.219h4.585v1.973h.056a5.448,5.448,0,0,1,4.529-2.39c4.807,0,5.2,3.5,5.2,5.585v9.253H373.69v-6.975c0-1.973.222-3.974-2.362-3.974-1.778,0-2.557,1.5-2.557,3.084v7.864h-4.724Z" transform="translate(-201.43 -28.984)" fill={firstColor} />
			<path id="Trazado_67" data-name="Trazado 67" d="M473.745,171.665A4.434,4.434,0,0,1,476,167.8a9.513,9.513,0,0,1,4.585-1c3.418,0,6.725.75,6.725,4.835v6.308a8.39,8.39,0,0,0,.556,3.7H483.11a5.65,5.65,0,0,1-.278-1.362,6.509,6.509,0,0,1-4.752,1.778c-2.751,0-4.918-1.389-4.918-4.363,0-4.7,5.113-4.335,8.392-5,.806-.167,1.251-.445,1.251-1.334,0-1.084-1.306-1.5-2.279-1.5a2.113,2.113,0,0,0-2.362,1.806Zm6.113,7.475c2.251,0,3-1.278,2.89-4.251a13.339,13.339,0,0,1-2.918.778c-1.056.25-1.945.695-1.945,1.834,0,1.167.917,1.639,1.973,1.639" transform="translate(-294.039 -28.984)" fill={firstColor} />
			<path id="Trazado_68" data-name="Trazado 68" d="M585.766,167.219h4.585v1.973h.055a5.448,5.448,0,0,1,4.529-2.39c4.807,0,5.2,3.5,5.2,5.585v9.253h-4.724v-6.975c0-1.973.222-3.974-2.362-3.974-1.778,0-2.557,1.5-2.557,3.084v7.864h-4.724Z" transform="translate(-389.61 -28.984)" fill={firstColor} />
			<path id="Trazado_69" data-name="Trazado 69" d="M695.463,171.665a4.434,4.434,0,0,1,2.251-3.862,9.513,9.513,0,0,1,4.585-1c3.418,0,6.725.75,6.725,4.835v6.308a8.39,8.39,0,0,0,.556,3.7h-4.752a5.65,5.65,0,0,1-.278-1.362,6.509,6.509,0,0,1-4.752,1.778c-2.751,0-4.918-1.389-4.918-4.363,0-4.7,5.113-4.335,8.392-5,.806-.167,1.25-.445,1.25-1.334,0-1.084-1.306-1.5-2.279-1.5a2.113,2.113,0,0,0-2.362,1.806Zm6.113,7.475c2.251,0,3-1.278,2.89-4.251a13.338,13.338,0,0,1-2.918.778c-1.056.25-1.945.695-1.945,1.834,0,1.167.917,1.639,1.973,1.639" transform="translate(-482.219 -28.984)" fill={firstColor} />
			<path id="Trazado_70" data-name="Trazado 70" d="M126.718,133.723H136c3.418-.056,7.169.834,7.169,4.974a4.461,4.461,0,0,1-2.612,4,4.709,4.709,0,0,1,3.418,4.7c0,4.724-3.474,6.169-7.725,6.169h-9.531Zm5.168,7.808h4a1.926,1.926,0,0,0,2.112-1.89c0-1.445-1.028-1.917-2.112-1.917h-4Zm0,7.892h4.14c1.639,0,2.779-.584,2.779-2.223,0-1.751-1.223-2.334-2.779-2.334h-4.14Z" transform="translate(0 -0.907)" fill={secondColor} />
			<path id="Trazado_71" data-name="Trazado 71" d="M252.028,171.665a4.434,4.434,0,0,1,2.251-3.862,9.513,9.513,0,0,1,4.585-1c3.418,0,6.725.75,6.725,4.835v6.308a8.39,8.39,0,0,0,.556,3.7h-4.752a5.649,5.649,0,0,1-.278-1.362,6.509,6.509,0,0,1-4.752,1.778c-2.751,0-4.918-1.389-4.918-4.363,0-4.7,5.113-4.335,8.392-5,.806-.167,1.251-.445,1.251-1.334,0-1.084-1.306-1.5-2.279-1.5a2.113,2.113,0,0,0-2.362,1.806Zm6.113,7.475c2.251,0,3-1.278,2.89-4.251a13.339,13.339,0,0,1-2.918.778c-1.056.25-1.945.695-1.945,1.834,0,1.167.917,1.639,1.973,1.639" transform="translate(-105.86 -28.984)" fill={secondColor} />
			<path id="Trazado_72" data-name="Trazado 72" d="M364.048,167.219h4.585v1.973h.056a5.448,5.448,0,0,1,4.529-2.39c4.807,0,5.2,3.5,5.2,5.585v9.253H373.69v-6.975c0-1.973.222-3.974-2.362-3.974-1.778,0-2.557,1.5-2.557,3.084v7.864h-4.724Z" transform="translate(-201.43 -28.984)" fill={secondColor} />
			<path id="Trazado_73" data-name="Trazado 73" d="M473.745,171.665A4.434,4.434,0,0,1,476,167.8a9.513,9.513,0,0,1,4.585-1c3.418,0,6.725.75,6.725,4.835v6.308a8.39,8.39,0,0,0,.556,3.7H483.11a5.65,5.65,0,0,1-.278-1.362,6.509,6.509,0,0,1-4.752,1.778c-2.751,0-4.918-1.389-4.918-4.363,0-4.7,5.113-4.335,8.392-5,.806-.167,1.251-.445,1.251-1.334,0-1.084-1.306-1.5-2.279-1.5a2.113,2.113,0,0,0-2.362,1.806Zm6.113,7.475c2.251,0,3-1.278,2.89-4.251a13.339,13.339,0,0,1-2.918.778c-1.056.25-1.945.695-1.945,1.834,0,1.167.917,1.639,1.973,1.639" transform="translate(-294.039 -28.984)" fill={secondColor} />
			<path id="Trazado_74" data-name="Trazado 74" d="M585.766,167.219h4.585v1.973h.055a5.448,5.448,0,0,1,4.529-2.39c4.807,0,5.2,3.5,5.2,5.585v9.253h-4.724v-6.975c0-1.973.222-3.974-2.362-3.974-1.778,0-2.557,1.5-2.557,3.084v7.864h-4.724Z" transform="translate(-389.61 -28.984)" fill={secondColor} />
			<path id="Trazado_75" data-name="Trazado 75" d="M695.463,171.665a4.434,4.434,0,0,1,2.251-3.862,9.513,9.513,0,0,1,4.585-1c3.418,0,6.725.75,6.725,4.835v6.308a8.39,8.39,0,0,0,.556,3.7h-4.752a5.65,5.65,0,0,1-.278-1.362,6.509,6.509,0,0,1-4.752,1.778c-2.751,0-4.918-1.389-4.918-4.363,0-4.7,5.113-4.335,8.392-5,.806-.167,1.25-.445,1.25-1.334,0-1.084-1.306-1.5-2.279-1.5a2.113,2.113,0,0,0-2.362,1.806Zm6.113,7.475c2.251,0,3-1.278,2.89-4.251a13.338,13.338,0,0,1-2.918.778c-1.056.25-1.945.695-1.945,1.834,0,1.167.917,1.639,1.973,1.639" transform="translate(-482.219 -28.984)" fill={secondColor} />
			<path id="Trazado_76" data-name="Trazado 76" d="M1446.752,141.283a2.578,2.578,0,1,1,2.522-2.578,2.481,2.481,0,0,1-2.522,2.578m0-4.707a2.136,2.136,0,1,0,1.971,2.13,2,2,0,0,0-1.971-2.13m-.51,3.6h-.469v-2.853h1.082c.689,0,1.041.241,1.041.82a.73.73,0,0,1-.744.779l.8,1.254h-.531l-.737-1.22h-.441Zm.524-1.62c.351,0,.662-.035.662-.448,0-.345-.338-.386-.62-.386h-.565v.834Z" transform="translate(-1118.206 -2.95)" fill={firstColor} />
			<path id="Trazado_77" data-name="Trazado 77" d="M1446.752,141.283a2.578,2.578,0,1,1,2.522-2.578,2.481,2.481,0,0,1-2.522,2.578m0-4.707a2.136,2.136,0,1,0,1.971,2.13,2,2,0,0,0-1.971-2.13m-.51,3.6h-.469v-2.853h1.082c.689,0,1.041.241,1.041.82a.73.73,0,0,1-.744.779l.8,1.254h-.531l-.737-1.22h-.441Zm.524-1.62c.351,0,.662-.035.662-.448,0-.345-.338-.386-.62-.386h-.565v.834Z" transform="translate(-1118.206 -2.95)" fill={secondColor} />
		</g>
	</svg>
)

export default Logo;