package capstone.reactive_api.models;

import java.util.Objects;

public class Effect {
    private int effectId;
    private String effectName;
    private boolean isEnabled;
    private float effectValue;
    private boolean isRightChannel;
    private int frequencyBin;
    private int shapeId;

    public Effect() {
    }

    public Effect(int effectId, String effectName, boolean isEnabled, float effectValue, boolean isRightChannel, int frequencyBin, int shapeId) {
        this.effectId = effectId;
        this.effectName = effectName;
        this.isEnabled = isEnabled;
        this.effectValue = effectValue;
        this.isRightChannel = isRightChannel;
        this.frequencyBin = frequencyBin;
        this.shapeId = shapeId;
    }

    public int getEffectId() {
        return effectId;
    }

    public void setEffectId(int effectId) {
        this.effectId = effectId;
    }

    public String getEffectName() {
        return effectName;
    }

    public void setEffectName(String effectName) {
        this.effectName = effectName;
    }

    public boolean isEnabled() {
        return isEnabled;
    }

    public void setEnabled(boolean enabled) {
        isEnabled = enabled;
    }

    public float getEffectValue() {
        return effectValue;
    }

    public void setEffectValue(float effectValue) {
        this.effectValue = effectValue;
    }

    public boolean isRightChannel() {
        return isRightChannel;
    }

    public void setRightChannel(boolean rightChannel) {
        isRightChannel = rightChannel;
    }

    public int getFrequencyBin() {
        return frequencyBin;
    }

    public void setFrequencyBin(int frequencyBin) {
        this.frequencyBin = frequencyBin;
    }

    public int getShapeId() {
        return shapeId;
    }

    public void setShapeId(int shapeId) {
        this.shapeId = shapeId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Effect effect = (Effect) o;
        return effectId == effect.effectId && isEnabled == effect.isEnabled && Float.compare(effectValue, effect.effectValue) == 0 && isRightChannel == effect.isRightChannel && frequencyBin == effect.frequencyBin && shapeId == effect.shapeId && Objects.equals(effectName, effect.effectName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(effectId, effectName, isEnabled, effectValue, isRightChannel, frequencyBin, shapeId);
    }
}
