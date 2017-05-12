package service.facade;

import javax.ejb.Remote;

/**
 * Created by myuser on 10.05.2017.
 */
@Remote
public interface ProblemBeanFacade {

    String readProblemTitle(Long id);

    String writeProblemTitle(Long id);
}
