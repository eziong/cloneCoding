import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";
import { useConversations } from "../contexts/ConversationsProvider";

export default function NewConversationModal({ closeModal }) {
    const [selectedContactIds, setSelectedContactIds] = useState([]);
    const { contacts } = useContacts();
    const { createConversation } = useConversations();

    const handleCheckboxChange = (contactId) => {
        setSelectedContactIds((prevSelectedContactIds) => {
            if (prevSelectedContactIds.includes(contactId)) {
                return prevSelectedContactIds.filter((prevId) => {
                    return contactId !== prevId;
                });
            } else {
                return [...prevSelectedContactIds, contactId];
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        createConversation(selectedContactIds);
        closeModal();
    };
    return (
        <div>
            <Modal.Header closeButton>Create Conversation</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {contacts.map((contact) => {
                        return (
                            <Form.Group
                                controlId={contacts.id}
                                key={contact.id}
                            >
                                <Form.Check
                                    type="checkbox"
                                    value={selectedContactIds.includes(
                                        contact.id
                                    )}
                                    label={contact.name}
                                    onChange={() =>
                                        handleCheckboxChange(contact.id)
                                    }
                                />
                            </Form.Group>
                        );
                    })}
                    <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </div>
    );
}
