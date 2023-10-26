import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CanvasColorContext from '../../../../context/CanvasColorContext';
import CurrentTemplateContext from '../../../../context/CurrentTemplateContext';
import DataRateContext from '../../../../context/DataRateContext';
import EffectInFocusContext from '../../../../context/EffectInFocusContext';
import ShapeInFocusContext from '../../../../context/ShapeInFocusContext';
import ShapePropsArrayContext from '../../../../context/ShapePropsArrayContext';
import { findTemplateById } from '../../../../services/template';

function ImportTemplate({ availableTemplates }) {
    const { setShapePropsArray } = useContext(ShapePropsArrayContext);
    const { setCurrentTemplate } = useContext(CurrentTemplateContext);
    const { setShapeInFocus } = useContext(ShapeInFocusContext);
    const { setEffectInFocus } = useContext(EffectInFocusContext);
    const { setDataRate } = useContext(DataRateContext);
    const { setCanvasColor } = useContext(CanvasColorContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    function handleImportClick() {
        if (availableTemplates.length === 0) {
            console.log('No templates available for import.');
            // TOAST
        } else {
            console.log(
                'There are ' +
                    availableTemplates.length +
                    ' templates available for import.'
            );
            //TOAST ^
            setShow(true);
        }
    }

    function makeRandomUniqueId(length) {
        let result = '';
        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
            counter += 1;
        }
        return result;
    }

    function handleSetTemplateClick(template) {
        findTemplateById(template.templateId)
            .then((completedTemplate) => {
                
                for (let i = 0; i < completedTemplate.shapes.length; i++) {
                    completedTemplate.shapes[i] = {...completedTemplate.shapes[i], uniqueId: makeRandomUniqueId(8)}
                }

                console.log("Imported with uniqueId")
                console.log(completedTemplate)
                // TODO: DELETE CONSOLE LOGS
                
                setCurrentTemplate(completedTemplate);
                setShapePropsArray(completedTemplate.shapes);
                setShapeInFocus(null);
                setEffectInFocus(null);
                setDataRate(completedTemplate.dataRate);
                setCanvasColor(completedTemplate.canvasColor);
                // TOAST ^
            })
            .catch((error) => {
                console.log(error);
                // TOAST ^
            });

        setShow(false);
    }

    return (
        <>
            <Button variant="secondary mb-3 me-3" onClick={handleImportClick}>
                Import Template
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Import Template</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Select a template to import
                    <br />
                    {availableTemplates.map((template) => {
                        return (
                            <>
                                <button
                                    className="mb-3 me-3 btn-primary"
                                    onClick={() =>
                                        handleSetTemplateClick(template)
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

export default ImportTemplate;
