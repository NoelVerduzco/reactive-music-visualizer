const BASE_URL = 'http://localhost:8080/api/template';

export async function findAllTemplates() {
	const response = await fetch(BASE_URL);
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(
			new Error(`Unexpected status code ${response.status}`)
		);
	}
}

export async function findTemplateById(templateId) {
	const response = await fetch(`${BASE_URL}/${templateId}`);
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(
			new Error(`Unexpected status code ${response.status}`)
		);
	}
}

async function addTemplate(template) {
	const config = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(template),
	};
	const response = await fetch(BASE_URL, config);

	if (response.ok) {
		return null;
	} else if (response.status === 400) {
		return response.json();
	} else {
		return Promise.reject(
			new Error(`Unexpected status code ${response.status}`)
		);
	}
}

async function updateTemplate(template) {
	const config = {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(template),
	};
	const response = await fetch(`${BASE_URL}/${template.templateId}`, config);

	if (response.ok) {
		return null;
	} else if (response.status === 400) {
		return response.json();
	} else {
		return Promise.reject(
			new Error(`Unexpected status code ${response.status}`)
		);
	}
}

export async function save(template) {
	return template.templateId > 0
		? updateTemplate(template)
		: addTemplate(template);
}

export async function deleteTemplateById(templateId) {
	const config = {
		method: 'DELETE',
	};
	const response = await fetch(`${BASE_URL}/${templateId}`, config);
	if (response.ok) {
		return null;
	} else {
		return Promise.reject(
			new Error(`Unexpected status code ${response.status}`)
		);
	}
}
