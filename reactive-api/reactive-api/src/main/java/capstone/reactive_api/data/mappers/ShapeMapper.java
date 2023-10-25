package capstone.reactive_api.data.mappers;

import capstone.reactive_api.models.Shape;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ShapeMapper implements RowMapper<Shape> {

    @Override
    public Shape mapRow(ResultSet resultSet, int i) throws SQLException {
        Shape shape = new Shape();
        shape.setShapeId(resultSet.getInt("shape_id"));
        shape.setShapeName(resultSet.getString("shape_name"));
        shape.setClassName(resultSet.getString("class_name"));
        shape.setShapeColor(resultSet.getString("shape_color"));
        shape.setxPosition(resultSet.getInt("x_position"));
        shape.setyPosition(resultSet.getInt("y_position"));
        shape.setTemplateId(resultSet.getInt("template_id"));

        return shape;
    }
}
