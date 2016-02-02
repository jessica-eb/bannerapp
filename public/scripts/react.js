var Lightbox = React.createClass({
	handleClose: function() {
		this.props.onLightboxClose();
	},
	getNextImg: function() {
		var newindex = ((this.props.imgindex + 1) + this.props.metadata.length) % this.props.metadata.length;
		this.props.onImgChange(newindex);
	},
	getPrevImg: function() {
		var newindex = ((this.props.imgindex - 1) + this.props.metadata.length) % this.props.metadata.length;
		this.props.onImgChange(newindex);
	},
	render: function() {
		var index = this.props.imgindex;
		var imgsrc = this.props.metadata[index].imgsrc;
		var imgdata = this.props.metadata[index];
		var lightboxval = true;
		if (this.props.lightbox) {
			return (
				<div className="lightbox">
					<div className="lightbox__flex">
						<div onClick={this.getPrevImg} className="lightbox__arrow lightbox__arrow--prev">
							<img src="images/arrow.png" />
						</div>
						<div className="lightbox__image">
							<img src={ imgsrc } />
							<BannerContent onCopyChange={this.props.onCopyChange} lightbox={lightboxval} titletxt={this.props.titletxt} bodytxt={this.props.bodytxt} imgdata={imgdata} />
						</div>
						<div onClick={this.getNextImg} className="lightbox__arrow">
							<img src="images/arrow.png" />
						</div>
					</div>
					<div onClick={this.handleClose} className="lightbox__close">
						<img src="images/cross.png" />
					</div>
				</div>
			)
		} else {
			return <div></div>
		}
	}
});

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
		var lightboxfont;
		var logosrc;
		if (this.props.lightbox) {
			lightboxfont = { fontSize: '50px' }
		} else {
			lightboxfont = { fontSize: '20px' }
		}
		
		logosrc = "/images/eblogo-" + this.props.imgdata.logostyle.color + ".png";
		return (
			<div style={lightboxfont} > 
				<div className="thumb__logo" style={this.props.imgdata.logostyle} >
					<img src={logosrc} />
				</div>
				<textarea rows='3' className="thumb__text thumb__text--title" value={this.props.titletxt} style={this.props.imgdata.titlestyle} onChange={this.handleTitleChange}/>
				<div className="thumb__text thumb__text--body" style={this.props.imgdata.bodystyle}>
					{this.props.bodytxt}
				</div>
			</div>
		)
	}
});

var BannerThumb = React.createClass({
	handleClick: function() {
		this.props.onImgChange(this.props.imgid);
	},
	render: function() {
		var thumbClick = this.handleClick;
		var lightboxval = false;
		return ( 
			<div onClick={thumbClick} className="thumb"> 
				<img src={this.props.imgdata.imgsrc} />
				<BannerContent onCopyChange={this.props.onCopyChange} lightbox={lightboxval} titletxt={this.props.titletxt} bodytxt={this.props.bodytxt} imgdata={this.props.imgdata} />
			</div>
		)
	}
});

var BannerCollection = React.createClass({
	handleImgChange: function(imgindex) {
		this.props.onImgChange(imgindex);
	},
	render: function() {
		var self = this;
		var thumbNodes = this.props.metadata.map(function(item, index) {
			return (
				<BannerThumb onCopyChange={self.props.onCopyChange} onImgChange={self.handleImgChange} titletxt={self.props.titletxt} bodytxt={self.props.bodytxt} imgid={index} imgdata={item} />
			)
		});
		return (
			<div id="main" className="collection">
				{thumbNodes}
			</div>
		)
	}
});



var BannerEdit = React.createClass({
	getInitialState: function() {
		return {
			title: '',
			body: '',
			showEdit: "edit"
		}
	},
	componentDidReceiveProps: function() {
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
	handleBodyChange: function(e) {
		this.setState({ body: e.target.value },
			function() {
				this.handleCopyChange()
			}
		);
	},
	handleCopyChange: function() {
		this.props.onCopyChange(this.state.title, this.state.body);
	},
	handleHide: function() {
		if (this.state.showEdit === "edit") {
			this.setState({ showEdit: "edit edit--hide"} );
		} else {
			this.setState({ showEdit: "edit" })
		}
	},
	render: function() {
		return (
			<div className={this.state.showEdit} > 
				<div onClick={this.handleHide} className="edit__item edit__title">
					Edit Copy
				</div>
				<form>
					<input className="edit__item edit__area" placeholder="title" type="text" value={this.props.titletxt} onChange={this.handleTitleChange} /> 
					<textarea rows="10" className="edit__item edit__area" placeholder="button text" type="text" value={this.props.bodytxt} onChange={this.handleBodyChange} /> 
				</form>
			</div>
		)
	}
});

var BannerApp = React.createClass({
	getInitialState: function() {
		return {
			titletxt: '',
			bodytxt: '',
			imgindex: 0,
			lightbox: false
		}
	},
	handleImgChange: function(imgindex) {
		this.setState({ imgindex: imgindex });
		this.setState({ lightbox: true });
	},
	handleCopyChange: function(titletxt, bodytxt) {
		this.setState({ titletxt: titletxt });
		if (bodytxt) {
			this.setState({ bodytxt: bodytxt });
		}
	},
	handleLightboxClose: function() {
		this.setState({ lightbox: false });
	},
	render: function() {
		console.log("FRONT TOP: " + this.state.bodytxt);
		return (
			<div>
				<div className="container">
					<BannerCollection onCopyChange={this.handleCopyChange} onImgChange={this.handleImgChange} titletxt={this.state.titletxt} bodytxt={this.state.bodytxt} metadata={this.props.metadata} />
					<BannerEdit onCopyChange={this.handleCopyChange} titletxt={this.state.titletxt} bodytxt={this.state.bodytxt} />
				</div>
				<Lightbox onCopyChange={this.handleCopyChange} onImgChange={this.handleImgChange} titletxt={this.state.titletxt} bodytxt={this.state.bodytxt} metadata={this.props.metadata} imgindex={this.state.imgindex} onLightboxClose={this.handleLightboxClose} lightbox={this.state.lightbox} />
			</div>
		)
	}
});


ReactDOM.render(
  <BannerApp metadata={ LAZYOBJ } />,
  document.getElementById('content')
);