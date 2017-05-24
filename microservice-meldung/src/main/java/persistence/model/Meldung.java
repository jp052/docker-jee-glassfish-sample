package persistence.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

import static javax.persistence.GenerationType.*;

/**
 * Created by myuser on 10.05.2017.
 */
@Entity
@Table(name = "T_MELDUNG")
public class Meldung implements Serializable {

    @Id
    @GeneratedValue(strategy=SEQUENCE, generator="meld_seq" )
    @SequenceGenerator(
            name="meld_seq",
            sequenceName="sequence_meldung",
            allocationSize=1
    )

    //TODO

    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column
    private String nummer;

    public String getNummer() {
        return nummer;
    }

    public void setNummer(String nummer) {
        this.nummer = nummer;
    }

    @Column
    private String qbr;

    public String getQbr() {
        return qbr;
    }

    public void setQbr(String qbr) {
        this.qbr = qbr;
    }

    @Column
    private String module;

    public String getModule() {
        return module;
    }

    public void setModule(String module) {
        this.module = module;
    }

    @Column
    private String title;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Column
    private Long status;

    public Long getStatus() {
        return status;
    }

    public void setStatus(Long status) {
        this.status = status;
    }

    @Column
    private Date termin;

    public Date getTermin() {
        return termin;
    }

    public void setTermin(Date termin) {
        this.termin = termin;
    }
}
