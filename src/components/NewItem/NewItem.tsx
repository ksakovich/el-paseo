import React, { Component } from 'react';

import './NewItem.css';

class NewItem extends Component
{
    state = {
        title: '',
        content: '',
        author: 'Me'
    }

    render()
    {
        return (
            <div className="NewItem">
                <h1>Add a Item</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows={4} value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button>Add Post</button>
            </div>
        );
    }
}

export default NewItem;