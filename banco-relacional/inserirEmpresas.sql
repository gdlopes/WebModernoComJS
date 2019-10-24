alter table empresas modify cnpj varchar(14);

insert into empresas
  (nome, cnpj)
values
('Bradesco', 823981728937),
('Vale', 8723847384),
('Cielo', 0202093384);

-- descricao da tabela
desc empresas;

desc prefeitos;

desc empresas_unidades;

select * from empresas;
select * from cidades;

insert into empresas_unidades
  (empresa_id, cidade_id, sede)
values
  (1, 1, 1),
  (1, 2, 0),
  (2, 1, 0),
  (2, 2, 1);

