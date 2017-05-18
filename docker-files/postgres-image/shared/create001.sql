create table T_KPI (
  id       INTEGER PRIMARY KEY,
  text     VARCHAR(40) UNIQUE
);

insert into T_KPI(id, text) VALUES (1001, 'Fuge');
insert into T_KPI(id, text) VALUES (1002, 'Schiebedach');
insert into T_KPI(id, text) VALUES (1003, 'Bremspedal');

CREATE TABLE T_PROBLEM (
    id       INTEGER PRIMARY KEY,
    title    varchar(400),
    module   varchar(4),
    termin   date,
    status   INTEGER,
    kpi_id   INTEGER
);

alter table T_PROBLEM add CONSTRAINT uk01_problem UNIQUE (title, module);

alter table T_PROBLEM add CONSTRAINT fk01_problem FOREIGN KEY(kpi_id) REFERENCES T_KPI(id);

insert into T_PROBLEM(id, title, module, termin, status, kpi_id) VALUES (1001, 'Fahrgestellnummer in Motorraum', 'CDE',  to_date('25.04.2017', 'DD.MM.YYYY'), 10, null);
insert into T_PROBLEM(id, title, module, termin, status, kpi_id) VALUES (1002, 'Fahrgestellnummer in Motorraum', 'IB03', to_date('25.04.2017', 'DD.MM.YYYY'), 10, null);
insert into T_PROBLEM(id, title, module, termin, status, kpi_id) VALUES (1003, 'Fuge undicht', 'ABC',  to_date('19.04.2017', 'DD.MM.YYYY'), 70, 1001);
insert into T_PROBLEM(id, title, module, termin, status, kpi_id) VALUES (1004, 'Fuge undicht', 'FEG',  to_date('19.04.2017', 'DD.MM.YYYY'), 70, 1001);
insert into T_PROBLEM(id, title, module, termin, status, kpi_id) VALUES (1005, 'Schiebedach gesprungen', 'CDE',  to_date('25.04.2017', 'DD.MM.YYYY'), 30, 1002);
insert into T_PROBLEM(id, title, module, termin, status, kpi_id) VALUES (1006, 'Schiebedach gesprungen', 'IB03', to_date('25.04.2017', 'DD.MM.YYYY'), 30, 1002);
insert into T_PROBLEM(id, title, module, termin, status, kpi_id) VALUES (1007, 'Sporadisch hartes Bremspedal', 'ABC',  to_date('22.04.2017', 'DD.MM.YYYY'), 10, 1003);
insert into T_PROBLEM(id, title, module, termin, status, kpi_id) VALUES (1008, 'Sporadisch hartes Bremspedal', 'FEG',  to_date('22.04.2017', 'DD.MM.YYYY'), 10, 1003);

CREATE SEQUENCE sequence_problem
    INCREMENT 1
    START 10001;

commit;

