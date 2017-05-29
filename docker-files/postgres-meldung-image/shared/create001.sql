CREATE TABLE T_MELDUNG (
    id       INTEGER PRIMARY KEY,
    nummer   varchar(9),
    qbr      varchar(3),
    module   varchar(4),
    title    varchar(400),
    status   INTEGER,
    termin   date
);

alter table T_MELDUNG add CONSTRAINT uk01_meldung UNIQUE (nummer);

insert into T_MELDUNG(id, nummer, qbr, module, title, status, termin) VALUES (2001, '148541465', 'F20', 'KD04', 'Sieb von Behälter Scheibenwaschanlage verschmuzt', 30, to_date('24.02.2017', 'DD.MM.YYYY'));
insert into T_MELDUNG(id, nummer, qbr, module, title, status, termin) VALUES (2002, '149157080', 'F20', 'KB06', 'F2x, Fahrgestellnummer im Motorraum zerkratzt', 70, to_date('23.09.2015', 'DD.MM.YYYY'));
insert into T_MELDUNG(id, nummer, qbr, module, title, status, termin) VALUES (2003, '149391766', 'F20', 'MC01', 'B38B DME (5B79173) no response', 30, to_date('01.01.1970', 'DD.MM.YYYY'));
insert into T_MELDUNG(id, nummer, qbr, module, title, status, termin) VALUES (2004, '150373288', 'G11', 'KA03', 'Wasserablauftülle Gepäckraum wird während Fahrt verstopft', 70, to_date('01.01.1970', 'DD.MM.YYYY'));
insert into T_MELDUNG(id, nummer, qbr, module, title, status, termin) VALUES (2005, '158466016', 'F30', 'IB03', 'F31 / Klimagebläse läuft obwohl Fzg. verriegelt ist', 60, to_date('08.03.2016', 'DD.MM.YYYY'));
insert into T_MELDUNG(id, nummer, qbr, module, title, status, termin) VALUES (2006, '160224395', 'F30', 'IB03', '(PAN) FEM/BDC Weiterfahrt ohne Schlüssel', 60, to_date('19.01.2016', 'DD.MM.YYYY'));

CREATE SEQUENCE sequence_meldung
    INCREMENT 1
    START 20001;

commit;

