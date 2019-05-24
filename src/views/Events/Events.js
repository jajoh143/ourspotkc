import React from "react";
import EventsPage from "./EventsPage";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <EventsPage events={this.state.events} />
      </div>
    );
  }
}

export default Events;
