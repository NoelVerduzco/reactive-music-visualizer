package capstone.reactive_api.controllers;

import capstone.reactive_api.domain.Result;
import capstone.reactive_api.domain.ResultType;
import capstone.reactive_api.domain.services.TemplateService;
import capstone.reactive_api.models.Template;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/template")
public class TemplateController {
    private final TemplateService service;

    public TemplateController(TemplateService service) {
        this.service = service;
    }
    
    @GetMapping
    public List<Template> findAll() {
        return service.findAll();
    }

    @GetMapping("/{templateId}")
    public ResponseEntity<Template> findById(@PathVariable int templateId) {
        Template template = service.findById(templateId);
        if (template == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(template, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> add(@RequestBody @Valid Template template, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.BAD_REQUEST);
        }

        Result<Template> result = service.add(template);
        if (!result.isSuccess()) {
            return new ResponseEntity<>(result.getMessages(), HttpStatus.BAD_REQUEST); // 400
        }
        return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED); // 201
    }

    @PutMapping("/{templateId}")
    public ResponseEntity<?> update(@PathVariable int templateId, @RequestBody Template template, BindingResult bindingResult) {

        if (templateId != template.getTemplateId()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT); // 409
        }

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.BAD_REQUEST);
        }

        Result<Template> result = service.update(template);
        if (!result.isSuccess()) {
            if (result.getType() == ResultType.NOT_FOUND) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND); // 404
            } else {
                return new ResponseEntity<>(result.getMessages(), HttpStatus.BAD_REQUEST); // 400
            }
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT); // 204
    }

    @DeleteMapping("/{templateId}")
    public ResponseEntity<Void> delete(@PathVariable int templateId) {
        Result<Template> result = service.deleteById(templateId);
        if (result.getType() == ResultType.NOT_FOUND) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // 404
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT); // 204
    }
}