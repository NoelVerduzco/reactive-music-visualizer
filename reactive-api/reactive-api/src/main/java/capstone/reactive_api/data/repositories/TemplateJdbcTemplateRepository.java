package capstone.reactive_api.data.repositories;

import capstone.reactive_api.data.interfaces.TemplateRepository;
import capstone.reactive_api.data.mappers.EffectMapper;
import capstone.reactive_api.data.mappers.ShapeMapper;
import capstone.reactive_api.data.mappers.TemplateMapper;
import capstone.reactive_api.models.Effect;
import capstone.reactive_api.models.Shape;
import capstone.reactive_api.models.Template;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class TemplateJdbcTemplateRepository implements TemplateRepository {
    private final JdbcTemplate jdbcTemplate;

    public TemplateJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Template> findAll() {
        final String sql = "select template_id, template_name, canvas_color, data_rate, is_active "
                + "from template "
                + "where is_active = 1;";

        return jdbcTemplate.query(sql, new TemplateMapper());
    }

    @Override
    @Transactional
    public Template findById(int templateId) {
        final String sql = "select template_id, template_name, canvas_color, data_rate, is_active "
                + "from template "
                + "where template_id = ?;";

        Template result = jdbcTemplate.query(sql, new TemplateMapper(), templateId).stream()
                .findAny().orElse(null);

        if (result != null) {
            findShapesByTemplateId(result);

            for (int i = 0; i < result.getShapes().size(); i++) {
                findEffectsByShapeId(result.getShapes().get(i));
            }
        }

        return result;
    }

    @Override
    public Template add(Template template) {
        final String sql = "insert into template (template_name, canvas_color, data_rate, is_active) values (?, ?, ?, ?); ";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, template.getTemplateName());
            ps.setString(2, template.getCanvasColor());
            ps.setInt(3, template.getDataRate());
            ps.setInt(4, template.getIsActive());
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        template.setTemplateId(keyHolder.getKey().intValue());

        for (int i = 0; i < template.getShapes().size(); i++){
            addShapes(template.getShapes().get(i), template.getTemplateId());
        }

        return template;
    }

    @Override
    public boolean update(Template template) {
        return false;
    }

    @Override
    public boolean deleteById(int templateId) {
        return false;
    }

    private void findShapesByTemplateId(Template template) {
        final String sql = "select shape_id, shape_name, class_name, shape_color, x_position, y_position, template_id "
                + "from shape "
                + "where template_id = ?;";

        var shapes = jdbcTemplate.query(sql, new ShapeMapper(), template.getTemplateId());
        template.setShapes(shapes);
    }

    private void findEffectsByShapeId(Shape shape) {
        final String sql = "select effect_id, effect_name, is_enabled, effect_value, is_right_channel, frequency_bin, effect.shape_id "
                + "from effect "
                + "inner join shape on effect.shape_id = shape.shape_id "
                + "where effect.shape_id = ?;";

        var effects = jdbcTemplate.query(sql, new EffectMapper(), shape.getShapeId());
        shape.setEffects(effects);
    }

    private Shape addShapes(Shape shape, int templateId) {
        final String sql = "insert into shape (shape_name, class_name, shape_color, x_position, y_position, template_id ) values (?, ?, ?, ?, ?, ?);";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, shape.getShapeName());
            ps.setString(2, shape.getClassName());
            ps.setString(3, shape.getShapeColor());
            ps.setInt(4, shape.getxPosition());
            ps.setInt(5, shape.getyPosition());
            ps.setInt(6, templateId);
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        shape.setShapeId(keyHolder.getKey().intValue());

        for (int i = 0; i < shape.getEffects().size(); i++) {
            addEffects(shape.getEffects().get(i), shape.getShapeId());
        }

        return shape;
    }

    private Effect addEffects(Effect effect, int shapeId) {
        final String sql = "inert into effect (effect_name, is_enabled, effect_value, is_right_channel, frequency_bin, shape_id) values (?, ?, ?, ?, ?, ?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, effect.getEffectName());
            ps.setBoolean(2, effect.isEnabled());
            ps.setFloat(3, effect.getEffectValue());
            ps.setBoolean(4, effect.isRightChannel());
            ps.setInt(5, effect.getFrequencyBin());
            ps.setInt(6, shapeId);
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        effect.setEffectId(keyHolder.getKey().intValue());

        return effect;
    }
}

