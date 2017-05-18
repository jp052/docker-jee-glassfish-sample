package service.facade;

import persistence.model.Kpi;
import persistence.model.Problem;

import javax.ejb.Remote;
import javax.json.JsonObject;
import java.util.List;

/**
 * Created by myuser on 10.05.2017.
 */
@Remote
public interface KpiBeanFacade {
    Kpi findById(Long id);
}
