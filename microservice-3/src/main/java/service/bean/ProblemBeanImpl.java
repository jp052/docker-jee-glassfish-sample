package service.bean;

import persistence.model.Problem;
import service.facade.ProblemBeanFacade;

import javax.ejb.Stateless;
import javax.json.JsonObject;
import javax.persistence.*;
import java.util.Date;
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

    @Override
    public Problem deleteProblem(Long id) {
        Problem problem = em.find(Problem.class, id);
        if (problem != null) {
            em.remove(problem);
        }
        return problem;
    }

    @Override
    public Problem updateProblem(Long id, JsonObject newValues) {
        Problem problem = em.find(Problem.class, id);
        if (problem != null) {
            problem.setTitle(newValues.getString("title"));
            problem.setModule(newValues.getString("modul"));
            problem.setTermin(new Date(newValues.getString("termin")));
            problem.setStatus((long) newValues.getInt("status"));
        }
        return problem;
    }

    @Override
    public Problem insertProblem(JsonObject newValues) {
        Problem problem = new Problem();
        problem.setTitle(newValues.getString("title"));
        problem.setModule(newValues.getString("modul"));
        problem.setTermin(new Date(newValues.getString("termin")));
        problem.setStatus((long) newValues.getInt("status"));
        em.persist(problem);
        return problem;
    }

}
