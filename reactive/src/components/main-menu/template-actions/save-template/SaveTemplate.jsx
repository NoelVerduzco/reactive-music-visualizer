import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import toast from 'react-hot-toast';
import CanvasColorContext from '../../../../context/CanvasColorContext';
import CurrentTemplateContext from '../../../../context/CurrentTemplateContext';
import DataRateContext from '../../../../context/DataRateContext';
import ShapePropsArrayContext from '../../../../context/ShapePropsArrayContext';
import { findAllTemplates, save } from '../../../../services/template';

function SaveTemplate({ setAvailableTemplates }) {
    const { currentTemplate, setCurrentTemplate } = useContext(
        CurrentTemplateContext
    );
    const { shapePropsArray } = useContext(ShapePropsArrayContext);
    const { canvasColor } = useContext(CanvasColorContext);
    const { dataRate } = useContext(DataRateContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleUpdateTemplateBeforeSave(e) {
        let copiedTemplate = { ...currentTemplate };
        copiedTemplate.templateName = e.target.value;
        copiedTemplate.canvasColor = canvasColor;
        copiedTemplate.dataRate = dataRate;
        copiedTemplate.shapes = shapePropsArray;
        setCurrentTemplate(copiedTemplate);
    }

    function handleSaveClick() {
        save(currentTemplate)
            .then((errors) => {
                if (!errors) {
                    if (currentTemplate.templateId > 0) {
                        toast.success('Template successfully updated!');
                    } else {
                        toast.success('Template successfully saved!');
                    }
                    findAllTemplates()
                        .then(setAvailableTemplates)
                        .catch((error) => {
                            toast.error(error);
                        });
                } else {
                    toast.error(errors);
                }
            })
            .catch((error) => {
                toast.error(error);
            });
        setShow(false);
    }

    return (
        <>
            <Button variant="primary me-3 mb-3" onClick={handleShow}>
                Save Template
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Save Template</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label
                                htmlFor="template-name"
                                className="form-label"
                            >
                                Template Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="template-name"
                                aria-describedby="note"
                                onChange={(e) =>
                                    handleUpdateTemplateBeforeSave(e)
                                }
                            />
                            <div id="note" className="form-text">
                                I hope you enjoyed!
                            </div>
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleSaveClick}>
                        Save
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SaveTemplate;
