package jms.facade;

import javax.ejb.Remote;

/**
 * Created by myuser on 24.05.2017.
 */
@Remote
public interface MyQueueFacade {

    void send(String queueMessage);

    int browse();
}
