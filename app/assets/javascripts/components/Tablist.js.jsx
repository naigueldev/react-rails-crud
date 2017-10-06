

// var tabList = [
// { 'id': 1, 'name': 'Question 1', 'url': '/question1' },
// { 'id': 2, 'name': 'Question 2', 'url': '/question2' },
// { 'id': 3, 'name': 'Question 3', 'url': '/question3' },
// { 'id': 4, 'name': 'Question 4', 'url': '/question4' },
// { 'id': 5, 'name': 'Question 5', 'url': '/question5' }
// ];

// var Tab = React.createClass({
// 	handleClick: function(e){
// 		e.preventDefault();
// 		this.props.handleClick();
// 	},

// 	render: function(){
// 		return (
// 			<li className="nav-item">
// 			<a className={this.props.isCurrent ? 'active nav-link' : null+" nav-link"} onClick={this.handleClick} href={this.props.url}>
// 			{this.props.name}
// 			</a>
// 			</li>
// 			);
// 	}
// });

// var Tabs = React.createClass({
// 	handleClick: function(tab){
// 		this.props.changeTab(tab);
// 	},

// 	render: function(){
// 		return (

// 			<div className="container">
// 			<ul className="nav nav-pills nav-fill">

// 			{this.props.tabList.map(function(tab) {

// 				return (
// 					<Tab
// 					handleClick={this.handleClick.bind(this, tab)}
// 					key={tab.id}
// 					url={tab.url}
// 					name={tab.name}
// 					isCurrent={(this.props.currentTab === tab.id)}
// 					/>
// 					);
// 			}.bind(this))}

// 			</ul>

// 			</div>
// 			);
// 	}
// });

// var Content = React.createClass({
// 	render: function(){
// 		return(
// 			<div className="content">

// 			{this.props.currentTab === 1 ?
// 				<div className="question1">
// 				<img src="https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
// 				</div>
// 				:null
// 			}

// 			{this.props.currentTab === 2 ?
// 				<div className="question2">
// 				<img src="https://reactjs.org/logo-og.png" />
// 				</div>
// 				:null
// 			}

// 			{this.props.currentTab === 3 ?
// 				<div className="question3">
// 				<img src="https://pbs.twimg.com/profile_images/691206086955790336/CDMbA57p.png" />
// 				</div>
// 				:null
// 			}

// 			{this.props.currentTab === 4 ?
// 				<div className="question4">
// 				<img src="https://www.inkitt.com/1024_onblack-min.png" />
// 				</div>
// 				:null
// 			}
// 			{this.props.currentTab === 5 ?
// 				<div className="question5">
// 				<img src="https://pbs.twimg.com/profile_images/691206086955790336/CDMbA57p.png" />
// 				</div>
// 				:null
// 			}
// 			</div>
// 			);
// 	}
// });

// var App = React.createClass({
// 	getInitialState: function () {        
// 		return {
// 			tabList: tabList,
// 			currentTab: 1
// 		};
// 	},

// 	changeTab: function(tab) {
// 		this.setState({ currentTab: tab.id });
// 	},

// 	render: function(){
// 		return(
// 			<div>
// 			<Tabs
// 			currentTab={this.state.currentTab}
// 			tabList={this.state.tabList}
// 			changeTab={this.changeTab}
// 			/>
// 			<Content currentTab={this.state.currentTab} />
// 			</div>
// 			);
// 	}
// });

// var mainTab = React.createClass({
// 	render() {
// 		return (
// 			<App />
// 			)
// 	}
// });
