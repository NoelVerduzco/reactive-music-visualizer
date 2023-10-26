drop database if exists reactive;
create database reactive;
use reactive;

-- create tables and relationships
-- TODO: updated booleans is_enabled and is_right_channel to tinyint since MySQL represents booleans as tinyints

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