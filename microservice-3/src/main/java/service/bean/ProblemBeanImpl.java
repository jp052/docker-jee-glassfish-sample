package service.bean;

import persistence.model.Problem;
import service.facade.ProblemBeanFacade;

import javax.ejb.Stateless;
import javax.persistence.*;

/**
 * Created by myuser on 10.05.2017.
 */
@Stateless
public class ProblemBeanImpl implements ProblemBeanFacade {

    @PersistenceContext
    private EntityManager em;

    public String readProblemTitle(Long id ) {
        Problem p1 = em.find(Problem.class, id);
        return p1.getTitle();
    }

    public String writeProblemTitle(Long id ) {
        Problem p1 = em.find(Problem.class, id);
        p1.setTitle("modified 2");
        return p1.getTitle();
    }
}
