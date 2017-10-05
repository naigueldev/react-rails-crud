var NewItem= React.createClass({
    handleClick() {
        var name    = this.refs.name.value;
        var description = this.refs.description.value;
        $.ajax({
            url: '/api/v1/items',
            type: 'POST',
            data: { item: { name: name, description: description } },
            success: (item) => {
                this.props.handleSubmit(item);
            }
        });
    },
    render() {
        return (


                <div className="container">
                    <div className="row well">
                        <div className="col-md-6 ol-md-offset-3  col-xs-6 col-xs-offset-3">
                            <h3 className="text-center">Basic Example</h3>
                            <div>
                                <ul className="list-group checked-list-box">
                                    <li className="list-group-item">
                                        <span className="state-icon glyphicon glyphicon-unchecked"></span>
                                        Cras justo odio
                                        <input type="checkbox" className="hidden" />
                                    </li>

                                    <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="option" value=""/>
                    Get Groceries
                    </label>
                        <input ref='name' placeholder='Enter the name of the item' />
                        <input ref='description' placeholder='Enter a description' />
                        <button onClick={this.handleClick}>Submit</button>
                                    </ul>
                                </div>
                            </div>
                        </div>
                </div>


        )
    }
});
