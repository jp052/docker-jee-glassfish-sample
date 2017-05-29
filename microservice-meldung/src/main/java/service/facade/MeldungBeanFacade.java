package service.facade;

import persistence.model.Meldung;

import javax.ejb.Remote;
import javax.json.JsonObject;
import java.util.List;

/**
 * Created by myuser on 10.05.2017.
 */
@Remote
public interface MeldungBeanFacade {
    List readAllReports();

    Meldung readMeldung(Long id);

    Meldung deleteMeldung(Long id);

    Meldung updateMeldung(Long id, JsonObject newValues);

    Meldung insertMeldung(JsonObject newValues);
}
