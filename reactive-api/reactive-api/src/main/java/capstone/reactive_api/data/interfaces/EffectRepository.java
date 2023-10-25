package capstone.reactive_api.data.interfaces;

import capstone.reactive_api.models.Effect;

import java.util.List;

public interface EffectRepository {
    List<Effect> findAll();

    Effect findById(int effectId);

    Effect add(Effect effect);

    boolean update(Effect effect);

    boolean deleteById(int effectId);
}
