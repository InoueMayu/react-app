import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import axios from 'axios'
import ImageResults from "../image_results/ImageResults"

class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api",
    apiKey: "34724871-17a237e4d9af42cebb39a6117",
    images: [],
  };
  onTextChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then((res) => this.setState({ images: res.data.hits }))
          .catch((err) => console.log(err));
      }
      );
  };

  onAmountChange = (e, index, value) => this.setState({amount: value})
  render() {
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search For Images"
          fullWidth={true}
        />
        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </SelectField>
        <br />
        {this.state.images.length > 0 ? (<ImageResults images={this.state.images}/>) : null}
      </div>
    );
  }
}

export default Search;