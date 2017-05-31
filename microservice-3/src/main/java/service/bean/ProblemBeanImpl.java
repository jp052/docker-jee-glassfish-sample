package service.bean;

import global.service.PQMBean;
import jms.facade.MyQueueFacade;
import persistence.model.Problem;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.enterprise.context.Dependent;
import javax.json.JsonObject;
import java.util.Date;
import java.util.List;

/**
 * Created by myuser on 10.05.2017.
 */
@Stateless
public class ProblemBeanImpl extends PQMBean {

    @EJB
    private MyQueueFacade mySender;

    public List<Problem> readAllProblems() {
        mySender.send("Huhu");
        return em.createQuery("SELECT p FROM Problem p").getResultList();
    }

    public Problem readProblem(Long id) {
        List problemList =
                em.createQuery("SELECT p FROM Problem p where p.id = :id")
                        .setParameter("id", id).getResultList();

        return (problemList.isEmpty() ? null : (Problem) problemList.get(0));
    }

    public Problem deleteProblem(Long id) {
        Problem problem = em.find(Problem.class, id);
        if (problem != null) {
            em.remove(problem);
        }
        return problem;
    }

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
