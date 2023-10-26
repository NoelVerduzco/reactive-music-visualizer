import { useEffect, useState } from 'react';
import { findAllTemplates } from '../../../services/template';
import DeleteTemplate from './delete-template/DeleteTemplate';
import ImportTemplate from './import-template/ImportTemplate';
import SaveTemplate from './save-template/SaveTemplate';

function TemplateActions() {
    const [availableTemplates, setAvailableTemplates] = useState([]);

    useEffect(() => {
        findAllTemplates()
            .then(setAvailableTemplates)
            .catch((error) => {
                console.error(error);
                // TOAST ^
            });
    }, []);

    return (
        <>
            <h3>Template Actions</h3>
            <ImportTemplate availableTemplates={availableTemplates} />
            <SaveTemplate setAvailableTemplates={setAvailableTemplates} />
            <DeleteTemplate
                availableTemplates={availableTemplates}
                setAvailableTemplates={setAvailableTemplates}
            />
        </>
    );
}

export default TemplateActions;
