var React = require('react');

var ForumAddAnswerBox = React.createClass({

    getInitialState: function () {
        return {
            value: ''
        };
    },

    _addAnswer: function () {
        this.props.onAddAnswer(this.state.value);
        this.setState({
            value: ''
        });
    },

    render: function () {
        return (
            <div>
                <textarea id="addAnswer" className="form-control col-md-6 col-xs-8" value={this.state.value} onChange={this._onChange} />
                <input type="button" className="btn btn-primary" value="Add" onClick={this._addAnswer} />
            </div>
        );
    },

    _onChange: function (event) {
        this.setState({
            value: event.target.value
        });
    }

});

module.exports = ForumAddAnswerBox;