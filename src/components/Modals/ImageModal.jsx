import React from 'react'
import { Button, Modal } from 'flowbite-react';

function ImageModal({ isOpen, setIsOpen, children }) {
    return (
        <Modal dismissible show={isOpen} onClose={() => setIsOpen(false)}>
            <Modal.Header>Terms of Service</Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setIsOpen(false)}>I accept</Button>
                <Button color="gray" onClick={() => setIsOpen(false)}>
                    Decline
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ImageModal