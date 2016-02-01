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
		if (this.props.lightbox) {
			return (
				<div className="lightbox">
					<div className="lightbox__flex">
						<div onClick={this.getPrevImg} className="lightbox__arrow lightbox__arrow--prev">
							<img src="images/arrow.png" />
						</div>
						<div className="lightbox__image">
							<img src={ imgsrc } />
							titleimg
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

var BannerThumb = React.createClass({
	handleClick: function() {
		console.log('clicked' + this.props.imgid);
		this.props.onImgChange(this.props.imgid);
	},
	render: function() {
		var thumbClick = this.handleClick;
		return ( 
			<div onClick={thumbClick} className="thumb"> 
				<img src={this.props.imgdata.imgsrc} />
				<div className="thumb__text thumb__text--title" style={this.props.imgdata.titlestyle} >
					{this.props.titletxt}
				</div> 
				<div className="thumb__text thumb__text--body" style={this.props.imgdata.bodystyle} >
					{this.props.bodytxt}
				</div> 
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
				<BannerThumb onImgChange={self.handleImgChange} titletxt={self.props.titletxt} bodytxt={self.props.bodytxt} imgid={index} imgdata={item} />
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
			body: ''
		}
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
	render: function() {
		return (
			<div className="edit"> 
				<div className="edit__item edit__title">
					Edit Copy
				</div>
				<form>
					<input className="edit__item edit__area" placeholder="title" type="text" value={this.state.title} onChange={this.handleTitleChange} /> 
					<textarea rows="10" className="edit__item edit__area" placeholder="Add some copy to the body" type="text" value={this.state.body} onChange={this.handleBodyChange} /> 
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
		this.setState({ bodytxt: bodytxt });
	},
	handleLightboxClose: function() {
		this.setState({ lightbox: false });
	},
	render: function() {
		return (
			<div>
				<div className="container">
					<BannerCollection onImgChange={this.handleImgChange} titletxt={this.state.titletxt} bodytxt={this.state.bodytxt} metadata={this.props.metadata} />
					<BannerEdit onCopyChange={this.handleCopyChange} />
				</div>
				<Lightbox onImgChange={this.handleImgChange} metadata={this.props.metadata} imgindex={this.state.imgindex} onLightboxClose={this.handleLightboxClose} lightbox={this.state.lightbox} />
			</div>
		)
	}
});


ReactDOM.render(
  <BannerApp metadata={ LAZYOBJ } />,
  document.getElementById('content')
);