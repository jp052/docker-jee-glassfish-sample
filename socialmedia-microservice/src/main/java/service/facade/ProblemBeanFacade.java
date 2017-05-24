package service.facade;

import persistence.model.Problem;

import javax.ejb.Remote;
import javax.json.JsonObject;
import java.util.List;

/**
 * Created by myuser on 10.05.2017.
 */
@Remote
public interface ProblemBeanFacade {
    List readAllProblems();

    Problem readProblem(Long id);

    Problem deleteProblem(Long id);

    Problem updateProblem(Long id, JsonObject newValues);

    Problem insertProblem(JsonObject newValues);
}
