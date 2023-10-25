package capstone.reactive_api.models;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Shape {
    private int shapeId;
    private String shapeName;
    private String className;
    private String shapeColor;
    private int xPosition;
    private int yPosition;
    private int templateId;
    private List<Effect> effects = new ArrayList<>();

    public Shape() {
    }

    public Shape(int shapeId, String shapeName, String className, String shapeColor, int xPosition, int yPosition, int templateId, List<Effect> effects) {
        this.shapeId = shapeId;
        this.shapeName = shapeName;
        this.className = className;
        this.shapeColor = shapeColor;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.templateId = templateId;
        this.effects = effects;
    }

    public int getShapeId() {
        return shapeId;
    }

    public void setShapeId(int shapeId) {
        this.shapeId = shapeId;
    }

    public String getShapeName() {
        return shapeName;
    }

    public void setShapeName(String shapeName) {
        this.shapeName = shapeName;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getShapeColor() {
        return shapeColor;
    }

    public void setShapeColor(String shapeColor) {
        this.shapeColor = shapeColor;
    }

    public int getxPosition() {
        return xPosition;
    }

    public void setxPosition(int xPosition) {
        this.xPosition = xPosition;
    }

    public int getyPosition() {
        return yPosition;
    }

    public void setyPosition(int yPosition) {
        this.yPosition = yPosition;
    }

    public int getTemplateId() {
        return templateId;
    }

    public void setTemplateId(int templateId) {
        this.templateId = templateId;
    }

    public List<Effect> getEffects() {
        return effects;
    }

    public void setEffects(List<Effect> effects) {
        this.effects = effects;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Shape shape = (Shape) o;
        return shapeId == shape.shapeId && xPosition == shape.xPosition && yPosition == shape.yPosition && templateId == shape.templateId && Objects.equals(shapeName, shape.shapeName) && Objects.equals(className, shape.className) && Objects.equals(shapeColor, shape.shapeColor) && Objects.equals(effects, shape.effects);
    }

    @Override
    public int hashCode() {
        return Objects.hash(shapeId, shapeName, className, shapeColor, xPosition, yPosition, templateId, effects);
    }
}
