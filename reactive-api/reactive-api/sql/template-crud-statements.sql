use reactive_test;

-- findAll()

-- select template_id, template_name, canvas_color, data_rate, is_active 
-- from template 
-- where is_active = 1;

select template_id, template_name, canvas_color, data_rate, is_active
from template 
where is_active = 1;

-- findById()

-- select template_id, template_name, canvas_color, data_rate, is_active 
-- from template 
-- where template_id = ?;

select template_id, template_name, canvas_color, data_rate, is_active
from template 
where template_id = 1;

-- add()

-- insert into template (template_name, canvas_color, data_rate, is_active) values (?, ?, ?, ?); 

insert into template (template_name, canvas_color, data_rate, is_active) values ('test 2', 'grey', 300, 1);

-- update()

-- update template set 
-- template_name = ?, 
-- canvas_color = ?, 
-- data_rate = ? 
-- where template_id = ?;

update template set 
template_name = 'test 3', 
canvas_color = 'smokey', 
data_rate = '400' 
where template_id = 2;

-- "delete()"

-- update template set 
-- is_active = 0 
-- where template_id = ?;

update template set
is_active = 0
where template_id = 2;

-- SHAPE STATEMENTS

-- findAll()

-- select shape_id, shape_name, class_name, shape_color, x_position, y_position, template_id 
-- from shape 
-- where template_id = ?;

select shape_id, shape_name, class_name, shape_color, x_position, y_position, template_id 
from shape 
where template_id = 1;



-- EFFECT STATEMENTS

-- findALL()

-- select effect_id, effect_name, is_enabled, effect_value, is_right_channel, frequency_bin, effect.shape_id 
-- from effect 
-- inner join shape on effect.shape_id = shape.shape_id 
-- where effect.shape_id = ?;

select effect_id, effect_name, is_enabled, effect_value, is_right_channel, frequency_bin, effect.shape_id 
from effect 
inner join shape on effect.shape_id = shape.shape_id 
where effect.shape_id = 1;