import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = BigCalendar.momentLocalizer(moment);

class EventsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    var calendarStyle = {
      height: "700px",
      margin: "15px"
    };

    return (
      <div>
        <BigCalendar
          localizer={localizer}
          events={this.props.events}
          startAccessor="start"
          endAccessor="end"
          style={calendarStyle}
        />
      </div>
    );
  }
}

export default EventsPage;
