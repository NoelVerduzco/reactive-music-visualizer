package capstone.reactive_api.data.mappers;

import capstone.reactive_api.models.Template;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class TemplateMapper implements RowMapper<Template> {

    @Override
    public Template mapRow(ResultSet resultSet, int i) throws SQLException {
        Template template = new Template();
        template.setTemplateId(resultSet.getInt("template_id"));
        template.setTemplateName(resultSet.getString("template_name"));
        template.setCanvasColor(resultSet.getString("canvas_color"));
        template.setDataRate(resultSet.getInt("data_rate"));
        template.setIsActive(resultSet.getInt("is_active"));

        return template;
    }
}
