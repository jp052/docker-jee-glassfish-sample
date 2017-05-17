package service.facade;

import persistence.model.Problem;

import javax.ejb.Remote;
import java.util.List;

/**
 * Created by myuser on 10.05.2017.
 */
@Remote
public interface ProblemBeanFacade {
    List readAllProblems();

    Problem readProblem(Long id);
}
