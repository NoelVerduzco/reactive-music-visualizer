package capstone.reactive_api.domain.services;

import capstone.reactive_api.data.interfaces.TemplateRepository;
import capstone.reactive_api.domain.Result;
import capstone.reactive_api.domain.ResultType;
import capstone.reactive_api.models.Template;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validator;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class TemplateService {
    private final TemplateRepository repository;
    private final Validator validator;

    public TemplateService(TemplateRepository repository, Validator validator) {
        this.repository = repository;
        this.validator = validator;
    }

    public List<Template> findAll() {
        return repository.findAll();
    }

    public Template findById( int templateId ) {
        return repository.findById(templateId);
    }

    public Result<Template> add(Template template) {
        Result<Template> result = validate(template);

        if (template != null && template.getTemplateId() > 0) {
            result.addMessage("Template ID should not be set.", ResultType.INVALID);
        }

        if (result.isSuccess()) {
            template = repository.add(template);
            result.setPayload(template);
        }

        return result;
    }

    public Result<Template> update(Template template) {
        Result<Template> result = validate(template);

        if (template.getTemplateId() <= 0) {
            result.addMessage("Template ID must be greater than 0.", ResultType.INVALID);
        }

        if (result.isSuccess()) {
            if (repository.update(template)) {
                result.setPayload(template);
            } else {
                result.addMessage("Template with ID " + template.getTemplateId() + " was not found.", ResultType.NOT_FOUND);
            }
        }

        return result;
    }

    public Result<Template> deleteById(int templateId) {
        Result<Template> result = new Result<>();

        if (!repository.deleteById(templateId)) {
            result.addMessage("Template with ID " + templateId + " was not found.", ResultType.NOT_FOUND);
        }

        return result;
    }

    private Result<Template> validate(Template template) {
        Result<Template> result = new Result<>();
        Set<ConstraintViolation<Template>> violations = validator.validate((template));
        for(ConstraintViolation<Template> violation : violations) {
            result.addMessage(violation.getMessage(), ResultType.INVALID);
        }

        return result;
    }
}
