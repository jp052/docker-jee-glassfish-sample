package service.bean;

import persistence.model.Kpi;
import service.facade.KpiBeanFacade;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Date;
import java.util.List;

/**
 * Created by myuser on 10.05.2017.
 */
@Stateless
public class KpiBeanImpl implements KpiBeanFacade {

    @PersistenceContext
    private EntityManager em;

    @Override
    public Kpi findById (Long id) {
        List kpiList = em.createQuery("SELECT k FROM Kpi k where k.id = :id").setParameter("id", id).getResultList();
        return (kpiList.isEmpty() ? null : (Kpi) kpiList.get(0));
    }
}
