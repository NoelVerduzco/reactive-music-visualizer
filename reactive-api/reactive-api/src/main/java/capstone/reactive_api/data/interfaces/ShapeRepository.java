package capstone.reactive_api.data.interfaces;

import capstone.reactive_api.models.Shape;

import java.util.List;

public interface ShapeRepository {
    List<Shape> findAll();

    Shape findById(int shapeId);

    Shape add(Shape shape);

    boolean update(Shape shape);

    boolean deleteById(int shapeId);
}
