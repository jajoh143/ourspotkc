import React from "react";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
class Searchbar extends React.Component {
  render() {
    var searchbarStyle = {
      margin: "5px"
    };

    return (
      <div style={searchbarStyle}>
        <InputGroup>
          <FormControl
            placeholder="Enter search term here"
            aria-label="SearchBar"
            onChange={this.props.handleInput}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}

export default Searchbar;
