import React from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

class ResourceModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleHide = this.handleHide.bind(this);
    }

    handleHide() {
        this.props.onHide()
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {this.props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span dangerouslySetInnerHTML={{__html: this.props.content}} />>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="link" href={this.props.link}>Visit Resource</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ResourceModal;