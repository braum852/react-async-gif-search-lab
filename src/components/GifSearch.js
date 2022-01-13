import React from 'react';

export default  class GifSearch extends React.Component {
    state = {
        query: ""
    }

handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.query)
}

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
        <input type="text" name="firstName" onChange={event => this.setState({query: event.target.value})} value={this.state.query} />
      </form>

        )}

}
