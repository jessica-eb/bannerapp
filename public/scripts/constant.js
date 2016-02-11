var BUTTON_COLORS = [
	{
		name: 'light',
		style: {
			backgroundColor: "#f8faff",
			color: "#282c35"
		}
	},
	{
		name: 'green',
		style: {
			backgroundColor: "#6aedc7",
			color: "#f8faff"
		}
	},
	{
		name: 'blue',
		style: {
			backgroundColor: "#00fff8",
			color: "#f8faff"
		}
	},
	{
		name: 'pink',
		style: {
			backgroundColor: "#ff1ab3",
			color: "#f8faff"
		}
	},
	{
		name: 'oj',
		style: {
			backgroundColor: "#f6682f",
			color: "#f8faff"
		}
	}
];

var LAZYOBJ = [
	{
		imgsrc: "/images/banners/728x90.png",
		name: "728x90",
		show: true,
		imgGrad: false,
		imgScale: 1,
		thumbstyle: {
			width: '728px',
			height: '90px'
		},
		logostyle: {
			top: '50%',
			left: '4%',
			width: '10%',
			color: 'white',
			transform: 'translateY(-50%)',
		},
		titlerows: '1',
		titlestyle: {
			top: '50%',
			left: '50%',
			width: '100%',
			textAlign: 'center',
			color: 'white',
			fontSize: '20px',
			maxWidth: '40%',
			transform: 'translateY(-50%) translateX(-50%)',
		},
		substyle: {
			display: 'none'
		},
		bodystyle: {
			top: '50%',
			right: '4%',
			color: 'white',
			fontSize: '10px',
			maxWidth: '15%',
			transform: 'translateY(-50%)'
		}
	},
	{
		imgsrc: "/images/banners/468x60.png",
		name: "469x60",
		show: true,
		imgGrad: false,
		imgScale: 1,
		thumbstyle: {
			width: '468px',
			height: '60px'
		},
		logostyle: {
			top: '50%',
			left: '4%',
			width: '18%',
			color: 'white',
			transform: 'translateY(-50%)',
		},
		substyle: {
			display: 'none'
		},
		titlerows: '1',
		titlestyle: {
			top: '50%',
			left: '50%',
			width: '100%',
			textAlign: 'center',
			color: 'white',
			fontSize: '18px',
			maxHeight: '',
			maxWidth: '40%',
			transform: 'translateY(-50%) translateX(-50%)',
		},
		bodystyle: {
			top: '50%',
			transform: 'translateY(-50%)',
			right: '4%',
			maxWidth: '15%',
			fontSize:'6px',
			backgroundColor: '#00cc52'
		}
	},
	{
		imgsrc: "/images/banners/300x250.png",
		name: "300x250",
		thumbstyle: {
			width: '300px',
			height: '250px'
		},
		show: true,
		imgGrad: false,
		imgScale: 1,
		logostyle: {
			top: '10%',
			left: '10%',
			color: 'white',
			width: '30%',
		},
		substyle: {
			display: 'none'
		},
		titlerows: '3',
		titlestyle: {
			top: '40%',
			left: '10%',
			width: '100%',
			color: 'white',
			maxWidth: '30%',
			fontSize: '24px'
		},
		bodystyle: {
			bottom: '0',
			left: '10%',
			maxWidth: '40%',
			backgroundColor: '#00cc52'
		}
	},
	{
		imgsrc: "/images/banners/300x600.png",
		name: "180x150",
		thumbstyle: {
			width: '180px',
			height: '150px'
		},
		show: true,
		imgGrad: false,
		imgScale: 1,
		logostyle: {
			top: '10%',
			left: '10%',
			width: '30%',
			color: 'white'
		},
		substyle: {
			display: 'none'
		},
		titlerows:'5',
		titlestyle: {
			top: '30%',
			left: '10%',
			maxWidth: '80%',
			color: 'white'
		},
		bodystyle: {
			bottom: '10%',
			right: '0',
			fontSize: '6px',
			maxWidth: '30%',
			backgroundColor: '#00cc52',
		}
	},
	{
		imgsrc: "/images/banners/300x600.png",
		name: "300x600",
		thumbstyle: {
			width: '300px',
			height: '600px'
		},
		substyle: {
			display: 'none'
		},
		show: true,
		imgGrad: false,
		imgScale: 1,
		logostyle: {
			top: '10%',
			left: '10%',
			width: '40%',
			color: 'white',
		},
		titlerows: '4',
		titlestyle: {
			top: '30%',
			left: '10%',
			width: '100%',
			color: 'white',
			maxHeight: '',
			maxWidth: '60%',
			fontSize: '28px'
		},
		bodystyle: {
			bottom: '30%',
			right: '0',
			backgroundColor: 'white'
		}
	},
	{
		imgsrc: "/images/banners/160x600.png",
		name: "160x600",
		thumbstyle: {
			width: '160px',
			height: '600px'
		},
		show: true,
		imgGrad: false,
		imgScale: 1,
		logostyle: {
			top: '10%',
			left: '10%',
			color: 'white',
			width: '60%',
		},
		substyle: {
			display: 'none'
		},
		titlerows: '4',
		titlestyle: {
			top: '30%',
			left: '10%',
			width: '60%',
			color: 'white',
			maxWidth: '80%',
			fontSize: '28px',
			lineHeight: '1.5em'
		},
		bodystyle: {
			bottom: '0',
			left: '10%',
			backgroundColor: 'white',
			maxWidth: '50%'
		}
	},
	{
		imgsrc: "/images/banners/600x315.png",
		name: "Facebook",
		thumbstyle: {
			width: '600px',
			height: '314px'
		},
		show: true,
		imgGrad: false,
		imgScale: 1,
		logostyle: {
			top: '10%',
			left: '8%',
			width: '30%',
			color: 'white'
		},
		substyle: {
			top: '50%',
			left: '8%',
			color: '#fff'
		},
		titlerows:'3',
		titlestyle: {
			top: '40%',
			left: '8%',
			maxWidth: '70%',
			color: 'white',
			fontSize: '28px'
		},
		bodystyle: {
			maxWidth: '60%',
			bottom: '10%',
			left: '8%',
			maxWidth: '50%',
			backgroundColor: 'white',
		}
	},
	{
		imgsrc: "/images/banners/FB-test.png",
		name: "FacebookContext",
		thumbstyle: {
			width: '719px',
			height: '362.5px'
		},
		substyle: {
			display: 'none'
		},
		show: true,
		imgGrad: false,
		imgScale: 1,
		logostyle: {
			top: '28%',
			left: '25%',
			width: '6%',
			color: 'white'
		},
		titlerows:'3',
		titlestyle: {
			top: '36%',
			left: '25%',
			maxWidth: '25%',
			color: 'white',
			fontSize: '8px'
		},
		bodystyle: {
			maxWidth: '25%',
			top: '48%',
			left: '25%',
			backgroundColor: 'white',
			fontSize: '2px',
		}
	},
	{
		imgsrc: "/images/banners/800x320.png",
		name: "Twitter",
		thumbstyle: {
			width: '800px',
			height: '320px'
		},
		show: true,
		imgGrad: false,
		imgScale: 1,
		logostyle: {
			top: '10%',
			left: '4%',
			width: '15%',
			color: 'white'
		},
		substyle: {
			display: 'none'
		},
		titlerows: '3',
		titlestyle: {
			top: '30%',
			left: '4%',
			maxWidth: '40%',
			fontSize: '32px',
			color: 'white'
		},
		bodystyle: {
			bottom: '0%',
			left: '4%',
			backgroundColor: 'white'
		}
	},
	{
		imgsrc: "/images/banners/320x50.png",
		name: "Mobile",
		thumbstyle: {
			width: '320px',
			height: '50px'
		},
		show: true,
		imgGrad: false,
		imgScale: 1,
		logostyle: {
			top: '50%',
			left: '5%',
			width: '20%',
			transform: 'translateY(-50%)',
			color: 'white'
		},
		substyle: {
			display: 'none'
		},
		titlerows: '1',
		titlestyle: {
			top: '50%',
			left: '50%',
			width: '100%',
			textAlign: 'center',
			color: 'white',
			fontSize: '16px',
			maxWidth: '40%',
			transform: 'translateY(-50%) translateX(-50%)',
		},
		bodystyle: {
			top: '50%',
			right: '4%',
			color: 'white',
			fontSize: '6px',
			maxWidth: '15%',
			transform: 'translateY(-50%)'
		}
	}
]
	/*{
		imgsrc: "/images/banners/banner11.png",
		name: "100x200",
		show: true,
		logostyle: {
			top: '50%',
			left: '4%',
			width: '20%',
			color: 'white',
			transform: 'translateY(-50%)',
		},
		titlerows: '1',
		titlestyle: {
			top: '50%',
			left: '50%',
			width: '100%',
			textAlign: 'center',
			color: 'white',
			maxHeight: '',
			maxWidth: '40%',
			transform: 'translateY(-50%) translateX(-50%)',
		},
		bodystyle: {
			top: '50%',
			right: '4%',
			backgroundColor: 'white',
			transform: 'translateY(-50%)',
			color: '#00aaea'
		}
	},
	{
		imgsrc: "/images/banners/banner12.png",
		name: "100x200",
		show: true,
		logostyle: {
			top: '10%',
			left: '10%',
			color: 'white',
			width: '30%',
		},
		titlerows: '3',
		titlestyle: {
			top: '30%',
			left: '10%',
			width: '60%',
			color: 'white',
			maxWidth: '30%'
		},
		bodystyle: {
			bottom: '0',
			left: '10%',
			backgroundColor: 'white',
			color: '#00cb58'
		}
	},
	{
		imgsrc: "/images/banners/banner13.png",
		name: "100x200",
		show: true,
		logostyle: {
			top: '10%',
			left: '10%',
			width: '80%',
			color: 'white'
		},
		titlerows:'5',
		titlestyle: {
			top: '20%',
			left: '10%',
			width: '90%',
			color: 'white'
		},
		bodystyle: {
			bottom: '10%',
			left: '50%',
			transform: 'translateX(-50%)',
			maxWidth: '100%',
			backgroundColor: 'white',
			color: '#00cb58'
		}
	}
	
]*/