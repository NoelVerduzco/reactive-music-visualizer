package capstone.reactive_api.data.repositories;

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
    }

    @Test
    void shouldFindById() {
        Template template = repository.findById(1);
        assertEquals(1, template.getTemplateId());
        assertEquals(1, template.getShapes().get(0).getTemplateId());
        assertEquals(1, template.getShapes().get(0).getEffects().get(0).getShapeId());
    }
}