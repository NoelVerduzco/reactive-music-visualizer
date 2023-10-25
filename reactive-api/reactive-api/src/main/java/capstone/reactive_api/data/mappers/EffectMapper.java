package capstone.reactive_api.data.mappers;

import capstone.reactive_api.models.Effect;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class EffectMapper implements RowMapper<Effect> {

    @Override
    public Effect mapRow(ResultSet resultSet, int i) throws SQLException {
        Effect effect = new Effect();
        effect.setEffectId(resultSet.getInt("effect_id"));
        effect.setEffectName(resultSet.getString("effect_name"));
        effect.setEnabled(resultSet.getBoolean("is_enabled"));
        effect.setEffectValue(resultSet.getFloat("effect_value"));
        effect.setRightChannel(resultSet.getBoolean("is_right_channel"));
        effect.setFrequencyBin(resultSet.getInt("frequency_bin"));
        effect.setShapeId(resultSet.getInt("shape_id"));

        return effect;
    }
}
