package service.bean;

import persistence.model.Problem;
import service.facade.ProblemBeanFacade;

import javax.ejb.Stateless;
import javax.persistence.*;
import java.util.List;

/**
 * Created by myuser on 10.05.2017.
 */
@Stateless
public class ProblemBeanImpl implements ProblemBeanFacade {

    @PersistenceContext
    private EntityManager em;

    @Override
    public List readAllProblems() {
        return em.createQuery("SELECT p FROM Problem p").getResultList();
    }

    @Override
    public Problem readProblem(Long id) {
        List problemList =
                em.createQuery("SELECT p FROM Problem p where p.id = :id")
                .setParameter("id", id).getResultList();

        return (problemList.isEmpty() ? null : (Problem) problemList.get(0));
    }

}
