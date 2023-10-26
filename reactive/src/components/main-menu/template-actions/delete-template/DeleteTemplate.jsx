import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
    deleteTemplateById,
    findAllTemplates,
} from '../../../../services/template';

function DeleteTemplate({ availableTemplates, setAvailableTemplates }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    function handleImportClick() {
        if (availableTemplates.length === 0) {
            console.log('No templates available for deletion.');
            // TOAST ^
        } else {
            console.log(
                'There are ' +
                    availableTemplates.length +
                    ' templates available for deletion.'
            );
            // TOAST ^
            setShow(true);
        }
    }

    function handleDeleteTemplateClick(template) {
        deleteTemplateById(template.templateId)
            .then(() => {
                findAllTemplates()
                    .then(setAvailableTemplates)
                    .catch((error) => {
                        console.error(error);
                        // TOAST ^
                    });
                // TOAST SUCCESS ^
            })
            .catch((error) => {
                console.log(error);
                // TOAST ^
            });

        setShow(false);
    }

    return (
        <>
            <Button variant="danger mb-3 me-3" onClick={handleImportClick}>
                Delete Template
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Template</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Select a template to delete
                    <br />
                    {availableTemplates.map((template) => {
                        return (
                            <>
                                <button
                                    className="mb-3 me-3 btn-primary"
                                    onClick={() =>
                                        handleDeleteTemplateClick(template)
                                    }
                                >
                                    {template.templateName}
                                </button>
                                <br />
                            </>
                        );
                    })}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteTemplate;
