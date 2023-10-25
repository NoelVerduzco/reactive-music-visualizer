package capstone.reactive_api.data.repositories;

import capstone.reactive_api.models.Effect;
import capstone.reactive_api.models.Shape;
import capstone.reactive_api.models.Template;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class TemplateJdbcTemplateRepositoryTest {

    @Autowired
    TemplateJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() { knownGoodState.set(); }

    @Test
    void shouldFindAllActive() {
        List<Template> templates = repository.findAll();
        assertEquals(1, templates.size());
        // TODO: working
    }

    @Test
    void shouldFindById() {
        Template template = repository.findById(1);
        assertEquals(1, template.getTemplateId());
        assertEquals(1, template.getShapes().get(0).getTemplateId());
        assertEquals(1, template.getShapes().get(0).getEffects().get(0).getShapeId());
        // TODO: working
    }

    @Test
    void shouldAddTemplateWithSomeShapes() {
        List<Effect> effects = List.of(makeEffect(1), makeEffect(2), makeEffect(3), makeEffect(4), makeEffect(5));

        Shape shape = makeShape(1);
        shape.setEffects(effects);

        List<Shape> shapes = List.of(shape);

        Template template = makeTemplate(1);
        template.setShapes(shapes);

        Template actual = repository.add(template);
        assertNotNull(actual);

        Template fromRepo = repository.findById(2);
        assertEquals(actual, fromRepo);
        // TODO: debugger shows true
    }

    @Test
    void shouldAddTemplateWithNoShapes() {
        Template template = makeTemplate(1);
        Template actual = repository.add(template);
        assertNotNull(actual);

        Template fromRepo = repository.findById(2);
        assertEquals(actual, fromRepo);
        // TODO: debugger shows true
    }

    @Test
    void shouldUpdate() {
        Template template = makeTemplate(1);
        template.setTemplateId(1);
        boolean actual = repository.update(template);
        assertTrue(actual);
        Template fromRepo = repository.findById(1);
        assertEquals(template, fromRepo);
        // TODO: debugger shows true
    }

    @Test
    void shouldDelete() {
        assertTrue(repository.deleteById(1));
        Template template = repository.findById(1);
        assertEquals(0, template.getIsActive());
        assertEquals(List.of(), repository.findAll());
        // TODO: working
    }

    private Effect makeEffect(int i) {
        Effect effect = new Effect();
        // effectId not set
        effect.setEffectName("Effect Name " + i);
        effect.setEnabled(false);
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