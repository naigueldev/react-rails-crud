

var tabList = [
{ 'id': 1, 'name': 'Question 1', 'url': '/question1' },
{ 'id': 2, 'name': 'Question 2', 'url': '/question2' },
{ 'id': 3, 'name': 'Question 3', 'url': '/question3' },
{ 'id': 4, 'name': 'Question 4', 'url': '/question4' },
{ 'id': 5, 'name': 'Question 5', 'url': '/question5' }
];

var Tab = React.createClass({
	handleClick: function(e){
		// alert("clicou");
		e.preventDefault();
		this.props.handleClick();
	},

	render: function(){
		return (
			<li className="nav-item">
			<a className={this.props.isCurrent ? 'active nav-link' : null+" nav-link"} onClick={this.handleClick} href={this.props.url}>
			{this.props.name}
			</a>
			</li>
			);
	}
});

var Tabs = React.createClass({
	handleClick: function(tab){

		// alert("this.props.currentTab = " + this.props.currentTab);
		var classname = document.getElementsByClassName('question-'+this.props.currentTab);
		var count_checked = 0;
		for (var i = 0; i < classname.length; i++) {
			if(classname[i].checked){
				count_checked ++;
			}
		} 

		if (count_checked == 2) {
			alert("count_checked = " + count_checked);
			this.props.changeTab(tab);
		}else{
			alert("NÃO");
		}
	},

	render: function(){
		return (

			<div className="container">
			<ul className="nav nav-pills nav-fill">

			{this.props.tabList.map(function(tab) {

				return (
					<Tab
					handleClick={this.handleClick.bind(this, tab)}
					key={tab.id}
					url={tab.url}
					name={tab.name}
					isCurrent={(this.props.currentTab === tab.id)}
					/>
					);
			}.bind(this))}

			</ul>

			</div>
			);
	}
});


var CurrentTabSelect = React.createClass({
	
	checkValidation: function() {
		alert("checkValidation");

		// var one    = this.refs.one.checked;
		// var two    = this.refs.two.checked;
		// var three    = this.refs.three.checked;
		// var four    = this.refs.four.checked;
		// var five    = this.refs.five.checked;



	},
	render(){
		switch(this.props.currentTab){
			case 1: 
				return(
					<Content
					title = "Title 1 question number one case"
					option_one="option_one fóda"
					option_two="option_two"
					option_three="option_three"
					option_four="option_four"
					option_five="option_five"
					currentTab={this.props.currentTab}
					/>
				);
			break; 
			case 2: 
				return(
					<Content
					title = "Title 2"
					option_one="option_one Dois"
					option_two=" option_two Dois"
					option_three="option_three Dois"
					option_four="option_four Dois"
					option_five="option_five Dois"
					currentTab={this.props.currentTab}
					/>
				);
			break; 
			case 3: 
				return(
					<Content
					title = "Title 3"
					option_one="option_one 3"
					option_two=" option_two 3"
					option_three="option_three 3"
					option_four="option_four 3"
					option_five="option_five 3"
					currentTab={this.props.currentTab}
					/>
				);
			break; 
			case 4: 
				return(
					<Content
					title = "title 4"
					option_one="option_one 4"
					option_two="option_two 4"
					option_three="option_three 4"
					option_four="option_four 4"
					option_five="option_five 4"
					currentTab={this.props.currentTab}
					/>
				);
			break; 
			case 5: 
				return(
					<Content
					title = "title 5"
					option_one="option_one 5"
					option_two="option_two 5"
					option_three="option_three 5"
					option_four="option_four 5"
					option_five="option_five 5"
					currentTab={this.props.currentTab}
					/>
				);
			break;   

		}
	}

});


var Content = React.createClass({

	handleClickAnswer() {
		var one    = this.refs.one.checked;
		var two    = this.refs.two.checked;
		var three    = this.refs.three.checked;
		var four    = this.refs.four.checked;
		var five    = this.refs.five.checked;

		var classname = document.getElementsByClassName('form-check-input');
		var count_checked = 0;
		for (var i = 0; i < classname.length; i++) {
			if(classname[i].checked){
				count_checked ++;
			}
		} 

		if (count_checked == 2) {
			alert("count_checked = " + count_checked);
		}else{
			alert("NÃO");
		}

		// var id = e.target.getAttribute('data-id');
  //       var state = this.state.data.map(function(d) {
  //           return {
  //               id: d.id,
  //               selected: (d.id === id ? !d.selected : d.selected)
  //           };
  //       });


        // var name    = this.refs.name.value;
        // var description = this.refs.description.value;
        // $.ajax({
        //     url: '/api/v1/items',
        //     type: 'POST',
        //     data: { item: { name: name, description: description } },
        //     success: (item) => {
        //         this.props.handleSubmit(item);
        //     }
        // });
    },
    render() {


    	return(
    		<div className="content">

    		{this.props.currentTab != null ?

    			<div className="question1">
    			<div className="container">
    			<div className="row well">
    			<div className="col-md-6 ol-md-offset-3  col-xs-6 col-xs-offset-3">
    			<h3 className="text-center">{this.props.title}</h3>
    			<div>
    			<ul className="list-group checked-list-box">
    			<li className="list-group-item">
    			<label className="form-check-label">
    			<input ref='one' className={"form-check-input question-"+this.props.currentTab} type="checkbox" name="option" value=""/>
    			{this.props.option_one}
    			</label>
    			</li>
    			<li className="list-group-item">
    			<label className="form-check-label">
    			<input ref='two' className={"form-check-input question-"+this.props.currentTab} type="checkbox" name="option" value=""/>
    			{this.props.option_two}
    			</label>
    			</li>
    			<li className="list-group-item">
    			<label className="form-check-label">
    			<input ref='three' className={"form-check-input question-"+this.props.currentTab} type="checkbox" name="option" value=""/>
    			{this.props.option_three}
    			</label>
    			</li>
    			<li className="list-group-item">
    			<label className="form-check-label">
    			<input ref='four' className={"form-check-input question-"+this.props.currentTab} type="checkbox" name="option" value=""/>
    			{this.props.option_four}
    			</label>
    			</li>
    			<li className="list-group-item">
    			<label className="form-check-label">
    			<input ref='five' className={"form-check-input question-"+this.props.currentTab} type="checkbox" name="option" value=""/>
    			{this.props.option_five}
    			</label>
    			</li>

    			<button onClick={this.handleClickAnswer}>Submit</button>
    			</ul>
    			</div>
    			</div>
    			</div>
    			</div>

    			</div>    		
    			:null
    		} 

    		{this.props.currentTab === 2 ?
    			<div className="question2">
    			<img src="https://reactjs.org/logo-og.png" />
    			</div>
    			:null
    		}

    		{this.props.currentTab === 3 ?
    			<div className="question3">
    			<img src="https://pbs.twimg.com/profile_images/691206086955790336/CDMbA57p.png" />
    			</div>
    			:null
    		}

    		{this.props.currentTab === 4 ?
    			<div className="question4">
    			<img src="https://www.inkitt.com/1024_onblack-min.png" />
    			</div>
    			:null
    		}
    		{this.props.currentTab === 5 ?
    			<div className="question5">
    			<img src="https://pbs.twimg.com/profile_images/691206086955790336/CDMbA57p.png" />
    			</div>
    			:null
    		}
    		</div>
    		);
    }
});

var App = React.createClass({
	getInitialState: function () {        
		return {
			tabList: tabList,
			currentTab: 1
		};
	},

	changeTab: function(tab) {
		this.setState({ currentTab: tab.id });
	},

	render: function(){
		return(
			<div>
			<Tabs
			currentTab={this.state.currentTab}
			tabList={this.state.tabList}
			changeTab={this.changeTab}
			/>
			<CurrentTabSelect currentTab={this.state.currentTab} />
			</div>
			);
	}
});

var mainTab = React.createClass({
	render() {
		return (
			<App />
			)
	}
});
