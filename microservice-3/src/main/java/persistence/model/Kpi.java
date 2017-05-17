package persistence.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by myuser on 10.05.2017.
 */
@Entity
@Table(name = "T_KPI")
public class Kpi implements Serializable {


    @Id
    private Long id;

    @Column
    private String text;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
