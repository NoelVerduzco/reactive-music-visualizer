package capstone.reactive_api.domain.services;

import capstone.reactive_api.data.interfaces.TemplateRepository;
import capstone.reactive_api.domain.Result;
import capstone.reactive_api.models.Effect;
import capstone.reactive_api.models.Shape;
import capstone.reactive_api.models.Template;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class TemplateServiceTest {

    @Autowired
    TemplateService service;

    @MockBean
    TemplateRepository repository;

    // TODO: FIND METHODS

    @Test
    void shouldFindAllActive() {
        when(repository.findAll()).thenReturn(List.of(
                new Template(1, "test 1", "red", 10, 1, List.of())
        ));

        List<Template> templates = service.findAll();
        assertEquals(1, templates.size());
    }

    @Test
    void shouldFindById() {
        when(repository.findById(1)).thenReturn(
                new Template(1, "test 1", "red", 10, 1, List.of())
        );

        Template template = service.findById(1);
        assertNotNull(template);
    }

    // TODO: ADD METHOD

    @Test
    void shouldAdd() {
        List<Effect> effects = List.of(makeEffect(1), makeEffect(2), makeEffect(3), makeEffect(4), makeEffect(5));
        Shape shape = makeShape(1);
        shape.setEffects(effects);
        List<Shape> shapes = List.of(shape);
        Template template = makeTemplate(1);
        template.setShapes(shapes);

        when(repository.add(template)).thenReturn(template);

        Result<Template> result = service.add(template);

        assertTrue(result.isSuccess());
        assertNotNull(result.getPayload());
    }

    @Test
    void shouldNotAddWithBlankTemplateName() {
        Template template = makeTemplate(1);
        template.setTemplateName("");

        Result<Template> result = service.add(template);

        assertFalse(result.isSuccess());
        assertEquals(1, result.getMessages().size());
        assertTrue(result.getMessages().get(0).contains("must be named"));
    }

    @Test
    void shouldNotAddWithSetId() {
        Template template = makeTemplate(1);
        template.setTemplateId(1);

        Result<Template> result = service.add(template);

        assertFalse(result.isSuccess());
        assertEquals(1, result.getMessages().size());
        assertTrue(result.getMessages().get(0).contains("set"));
    }

    // TODO: UPDATE METHOD

    @Test
    void shouldUpdate() {
        Template template = makeTemplate(1);
        template.setTemplateId(1);

        when(repository.update(template)).thenReturn(true);

        Result<Template> result = service.update(template);

        assertTrue(result.isSuccess());
    }

    @Test
    void shouldNotUpdateWithBlankTemplateName() {
        Template template = makeTemplate(1);
        template.setTemplateId(1);
        template.setTemplateName("");

        Result<Template> result = service.update(template);

        assertFalse(result.isSuccess());
        assertEquals(1, result.getMessages().size());
        assertTrue(result.getMessages().get(0).contains("must be named"));
    }

    @Test
    void shouldNotUpdateWithNoId() {
        Template template = makeTemplate(1);
        template.setTemplateId(0);

        Result<Template> result = service.update(template);

        assertFalse(result.isSuccess());
        assertEquals(1, result.getMessages().size());
        assertTrue(result.getMessages().get(0).contains("greater than 0"));
    }

    @Test
    void shouldNotUpdateWithMissingIdInDatabase() {
        Template template = makeTemplate(2);
        template.setTemplateId(2);

        when(repository.update(template)).thenReturn(false);

        Result<Template> result = service.update(template);

        assertFalse(result.isSuccess());
        assertEquals(1, result.getMessages().size());
        assertTrue(result.getMessages().get(0).contains("not found"));
    }

    // TODO: DELETE METHOD

    @Test
    void shouldDelete() {
        when(repository.deleteById(1)).thenReturn(true);

        Result<Template> result = service.deleteById(1);

        assertTrue(result.isSuccess());
    }

    @Test
    void shouldNotDeleteNonExistingTemplate() {
        Result<Template> result = service.deleteById(1024);

        assertFalse(result.isSuccess());
        assertEquals(1, result.getMessages().size());
        assertTrue(result.getMessages().get(0).contains("not found"));
    }

    // TODO: HELPER METHODS

    private Effect makeEffect(int i) {
        Effect effect = new Effect();
        // effectId not set
        effect.setEffectName("Effect Name " + i);
        effect.setIsEnabled(false);
        effect.setEffectValue(i);
        effect.setRightChannel(false);
        effect.setFrequencyBin(i);
        // shapeId not set
        return effect;
    }

    private Shape makeShape(int i) {
        Shape shape = new Shape();
        // shapeId not set
        shape.setShapeName("Shape Name " + i);
        shape.setClassName("Reactive shape");
        shape.setShapeColor("#" + i);
        shape.setxPosition(i);
        shape.setyPosition(i);
        // templateId not set
        return shape;
    }

    private Template makeTemplate(int i) {
        Template template = new Template();
        // templateId not set
        template.setTemplateName("Template Name " + i);
        template.setCanvasColor("#" + i);
        template.setDataRate(i);
        template.setIsActive(1);
        return template;
    }
}