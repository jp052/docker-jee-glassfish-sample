package persistence.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by myuser on 10.05.2017.
 */
@Entity
@Table(name = "T_PROBLEM")
public class Problem implements Serializable {

    @Id
    private Long id;

    @Column
    private String title;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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
    private Date termin;

    public Date getTermin() {
        return termin;
    }

    public void setTermin(Date termin) {
        this.termin = termin;
    }

    @Column
    private Long status;

    public Long getStatus() {
        return status;
    }

    public void setStatus(Long status) {
        this.status = status;
    }

    @ManyToOne
    private Kpi kpi;

    public Kpi getKpi() {
        return kpi;
    }

    public void setKpi(Kpi kpi) {
        this.kpi = kpi;
    }
}
