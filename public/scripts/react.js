var Draggable = ReactDraggable;

var BannerContent = React.createClass({
	getInitialState: function() {
		return {
			title: '',
			body: ''
		}
	},
	componentWillReceiveProps: function() {
		this.setState({ title: this.props.titletxt });
		this.setState({ body: this.props.bodytxt })
	},
	handleTitleChange: function(e) {
		this.setState({ title: e.target.value },
			function() {
				this.handleCopyChange()
			}
		);
	},
	handleCopyChange: function() {
		this.props.onCopyChange(this.state.title);
	},
	render: function() {
		var logosrc;
		if (!this.props.logoPos) {
			logosrc = "/images/eblogo-" + this.props.imgdata.logostyle.color + ".png";
		} else {
			logosrc = "/images/eblogo-neg-" + this.props.imgdata.logostyle.color + ".png";
		}
		return (
			<div> 
				<div className="thumb__logo" style={this.props.imgdata.logostyle} >
					<img src={logosrc} />
				</div>
				<textarea rows={this.props.imgdata.titlerows} className="thumb__text thumb__text--title" value={this.props.titletxt} style={this.props.imgdata.titlestyle} onChange={this.handleTitleChange}/>
				<div className="thumb__text thumb__text--body" style={this.props.imgdata.bodystyle}>
					{this.props.bodytxt}
				</div>
				<div className="thumb__text" style={this.props.imgdata.substyle} > 
					{this.props.subtxt}
				</div>
			</div>
		)
	}
});

var BannerThumb = React.createClass({
	handleStart: function (event, ui) {
        console.log('Event: ', event);
        console.log('Position: ', ui.position);
    },
    handleDrag: function (event, ui) {
        console.log('Event: ', event);
    	console.log('Position: ', ui.position);
    },

    handleStop: function (event, ui) {
        console.log('Event: ', event);
    	console.log('Position: ', ui.position);
    },
    handleImgScaleUp: function() {
    	this.handleImgScale(0.1);
    },
    handleImgScaleDown: function() {
    	this.handleImgScale(-0.1);
    },
    handleImgScale: function(degree) {
    	this.props.onImgScale(this.props.imgid, degree)
    },
    handleGradToggle: function() {
    	this.props.onGradToggle(this.props.imgid);
    },
	render: function() {
		var thumbClick = this.handleClick;
		var activeStyle = {};
		var activeRainbow = {};
		var imgsrc = this.props.imgdata.imgsrc;
		if (this.props.imgdata.imgGrad) {
			imgsrc = this.props.gradsrc;
			activeRainbow = { webkitFilter: "none" }
		}
		var test_false = false;
		if (!this.props.imgdata.show) {
			activeStyle = {
				display: 'none'
			}
		}
		if (this.props.imgsrc !== '') {
			imgsrc = this.props.imgsrc
		}
		var imgScale = this.props.imgdata.imgScale;
		imgScale = "scale(" + imgScale + ")";
		imgScale = { transform: imgScale };
		return ( 
			<div style={activeStyle}>
				<div className="thumb__divider">
					<div className="thumb__title">
						{this.props.imgdata.name}
					</div>
					<div className="thumb__line">
					</div>
				</div>
				<div className="thumb__content">
					<div className="thumb" style={this.props.imgdata.thumbstyle} > 

						<Draggable 
			                handle=".handle"
			      			bounds={{right: 0, bottom: 0}}
			                onStart={this.handleStart}
			                onDrag={this.handleDrag}
			                onStop={this.handleStop}>

			                <div className="thumb__drag">
			               		<img draggable={test_false} className="handle" style={imgScale} id={this.props.imgdata.name} src={imgsrc} />
			               	</div>

			            </Draggable>

						<BannerContent 
							logoPos={this.props.logoPos} 
							onCopyChange={this.props.onCopyChange} 
							titletxt={this.props.titletxt} 
							bodytxt={this.props.bodytxt} 
							subtxt={this.props.subtxt}
							imgdata={this.props.imgdata} />
					</div>
					<div className="adj">
						<div onClick={this.handleImgScaleUp} className="adj__item">
							<img src="images/icons/plus.png" />
						</div>
						<div onClick={this.handleImgScaleDown} className="adj__item">
							<img src="images/icons/minus.png" />
						</div>
						<div onClick={this.handleGradToggle} className="adj__item adj__item--rainbow" style={activeRainbow}>
							<img src="images/icons/rainbow.png" />
						</div>
					</div>
				</div>
			</div>
		)
	}
});

var BannerCollection = React.createClass({
	render: function() {
		var self = this;
		var thumbNodes = this.props.metadata.map(function(item, index) {
			return (
				<BannerThumb 
					onGradToggle={self.props.onGradToggle}
					onImgScale={self.props.onImgScale}
					logoPos={self.props.logoPos} 
					gradsrc={self.props.gradsrc} 
					imgsrc={self.props.imgsrc} 
					onCopyChange={self.props.onCopyChange} 
					onImgChange={self.handleImgChange} 
					titletxt={self.props.titletxt} 
					bodytxt={self.props.bodytxt} 
					subtxt={self.props.subtxt}
					imgid={index} 
					imgdata={item} />
			)
		});
		return (
			<div id="main" className="collection">
				{thumbNodes}
			</div>
		)
	}
});

var DimField = React.createClass({
	handleClick: function() {
		this.props.onDimClick(this.props.dimIndex);
	},
	render: function() {
		var triggerClick = this.handleClick;
		if (this.props.active) {
			return (
				<div onClick={triggerClick} className="dim dim--active">
					{ this.props.dimName }
				</div>
			)
		} else {
			return (
				<div onClick={triggerClick} className="dim">
					{ this.props.dimName }
				</div>
			)
		}
	}
});

var GradItem = React.createClass({
	handleClick: function() {
		this.props.onGradChange(this.props.color)
	},
	render: function() {
		var gradClass = "edit__gradient__item";
		if (this.props.activeGrad === this.props.color) {
			gradClass = "edit__gradient__item edit__gradient__item--active";
		}
		var gradColor = "gradient__item gradient--" + this.props.color;
		return (
			<div onClick={this.handleClick} className={gradClass} >
				<div className={gradColor}>
				</div>
			</div>
		)
	}
});

var ColorItemTitle = React.createClass({
	render: function() {
		if (this.props.titleLight) {
			return (
				<div onClick={this.props.onTitleColorChange} className="edit__color">
					<div className="edit__color__item color--light">
					</div>
				</div>
			)
		} else {
			return (
				<div onClick={this.props.onTitleColorChange} className="edit__color">
					<div className="edit__color__item color--dark">
					</div>
				</div>
			)
		}
	}
});

var ColorItemButton = React.createClass({
	render: function() {
		var color = this.props.buttonColor;
		var buttonClass = "edit__color__item color--" + color.name;
		return (
			<div onClick={this.props.onButtonColorChange} className="edit__color">
				<div className={buttonClass}>
				</div>
			</div>
		)
	}
});

var EditLogo = React.createClass( {
	render: function() {
		if (this.props.logoPos) {
			return (
				<div onClick={this.props.onLogoChange} className="edit__logo">
					<div className="edit__logo__item ">
						<img src="images/logo-pos.png" />
					</div>
					<div className="edit__logo__item edit__logo__item--active">
						<img src="images/logo-neg.png" />
					</div>
				</div>
			)
		} else {
			return (
				<div onClick={this.props.onLogoChange} className="edit__logo">
					<div className="edit__logo__item edit__logo__item--active">
						<img src="images/logo-pos.png" />
					</div>
					<div className="edit__logo__item ">
						<img src="images/logo-neg.png" />
					</div>
				</div>
			)
		}
	}
})

var BannerEdit = React.createClass({
	getInitialState: function() {
		return {
			title: '',
			body: '',
			sub: '',
			showEdit: "edit",
			imgsrc: ''
		}
	},
	componentDidReceiveProps: function() {
		this.setState({ title: this.props.titletxt });
		this.setState({ body: this.props.bodytxt });
		this.setState({ sub: this.props.subtxt })
	},
	handleTitleChange: function(e) {
		this.setState({ title: e.target.value },
			function() {
				this.handleCopyChange()
			}
		);
	},
	handleBodyChange: function(e) {
		this.setState({ body: e.target.value },
			function() {
				this.handleCopyChange()
			}
		);
	},
	handleSubChange: function(e) {
		this.setState({ sub: e.target.value},
			function() {
				this.handleCopyChange()
			}
		)
	},
	handleCopyChange: function() {
		this.props.onCopyChange(this.state.title, this.state.body, this.state.sub);
	},
	handleNewImg: function(e) {
		this.setState({ imgsrc: e.target.value },
			function() {
				this.props.onNewImg(this.state.imgsrc)
			}
		);
	},
	handleHide: function() {
		if (this.state.showEdit === "edit") {
			this.setState({ showEdit: "edit edit--hide"} );
		} else {
			this.setState({ showEdit: "edit" })
		}
	},
	render: function() {
		var self = this;
		var dimNodes = this.props.metadata.map(function(item, index) {
			return (
				<DimField onDimClick={self.props.onDimClick} dimName={item.name} active={item.show} dimIndex = {index} />
			)
		});
		return (
			<div className={this.state.showEdit} > 
				<div onClick={this.handleHide} className="edit__item edit__title">
					Edit Copy
				</div>
				<div className="edit__line">
				</div>
				<EditLogo logoPos={this.props.logoPos} onLogoChange={this.props.onLogoChange} />
				<div className="edit__item">
					<div className="edit__flex">
						<div>
							<span className="edit__item__title">Title</span> 
							<input className="edit__area" placeholder="edit title text" type="text" value={this.props.titletxt} onChange={this.handleTitleChange} /> 
						</div>
						<ColorItemTitle titleLight={this.props.titleLight} onTitleColorChange={this.props.onTitleColorChange} />
					</div>
				</div>
				<div className="edit__item">
					<div className="edit__flex">
						<div>
							<span className="edit__item__title">Subtitle</span> 
							<input className="edit__area" placeholder="edit subtitle text" type="text" value={this.props.subtxt} onChange={this.handleSubChange} /> 
						</div>
					</div>
				</div>
				<div className="edit__item">
					<div className="edit__flex">
						<div>
							<span className="edit__item__title">Button</span> 
							<input className="edit__area" placeholder="edit button text" type="text" value={this.props.bodytxt} onChange={this.handleBodyChange} /> 
						</div>
						<ColorItemButton buttonColor={this.props.buttonColor} onButtonColorChange={this.props.onButtonColorChange} />
					</div>
				</div>
				<div className="edit__item">
					<span className="edit__item__title">Image Source</span>
					<input className="edit__area" placeholder="image source" type="text" value={this.props.imgsrc} onChange={this.handleNewImg} />
				</div>
				<div className="edit__gradient">
					<GradItem onGradChange={this.props.onGradChange} activeGrad={this.props.activeGrad} color="green" />
					<GradItem onGradChange={this.props.onGradChange} activeGrad={this.props.activeGrad} color="blue" />
					<GradItem onGradChange={this.props.onGradChange} activeGrad={this.props.activeGrad} color="red" />
				</div>
				<div className="edit__dims">
					{ dimNodes }
				</div>
				<div className="edit__export">
					Export as JPEG
				</div>
			</div>
		)
	}
});

var BannerApp = React.createClass({
	getInitialState: function() {
		return {
			titletxt: '',
			bodytxt: '',
			subtxt: '',
			logoPos: false,
			titleLight: true,
			buttonColorIndex: 0,
			buttonColor: this.props.buttonColors[0],
			metadata: this.props.metadata,
			imgsrc: '',
			activeGrad: 'green',
			gradsrc: 'images/banners/green.png',
		}
	},
	handleGradToggle: function(index) {
		var metadata = this.state.metadata;
		metadata[index].imgGrad = !metadata[index].imgGrad;
		this.setState({ metadata: metadata })
	},
	handleImgScale: function(index, degree) {
		var metadata = this.state.metadata;
		metadata[index].imgScale = metadata[index].imgScale + degree;
		this.setState({ metadata: metadata })
	},
	handleGradChange: function(color) {
		var gradsrc = "images/banners/"+color+".png";
		this.setState({ activeGrad: color });
		this.setState({ gradsrc: gradsrc });
	},
	handleNewImg: function(imgsrc) {
		this.setState({ imgsrc: imgsrc })
	},
	handleButtonColorChange: function() {
		var currentIndex = ((((this.state.buttonColorIndex + 1) % 5) + 5) % 5);
		var buttonColor = this.props.buttonColors[currentIndex];
		var metadata = this.state.metadata;
		metadata.forEach(function(item) {
			item.bodystyle.backgroundColor = buttonColor.style.backgroundColor;
			item.bodystyle.color = buttonColor.style.color;
		})
		this.setState({ buttonColorIndex: currentIndex });
		this.setState({ buttonColor: buttonColor });
		this.setState({ metadata: metadata });
	},
	handleTitleColorChange: function() {
		var titleLight = this.state.titleLight;
		var metadata = this.state.metadata;
		if (titleLight) {
			metadata.forEach(function(item) {
				item.titlestyle.color = "#282c35";
				item.substyle.color = "#282c35"
			});
		} else {
			metadata.forEach(function(item) {
				item.titlestyle.color = "#f8faff";
				item.substyle.color = "#f8faff"
			});
		}
		titleLight = !this.state.titleLight;
		this.setState( { titleLight: titleLight });
		this.setState( { metadata: metadata })
	},
	handleCopyChange: function(titletxt, bodytxt, subtxt) {
		this.setState({ titletxt: titletxt });
		if (bodytxt) {
			this.setState({ bodytxt: bodytxt });
		}
		if (subtxt) {
			this.setState({ subtxt: subtxt })
		}
	},
	handleLogoChange: function() {
		var logoPos = !this.state.logoPos;
		this.setState({ logoPos: logoPos })
	},
	handleDimClick: function(dimIndex) {
		var meta = this.state.metadata;
		var show = meta[dimIndex].show;
		meta[dimIndex].show = !show;
		this.setState({	metadata: meta });
	},
	render: function() {
		return (
			<div>
				<div className="container">
					<BannerCollection 
						onGradToggle={this.handleGradToggle}
						onImgScale={this.handleImgScale}
						logoPos={this.state.logoPos} 
						gradsrc={this.state.gradsrc} 
						imgsrc={this.state.imgsrc} 
						onCopyChange={this.handleCopyChange} 
						onImgChange={this.handleImgChange} 
						titletxt={this.state.titletxt} 
						bodytxt={this.state.bodytxt} 
						subtxt={this.state.subtxt}
						metadata={this.state.metadata} />
					<BannerEdit 
						buttonColor = {this.state.buttonColor}
						onButtonColorChange={this.handleButtonColorChange}
						titleLight={this.state.titleLight}
						onTitleColorChange={this.handleTitleColorChange}
						logoPos={this.state.logoPos} 
						onLogoChange={this.handleLogoChange} 
						onGradChange={this.handleGradChange} 
						activeGrad={this.state.activeGrad} 
						imgsrc={this.state.imgsrc} 
						onNewImg={this.handleNewImg} 
						onDimClick={this.handleDimClick} 
						onCopyChange={this.handleCopyChange} 
						subtxt={this.state.subtxt}
						titletxt={this.state.titletxt} 
						bodytxt={this.state.bodytxt} 
						metadata={this.state.metadata} />
				</div>	
			</div>
		)
	}
});


ReactDOM.render(
  <BannerApp metadata={ LAZYOBJ } buttonColors={ BUTTON_COLORS } />,
  document.getElementById('content')
);