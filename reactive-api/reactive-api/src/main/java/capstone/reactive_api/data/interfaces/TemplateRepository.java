package capstone.reactive_api.data.interfaces;

import capstone.reactive_api.models.Template;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface TemplateRepository {
    List<Template> findAll();

    @Transactional
    Template findById(int templateId);

    Template add(Template template);

    boolean update(Template template);

    boolean deleteById(int templateId);
}
