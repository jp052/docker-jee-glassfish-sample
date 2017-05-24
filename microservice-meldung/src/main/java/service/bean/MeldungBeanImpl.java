package service.bean;

import persistence.model.Meldung;
import service.facade.MeldungBeanFacade;

import javax.ejb.Stateless;
import javax.json.JsonObject;
import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * Created by myuser on 10.05.2017.
 */
@Stateless
public class MeldungBeanImpl implements MeldungBeanFacade {

    @PersistenceContext
    private EntityManager em;

    //TODO

    @Override
    public List readAllReports() {
        return em.createQuery("SELECT m FROM Meldung m").getResultList();
    }

    @Override
    public Meldung readMeldung(Long id) {
        List meldungList =
                em.createQuery("SELECT m FROM Meldung m where m.id = :id")
                        .setParameter("id", id).getResultList();

        return (meldungList.isEmpty() ? null : (Meldung) meldungList.get(0));
    }

    @Override
    public Meldung deleteMeldung(Long id) {
        Meldung meldung = em.find(Meldung.class, id);
        if (meldung != null) {
            em.remove(meldung);
        }
        return meldung;
    }

    @Override
    public Meldung updateMeldung(Long id, JsonObject newValues) {
        Meldung meldung = em.find(Meldung.class, id);
        if (meldung != null) {
            meldung.setTitle(newValues.getString("nummer"));
            meldung.setModule(newValues.getString("qbr"));
            meldung.setTitle(newValues.getString("module"));
            meldung.setModule(newValues.getString("title"));
            meldung.setStatus((long) newValues.getInt("status"));
            meldung.setTermin(new Date(newValues.getString("termin")));
        }
        return meldung;
    }

    @Override
    public Meldung insertMeldung(JsonObject newValues) {
        Meldung meldung = new Meldung();
        meldung.setTitle(newValues.getString("nummer"));
        meldung.setModule(newValues.getString("qbr"));
        meldung.setTitle(newValues.getString("module"));
        meldung.setModule(newValues.getString("title"));
        meldung.setStatus((long) newValues.getInt("status"));
        meldung.setTermin(new Date(newValues.getString("termin")));
        em.persist(meldung);
        return meldung;
    }

}
