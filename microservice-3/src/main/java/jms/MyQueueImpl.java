package jms;

import jms.facade.MyQueueFacade;

import javax.annotation.Resource;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.jms.*;
import java.util.Enumeration;

/**
 * Created by myuser on 23.05.2017.
 */
@Stateless
public class MyQueueImpl implements MyQueueFacade {

    @Resource(lookup = "jms/queue/MeldungQueue")
    private Queue queue;

    @Inject
    private JMSContext jmsContext;

    public void send(String queueMessage) {
        jmsContext.createProducer().send(queue, queueMessage);
    }

    public int browse() {
        int count = 0;
        try {
            Enumeration messages = jmsContext.createBrowser(queue).getEnumeration();
            while (messages.hasMoreElements()) {
                count++;
                TextMessage msg = (TextMessage) messages.nextElement();
            }

        } catch (JMSException e) {
            e.printStackTrace();
        }

        return  count;
    }

}
