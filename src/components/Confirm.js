import PropTypes from "prop-types"
import React, { Component, Fragment } from "react"
import styled from "styled-components"

import i18n from "i18n"

import { Button, Content, Heading, Modal } from "react-bulma-components"

import Icon from "./Icon"

const StyledModal = styled(Modal)`
    .modal-content {
        background: #FFFFFF;
        padding: 2rem;
    }
    .modal__actions {
        text-align: right;
    }
    .button {
        margin-left: .5rem;
    }
`

class Confirm extends Component {

    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.array
        ]).isRequired,
        message: PropTypes.string.isRequired,
        onConfirm: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
    }

    state = {
        show: false
    }

    render() {

        return (
            <Fragment>
                { this.renderModal() }
                { this.cloneChildren() }
            </Fragment>
        )
    }

    cloneChildren = () => {
        const { children } = this.props
        const { props, type } = children
        return React.createElement(type, { ...props, onClick: this.showModal }, props.children)
    }

    renderModal() {
        const { message, title } = this.props
        const { show } = this.state
        return (
            <StyledModal onClose={ this.closeModal } show={ show }>
                <Modal.Content>
                    <Heading renderAs="h3" size={ 3 }>{ title }</Heading>
                    <Content>{ message }</Content>
                    <div className="modal__actions">
                        <Button color="danger" onClick={ this.closeModal }>
                            <Icon icon="times" withMargin/>
                            { i18n.t("buttons.no") }
                        </Button>
                        <Button color="primary" onClick={ this.onConfirm }>
                            <Icon icon="check" withMargin/>
                            { i18n.t("buttons.yes") }
                        </Button>
                    </div>
                </Modal.Content>
            </StyledModal>
        )
    }

    closeModal = () => this.toggleModal()

    onConfirm = () => {
        const { onConfirm } = this.props
        onConfirm()
        this.toggleModal()
    }

    showModal = () => this.toggleModal()

    toggleModal = () => this.setState(({ show }) => ({ show: !show }))

}

export default Confirm
