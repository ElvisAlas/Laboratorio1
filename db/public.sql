-- Active: 1705366363032@@localhost@5432@rrhh
create table tbl_RRHH
(
    id serial primary key ,
    identidad varchar(13),
    nombre varchar(500), 
    creado TIMESTAMP DEFAULT current_timestamp
);

insert into tbl_RRHH(identidad,nombre)
values
        ('0501198011962','Melida Romero')

select * from tbl_RRHH