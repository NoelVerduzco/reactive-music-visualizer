package capstone.reactive_api.models;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Template {
    private int templateId;
    private String templateName;
    private String canvasColor;
    private int dataRate;
    private int isActive;
    private List<Shape> shapes = new ArrayList<>();

    public Template() {
    }

    public Template(int templateId, String templateName, String canvasColor, int dataRate, int isActive, List<Shape> shapes) {
        this.templateId = templateId;
        this.templateName = templateName;
        this.canvasColor = canvasColor;
        this.dataRate = dataRate;
        this.isActive = isActive;
        this.shapes = shapes;
    }

    public int getTemplateId() {
        return templateId;
    }

    public void setTemplateId(int templateId) {
        this.templateId = templateId;
    }

    public String getTemplateName() {
        return templateName;
    }

    public void setTemplateName(String templateName) {
        this.templateName = templateName;
    }

    public String getCanvasColor() {
        return canvasColor;
    }

    public void setCanvasColor(String canvasColor) {
        this.canvasColor = canvasColor;
    }

    public int getDataRate() {
        return dataRate;
    }

    public void setDataRate(int dataRate) {
        this.dataRate = dataRate;
    }

    public int getIsActive() {
        return isActive;
    }

    public void setIsActive(int isActive) {
        this.isActive = isActive;
    }

    public List<Shape> getShapes() {
        return shapes;
    }

    public void setShapes(List<Shape> shapes) {
        this.shapes = shapes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Template template = (Template) o;
        return templateId == template.templateId && dataRate == template.dataRate && isActive == template.isActive && Objects.equals(templateName, template.templateName) && Objects.equals(canvasColor, template.canvasColor) && Objects.equals(shapes, template.shapes);
    }

    @Override
    public int hashCode() {
        return Objects.hash(templateId, templateName, canvasColor, dataRate, isActive, shapes);
    }
}
