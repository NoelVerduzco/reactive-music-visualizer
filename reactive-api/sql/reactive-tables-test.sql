drop database if exists reactive_test;
create database reactive_test;
use reactive_test;

-- create tables and relationships

create table template (
    template_id int primary key auto_increment,
    template_name varchar(50) not null,
    canvas_color varchar(50) not null,
    data_rate int not null,
    is_active tinyint not null
);

create table shape (
    shape_id int primary key auto_increment,
    shape_name varchar(50) not null,
    class_name varchar(125) not null,
    shape_color varchar(50) not null,
    x_position int not null,
    y_position int not null,
    template_id int not null,
    constraint fk_shape_template_id
        foreign key (template_id)
        references template(template_id)
);

create table effect (
    effect_id int primary key auto_increment,
    effect_name varchar(50) not null,
    is_enabled bool not null,
    effect_value float not null,
    is_right_channel bool not null,
	frequency_bin int not null,
    shape_id int not null,
	constraint fk_effect_shape_id
        foreign key (shape_id)
        references shape(shape_id)
);

delimiter //
create procedure set_known_good_state()
begin
	delete from effect;
    delete from shape;
	delete from template;
    
    alter table effect auto_increment = 1;
    alter table shape auto_increment = 1;
    alter table template auto_increment = 1;
    
	insert into template (template_id, template_name, canvas_color, data_rate, is_active) values
	(1, 'test 1', 'red', 10, 1);

	insert into shape (shape_id, shape_name, class_name, shape_color, x_position, y_position, template_id) values
	(1, 'square', 'reactive square', 'blue', 100, 100, 1),
	(2, 'square', 'reactive square', 'indigo', 200, 200, 1),
	(3, 'circle', 'reactive circle', 'indigo', 300, 300, 1);

	insert into effect (effect_id, effect_name, is_enabled, effect_value, is_right_channel, frequency_bin, shape_id) values
	(1, 'fade', false, 0.6, true, 0, 1),
	(2, 'vertical-shift', true, -125, false, 1, 1),
	(3, 'horizontal-shift', false, 500, true, 1, 1),
	(4, 'scale', true, 0.9, true, 0, 1),
	(5, 'rotate', false, -720, false, 1, 1),
	(6, 'fade', false, 0.6, true, 0, 2),
	(7, 'vertical-shift', true, -125, false, 1, 2),
	(8, 'horizontal-shift', false, 500, true, 1, 2),
	(9, 'scale', true, 0.9, true, 0, 2),
	(10, 'rotate', false, -720, false, 1, 2),
	(11, 'fade', false, 0.6, true, 0, 3),
	(12, 'vertical-shift', true, -125, false, 1, 3),
	(13, 'horizontal-shift', false, 500, true, 1, 3),
	(14, 'scale', true, 0.9, true, 0, 3),
	(15, 'rotate', false, -720, false, 1, 3);
end //